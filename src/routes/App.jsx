import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ErrorPage from "./error-page";
import Contact from "./contact";
import UserList from "./UserList";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "contacts/:contactId",
    element: <Dashboard />,
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
        {this.props.authedUser === null ? (
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
    authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(App);
