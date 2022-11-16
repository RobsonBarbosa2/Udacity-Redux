import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authedUser";

class Logout extends Component {
  handleSelectUser = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logoutUser());
    console.log("clicked logout");
  };
  render() {
    return (
      <div>
        <div className=" items-center  md:mx-80 py-10">
          <button onClick={this.handleSelectUser}>Logout</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ dispatch }) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps)(Logout);
