import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function NavQuestion(props) {
  const [optOne, setOptOne] = useState("");
  const [optTwo, setOptTwo] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name);
    if (name === "optOne") {
      setOptOne(text);
    }
    if (name === "optTwo") {
      setOptTwo(text);
    }
  };

  useEffect(() => {
    if (redirect) {
      navigate("/");
    }
  }, [redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = props;
    console.log(optOne);
    dispatch(
      handleAddQuestion({
        author: props.authedUser.id,
        optionOneText: optOne,
        optionTwoText: optTwo,
      })
    );
    setRedirect(true);
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-indigo-300 md:mx-80 py-10">
        <div>Create a new Question</div>
        <form>
          <input
            type="text"
            name="optOne"
            value={optOne}
            onChange={handleChange}
            placeholder="Option One..."
          />
          <span>OR</span>
          <input
            type="text"
            name="optTwo"
            value={optTwo}
            onChange={handleChange}
            placeholder="Option Two..."
          />
          <button
            type={"button"}
            className="cursor-pointer disabled:bg-slate-500 mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
            onClick={handleSubmit}
          >
            Create Question
          </button>{" "}
        </form>

        <div></div>
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

export default connect(mapStateToProps)(NavQuestion);
