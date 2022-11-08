export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTION,
    question,
  };
}
