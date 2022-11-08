import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ErrorPage from "./error-page";
import Contact from "./contact";
import UserList from "./UserList";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Nav from "./components/Nav";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
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
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default connect()(App);
