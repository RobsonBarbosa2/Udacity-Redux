import React, { Component, useState } from "react";
import { connect } from "react-redux";
import UnitQuestion from "./components/UnitQuestion";
import { redirect, Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchList: false,
      //true for questionListAnswered
      //false for questionListNotAnswered
    };
  }

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
    const questionListNotAnswered = [];
    const questionListAnswered = [];

    questionList.map((question) =>
      this.voted(question)
        ? questionListAnswered.push(question)
        : questionListNotAnswered.push(question)
    );

    return (
      <div>
        <button
          onClick={() => this.setState({ switchList: false })}
          className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm"
        >
          Not voted
        </button>
        <button
          onClick={() => this.setState({ switchList: true })}
          className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm"
        >
          Voted
        </button>

        {this.state.switchList ? (
          <ul>
            {questionListAnswered.map((question) => (
              <Link to={`/questions/${question.id}`}>
                <li key={question.id} className="my-10">
                  <UnitQuestion quest={question} />
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <ul>
            {questionListNotAnswered.map((question) => (
              <Link to={`/questions/${question.id}`}>
                <li key={question.id} className="my-10">
                  <UnitQuestion quest={question} />
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const questionArray = Object.values(questions);
  return {
    questionsList: questionArray,
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
