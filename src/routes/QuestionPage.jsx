import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { handleAddAnswerQuestion } from "../actions/questions";

class QuestionPage extends Component {
  state = {
    selectedOption: null,
    voted: null,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    console.log("clicked");
    dispatch(
      handleAddAnswerQuestion({
        authedUser: this.props.authedUser.id,
        qid: this.props.id,
        answer: this.state.selectedOption,
      })
    );
  };

  render() {
    const { id } = this.props;
    const { questions, users } = this.props;

    const hasVoted = () => {
      const { authedUser } = this.props;

      console.log(questions[id].optionOne.votes.includes(authedUser.id));
      console.log(questions[id].optionTwo.votes.includes(authedUser.id));

      return (
        questions[id].optionOne.votes.includes(authedUser.id) ||
        questions[id].optionTwo.votes.includes(authedUser.id)
      );
    };

    const verifyVote = () => {
      const { authedUser } = this.props;
      if (hasVoted()) {
        if (questions[id].optionOne.votes.includes(authedUser.id)) {
          return "optionOne";
        } else {
          return "optionTwo";
        }
      } else {
        return null;
      }
    };
    return (
      <div>
        <div className="flex flex-col items-center bg-indigo-300 md:mx-80 py-10">
          <div>Asked by Author {questions[id].author}</div>
          <div>
            <img
              src={users[questions[id].author].avatarURL}
              alt={"profile"}
              className="w-10 h-10"
            />
          </div>

          <div>
            <div>Would you rather...</div>
            <form className="flex flex-col border-2 items-center">
              <div
                onClick={() =>
                  this.setState(() => ({
                    selectedOption: "optionOne",
                  }))
                }
              >
                <input
                  checked={this.state.selectedOption === "optionOne"}
                  name={1}
                  type="radio"
                  value="optionOne"
                  onChange={() =>
                    this.setState(() => ({
                      selectedOption: "optionOne",
                    }))
                  }
                  disabled={null}
                />
                <label htmlFor="optionOne">
                  {questions[id].optionOne.text}
                </label>
              </div>
              <div
                onClick={() =>
                  this.setState(() => ({
                    selectedOption: "optionTwo",
                  }))
                }
              >
                <input
                  name={1}
                  onChange={() =>
                    this.setState(() => ({
                      selectedOption: "optionTwo",
                    }))
                  }
                  checked={this.state.selectedOption === "optionTwo"}
                  type="radio"
                  value="optionTwo"
                />
                <label htmlFor="optionTwo">
                  {questions[id].optionTwo.text}
                </label>
              </div>
              <button
                type={"button"}
                className="cursor-pointer disabled:bg-slate-500 mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
                onClick={this.handleClick}
              >
                Vote
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props;
  return {
    id,
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(QuestionPage);
