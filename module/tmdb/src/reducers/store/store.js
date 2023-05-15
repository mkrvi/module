import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "../rootReducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";

const middlewares = [thunk]
const isDevelopmentMode = process.env.NODE_ENV === 'development'

if (isDevelopmentMode) {
    middlewares.push(logger)
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composeEnhancer = compose(middlewareEnhancer);


export const store = createStore(rootReducer, composeEnhancer);
