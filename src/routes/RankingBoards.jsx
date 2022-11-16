import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class NavQuestion extends Component {
  render() {
    let leaderboard = [];

    const { users } = this.props;
    Object.values(users).map((user) => {
      leaderboard.push({
        id: user.id,
        image: user.avatarURL,
        name: user.name,
        questions: user.questions.length,
        answers: Object.keys(user.answers).length,
        scorePoints: user.questions.length + Object.keys(user.answers).length,
      });
    });
    leaderboard.sort((a, b) => b.scorePoints - a.scorePoints);
    //tip from an udacity mentor who helped me with this

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    //https://developer.mozilla.org/en-US/search?q=Object
    return (
      <div>
        <div className="flex flex-col items-center bg-indigo-300 md:mx-80 py-10">
          <div>Ranking</div>
          <div>
            <ul>
              {/* Somar perguntas e respostas */}
              {leaderboard.map((user) => (
                <li key={user.id}>
                  <div>
                    <img src={user.image} alt={user.name} />
                    <div>{user.name}</div>
                    <span></span>
                    <div>Questions: {user.questions}</div>
                    <div>Answers: {user.answers}</div>
                    <div>Score: {user.scorePoints}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
