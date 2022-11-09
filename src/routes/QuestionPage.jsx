import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class QuestionPage extends Component {
  render() {
    return (
      <div className="flex flex-col items-center bg-indigo-300 mx-80 py-10">
        <div>Asked by Author</div>
        <div>
          {/* <img
            src={users[author].avatarURL}
            alt={"profile"}
            className="w-10 h-10"
          /> */}
        </div>

        <div>
          <div>Would you rather...</div>

          <form className="flex flex-col border-2 items-center">
            <div>
              <input name={1} type="radio" value="optionOne" />
              <label htmlFor="optionOne"></label>
            </div>
            <div className="">
              <input name={1} type="radio" value="optionTwo" />
              <label htmlFor="optionTwo"></label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default mapStateToProps(QuestionPage);
