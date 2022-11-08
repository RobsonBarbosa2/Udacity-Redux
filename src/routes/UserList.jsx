import React, { Component, Fragment } from "react";
import User from "./components/User";
import { connect } from "react-redux";

class UserList extends Component {
  render() {
    return (
      <Fragment>
        {console.log(this.props)}
        <div className="flex w-full flex-col">
          <span className="text-indigo-700 text-3xl w-full text-center mb-10">
            Select your user
          </span>
          <div className="">
            <h3>
              <ul>
                {this.props.usersList.map((user) => (
                  // <li key={user.id}>
                  //   <User user={user} />
                  // </li>
                  <li key={user.id}>
                    <User user={user}></User>
                  </li>
                ))}
              </ul>
            </h3>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  const usersArray = Object.values(users);
  return {
    usersList: usersArray,
  };
}

export default connect(mapStateToProps)(UserList);
