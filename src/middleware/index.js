import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "./logger";

export const middleware = applyMiddleware(thunk, logger);
