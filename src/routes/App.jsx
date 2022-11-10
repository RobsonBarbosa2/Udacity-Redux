import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ErrorPage from "./error-page";
import Contact from "./contact";
import UserList from "./UserList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Question from "./Question";
import QuestionPage from "./QuestionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Question />,
  },
  {
    path: "questions/:id",
    element: <QuestionPage />,
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
