import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { handleAddAnswerQuestion } from "../actions/questions";
import ErrorPage from "./error-page";

class QuestionPage extends Component {
  state = {
    selectedOption: null,
    voted: null,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { id } = this.props;
    const { questions, users } = this.props;
    // console.log("clicked handleClick");
    dispatch(
      handleAddAnswerQuestion({
        authedUser: this.props.authedUser.id,
        qid: id,
        answer: this.state.selectedOption,
      })
    );
    this.setState(() => ({
      voted: true,
    }));
  };

  verifyPercentage = (option) => {
    const { questions, id } = this.props;
    const question = questions[id];
    const total =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionVotes = question[option].votes.length;
    const percentage = (optionVotes / total) * 100;
    return percentage;
  };

  verifyQtdVotes = (option) => {
    const { questions, id } = this.props;
    const question = questions[id];
    const optionVotes = question[option].votes.length;
    return optionVotes;
  };

  hasVoted = () => {
    const { authedUser } = this.props;
    const { id } = this.props;
    const { questions, users } = this.props;

    // console.log(questions[id].optionOne.votes.includes(authedUser.id));
    // console.log(questions[id].optionTwo.votes.includes(authedUser.id));

    return (
      questions[id].optionOne.votes.includes(authedUser.id) ||
      questions[id].optionTwo.votes.includes(authedUser.id)
    );
  };

  verifyVote = () => {
    const { authedUser } = this.props;
    const { id } = this.props;
    const { questions, users } = this.props;
    if (this.hasVoted()) {
      if (questions[id].optionOne.votes.includes(authedUser.id)) {
        return "optionOne";
      } else {
        return "optionTwo";
      }
    } else {
      return null;
    }
  };

  handleChange = (e) => {
    if (this.hasVoted() !== true) {
      const choise = e.target.value;
      // console.log(this.state.selectedOption);
      this.setState(() => ({
        selectedOption: choise,
      }));
    } else {
      e.preventDefault();
    }
  };

  componentDidMount() {
    if (this.hasVoted()) {
      this.setState(() => ({
        selectedOption: this.verifyVote(),
        voted: true,
      }));
    }
  }

  render() {
    const { id } = this.props;
    const { questions, users } = this.props;

    return (
      <div>
        {questions[id] ? (
          <div>
            {" "}
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
                    <div className="">
                      <input
                        onChange={this.handleChange}
                        checked={this.state.selectedOption === "optionOne"}
                        name={1}
                        type="radio"
                        value="optionOne"
                        disabled={this.state.voted}
                      />
                      <label htmlFor="optionOne">
                        {questions[id].optionOne.text}
                      </label>
                      <div>
                        {this.hasVoted() === true
                          ? this.verifyPercentage("optionOne").toFixed(2) + "%"
                          : null}
                      </div>
                      <div
                        className={`${
                          this.verifyVote() === "optionOne"
                            ? "bg-green-500"
                            : null
                        }`}
                      >
                        {this.hasVoted() === true
                          ? this.verifyQtdVotes("optionOne") + " votes"
                          : null}
                      </div>
                    </div>
                    <di>
                      <input
                        name={1}
                        onChange={this.handleChange}
                        checked={this.state.selectedOption === "optionTwo"}
                        type="radio"
                        disabled={this.state.voted}
                        value="optionTwo"
                      />
                      <label htmlFor="optionTwo">
                        {questions[id].optionTwo.text}
                      </label>
                      <div>
                        {this.hasVoted() === true
                          ? this.verifyPercentage("optionTwo").toFixed(2) + "%"
                          : null}
                      </div>
                      <div
                        className={`${
                          this.verifyVote() === "optionTwo"
                            ? "bg-green-500"
                            : null
                        }`}
                      >
                        {this.hasVoted() === true
                          ? this.verifyQtdVotes("optionTwo") + " votes"
                          : null}
                      </div>
                    </di>
                    <div className="">
                      {this.state.voted !== true ? (
                        <button
                          type={"button"}
                          className="mt-5 cursor-pointer disabled:bg-slate-500 mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
                          onClick={this.handleClick}
                        >
                          Vote
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ErrorPage />
        )}
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
