import React, { Component } from "react";
import { connect } from "react-redux";
import UnitQuestion from "./components/UnitQuestion";

class Question extends Component {
  render() {
    const questionList = this.props.questionsList;

    console.log(this.props);
    return (
      <div>
        <ul>
          {questionList.map((question) => (
            <li key={question.id}>
              <span>{question.id}</span>
              <UnitQuestion />
            </li>
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
