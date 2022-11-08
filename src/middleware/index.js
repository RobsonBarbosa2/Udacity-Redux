import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, logger);
//this code is from the course
