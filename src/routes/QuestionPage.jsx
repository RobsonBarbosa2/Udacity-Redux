import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function QuestionPage(props) {
  const { id } = useParams();
  const { questions, users } = props;

  const hasVoted = () => {
    const { authedUser } = props;

    console.log(questions[id].optionOne.votes.includes(authedUser.id));
    console.log(questions[id].optionTwo.votes.includes(authedUser.id));

    return (
      questions[id].optionOne.votes.includes(authedUser.id) ||
      questions[id].optionTwo.votes.includes(authedUser.id)
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { dispatch } = props;
  };

  const verifyVote = () => {
    const { authedUser } = props;
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

  React.state = {
    selectedOption: verifyVote(),
    voted: hasVoted(),
  };

  const [selectedOption, setSelectedOption] = useState(null);

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
            <div onClick={() => setSelectedOption("optionOne")}>
              <input
                checked={React.state.selectedOption === "optionOne"}
                name={1}
                type="radio"
                value="optionOne"
                onChange={() =>
                  React.state.voted !== true
                    ? setSelectedOption("optionOne")
                    : null
                }
                disabled={React.state.voted}
              />
              <label htmlFor="optionOne">{questions[id].optionOne.text}</label>
            </div>
            <div onClick={() => setSelectedOption("optionTwo")}>
              <input
                name={1}
                onChange={() =>
                  React.state.voted !== true
                    ? setSelectedOption("optionTwo")
                    : null
                }
                checked={React.state.selectedOption === "optionTwo"}
                type="radio"
                value="optionTwo"
                disabled={React.state.voted}
              />
              <label htmlFor="optionTwo">{questions[id].optionTwo.text}</label>
            </div>
            <button
              type={"button"}
              disabled={React.state.voted}
              className="cursor-pointer disabled:bg-slate-500 mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
              onClick={handleClick}
            >
              Vote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(QuestionPage);
