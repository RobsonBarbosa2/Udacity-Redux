import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";

class User extends Component {
  handleSelectUser = (e) => {
    e.preventDefault();
    const { user, dispatch } = this.props;

    dispatch(setAuthedUser(user));
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <div className="flex flex-col items-center">
          <div className="flex flex-row" onClick={this.handleSelectUser}>
            <img src={user.avatarURL} alt={user.name} className="w-14 h-14" />
            <span className="font-semibold px-4 self-center cursor-pointer hover:text-indigo-700 text-black">
              {user.name}
            </span>
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps({ dispatch }) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps)(User);
