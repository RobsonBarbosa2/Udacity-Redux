import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <>
        <div className="h-full w-full">
          <nav
            role="navigation"
            className="px-6 lg:px-4 w-full mx-auto block bg-white shadow-md"
          >
            <div className="container  justify-between h-20 flex items-center bg-white md:items-stretch mx-auto border-b border-gray-200">
              <div className="h-full flex items-center">
                <ul className="pr-12 sm:flex items-center h-full">
                  <li>
                    <Link
                      to="/"
                      className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal"
                    >
                      New
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal"
                    >
                      Ranking
                    </Link>
                  </li>
                  {/* <li>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal"
                    >
                      Settings
                    </a>
                  </li>  */}
                </ul>
              </div>
              {this.props.authedUser !== null ? (
                <div className="md:flex items-center justify-end hidden">
                  <div className="flex items-center">
                    <span className="pr-4">{this.props.authedUser.name}</span>
                    <div className="h-full flex items-center">
                      <button
                        aria-label="dropdown"
                        className="focus:outline-none focus:text-gray-900 text-gray-800 border-b-2 border-transparent focus:border-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
                        onclick="dropdownHandler(this)"
                      >
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src={this.props.authedUser.avatarURL}
                          alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </nav>
        </div>
      </>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Nav);
