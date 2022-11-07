import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            {/* <img src={user.avatarURL} alt={user.name} className="w-14 h-14" /> */}
            <span className="font-semibold px-4 self-center cursor-pointer hover:text-indigo-700 text-black">
              {/* {user.name} */}teste
            </span>
          </div>
        </div>
      </>
    );
  }
}
