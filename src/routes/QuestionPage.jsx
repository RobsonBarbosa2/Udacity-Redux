import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function QuestionPage(props) {
  let { id } = useParams();
  const { questions, users } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: QuestionPage.jsx ~ line 13 ~ handleSubmit ~ e", e);
  };

  return (
    <div className="flex flex-col items-center bg-indigo-300 mx-80 py-10">
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
          <div>
            <input name={1} type="radio" value="optionOne" />
            <label htmlFor="optionOne">{questions[id].optionOne.text}</label>
          </div>
          <div className="">
            <input name={1} type="radio" value="optionTwo" />
            <label htmlFor="optionTwo">{questions[id].optionTwo.text}</label>
          </div>
          <submit
            onClick={handleSubmit}
            className="cursor-pointer mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
          >
            Vote
          </submit>
        </form>
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
