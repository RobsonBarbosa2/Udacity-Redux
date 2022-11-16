import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NavQuestion extends Component {
  state = {
    optOne: "",
    optTwo: "",
  };

  handleChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;
    this.setState(() => ({
      [name]: text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optOne, optTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(
      handleAddQuestion({
        author: this.props.authedUser.id,
        optionOneText: optOne,
        optionTwoText: optTwo,
      })
    );
    //Add tweet to store
    this.setState(() => ({
      optOne: "",
      optTwo: "",
    }));
  };
  render() {
    return (
      <div>
        <div className="flex flex-col items-center bg-indigo-300 md:mx-80 py-10">
          <div>Create a new Question</div>
          <form>
            <input
              type="text"
              name="optOne"
              value={this.state.optOne}
              onChange={this.handleChange}
              placeholder="Option One..."
            />
            <span>OR</span>
            <input
              type="text"
              name="optTwo"
              value={this.state.optTwo}
              onChange={this.handleChange}
              placeholder="Option Two..."
            />
            <button
              type={"button"}
              className="cursor-pointer disabled:bg-slate-500 mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
              onClick={this.handleSubmit}
            >
              Create Question
            </button>{" "}
          </form>

          <div></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(NavQuestion);
