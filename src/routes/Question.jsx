import React, { Component } from "react";
import { connect } from "react-redux";
import UnitQuestion from "./components/UnitQuestion";
import { redirect, Link } from "react-router-dom";

class Question extends Component {
  voted = (quest) => {
    const { authedUser } = this.props;
    const { optionOne, optionTwo } = quest;

    return (
      optionOne.votes.includes(authedUser.id) ||
      optionTwo.votes.includes(authedUser.id)
    );
  };

  render() {
    const questionList = this.props.questionsList;

    console.log(this.props);
    return (
      <div>
        <ul>
          {questionList.map((question) => (
            <Link to={`/questions/${question.id}`}>
              {this.voted(question) ? (
                <span>Votou</span>
              ) : (
                <span>Não votou</span>
              )}

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

function mapStateToProps({ questions, authedUser, users }) {
  console.log(questions);
  const questionArray = Object.values(questions);
  return {
    questionsList: questionArray,
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
