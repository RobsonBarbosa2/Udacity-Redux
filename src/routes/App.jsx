import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ErrorPage from "./error-page";
import Contact from "./contact";
import UserList from "./UserList";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Question from "./Question";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Question />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <Nav />
        {console.log("DASHBOARD", this.props.authedUser)}
        {this.props.authedUser == null ? (
          <UserList />
        ) : (
          <RouterProvider router={router} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
