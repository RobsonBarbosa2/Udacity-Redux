import React, { Component } from "react";
import { connect } from "react-redux";
import UnitQuestion from "./components/UnitQuestion";
import { redirect, Link } from "react-router-dom";

class Question extends Component {
  render() {
    const questionList = this.props.questionsList;

    return (
      <div>
        <ul>
          {questionList.map((question) => (
            <Link to={`/questions/${question.id}`}>
              <li key={question.id} className="my-10">
                <UnitQuestion quest={question} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  console.log(questions);
  const questionArray = Object.values(questions);
  return {
    questionsList: questionArray,
  };
}

export default connect(mapStateToProps)(Question);
