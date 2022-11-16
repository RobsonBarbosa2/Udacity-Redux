import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_QUESTION } from "../actions/questions";
import { SAVE_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    //https://learn.udacity.com/nanodegrees/nd019/parts/87b7741f-aace-4bc9-88f4-7feccbb6eacb/lessons/762378ce-561b-40b4-89c3-1c5b591c6ab8/concepts/5e4a0b4d-83db-4a81-9afa-49776e8fe868
    case SAVE_ANSWER:
      return {
        ...state,
        [action.answer.qid]: {
          ...state[action.answer.qid],
          [action.answer.answer]: {
            ...state[action.answer.qid][action.answer.answer],
            votes: state[action.answer.qid][action.answer.answer].votes.concat([
              action.answer.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
