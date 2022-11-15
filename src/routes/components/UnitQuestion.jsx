import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionUnit extends Component {
  render() {
    const { users, quest } = this.props;
    const { author, optionOne, optionTwo } = quest;

    return (
      <div className="flex flex-col items-center bg-indigo-300 md:mx-80 py-10">
        <div>Asked by Author {users[author].name}</div>
        <div>
          <img
            src={users[author].avatarURL}
            alt={"profile"}
            className="w-10 h-10"
          />
        </div>

        <div>
          <div>Would you rather...</div>

          <form className="flex flex-col border-2 items-center">
            <div>
              <input name={1} type="radio" value="optionOne" />
              <label htmlFor="optionOne">{optionOne.text}</label>
            </div>
            <div className="">
              <input name={1} type="radio" value="optionTwo" />
              <label htmlFor="optionTwo">{optionTwo.text}</label>
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

export default connect(mapStateToProps)(QuestionUnit);
