import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { countReducer } from "./countReducer";
import { todoReducer } from "./todoReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({todo:todoReducer,count:countReducer})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))
