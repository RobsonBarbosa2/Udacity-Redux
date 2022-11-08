import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Contact from "./routes/contact";
import UserList from "./routes/UserList";
import "./dist/output.css";
import Nav from "./routes/components/Nav";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Nav />
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();