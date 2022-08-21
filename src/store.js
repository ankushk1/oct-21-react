import { createStore, combineReducers, applyMiddleware} from "redux";
import counterReducer from "./reducers/counterReducer";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  counterData: counterReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

export default store;
