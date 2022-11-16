import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ErrorPage from "./error-page";
import Contact from "./contact";
import UserList from "./UserList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Nav from "./components/Nav";
import Question from "./Question";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import RankingBoards from "./RankingBoards";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    function Home() {
      return <Question />;
    }

    function Quest() {
      let { id } = useParams();
      return <QuestionPage id={id} />;

      //https://reactrouter.com/en/main/hooks/use-params
    }

    function NewQuest() {
      return <NewQuestion />;
      //https://reactrouter.com/en/main/hooks/use-params
    }
    function Rank() {
      return <RankingBoards />;
      //https://reactrouter.com/en/main/hooks/use-params
    }
    return (
      <div>
        {this.props.authedUser === null ? (
          <UserList />
        ) : (
          <Router>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="questions/:id" element={<Quest />} />
              <Route path="new" element={<NewQuest />} />
              <Route path="ranking" element={<Rank />} />
            </Routes>
          </Router>
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
