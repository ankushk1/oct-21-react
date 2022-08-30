import { createStore, combineReducers, applyMiddleware} from "redux";
import counterReducer from "./reducers/counterReducer";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import booksReducer from "./reducers/booksReducer";

const reducers = combineReducers({
  counterData: counterReducer,
  booksDataFromStore: booksReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
