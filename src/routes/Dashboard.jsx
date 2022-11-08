import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component() {
  render() {
    return <div>teste</div>;
  }
}

function mapStateToProps({ questions }) {
  const questionArray = Object.values(questions);
  return {
    questionList: questionArray,
  };
}

export default connect(mapStateToProps)(Dashboard);
