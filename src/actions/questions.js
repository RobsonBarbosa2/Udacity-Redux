import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  console.log("addQuestion", question);
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    return saveQuestion(question).then((question) =>
      dispatch(addQuestion(question))
    );
  };
}

function AddAnswerQuestion(answer) {
  console.log("Answer:", answer);
  return {
    type: SAVE_ANSWER,
    answer,
  };
}
export function handleAddAnswerQuestion(answer) {
  console.log("handleAddAnswerQuestion:", answer);
  return (dispatch, getState) => {
    return saveQuestionAnswer(answer).then(() =>
      dispatch(AddAnswerQuestion(answer))
    );
  };
}
