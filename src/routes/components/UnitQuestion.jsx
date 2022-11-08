import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionUnit extends Component {
  render() {
    return (
      <div>
        <div>Asked by Author</div>
        <div>{/* <img src={} alt={"profile"} /> */}</div>
        <div>
          <div>Would you rather...</div>

          <form>
            <div>
              <input name={1} type="radio" value="optionOne" />
              <label htmlFor="optionOne">Texto1</label>
            </div>
            <div className="">
              <input name={1} type="radio" value="optionTwo" />
              <label htmlFor="optionTwo">Texto2</label>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionUnit);
