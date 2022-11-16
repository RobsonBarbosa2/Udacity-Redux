import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class NavQuestion extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col items-center bg-indigo-300 md:mx-80 py-10">
          <div>Ranking</div>
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
