import React, { Component, Fragment } from "react";
import User from "./components/User";

export default class UserList extends Component {
  render() {
    return (
      <Fragment>
        <div className="flex w-full flex-col">
          <span className="text-indigo-700 text-3xl w-full text-center mb-10">
            Select your user
          </span>
          <div className="">
            <User />
            <User />
          </div>
        </div>
      </Fragment>
    );
  }
}
