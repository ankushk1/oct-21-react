import { GET_BOOKS_DATA } from "../actions/actionsTypes";

const initialState = {
  booksDataFromReducer: []
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS_DATA:
      return { ...state, booksDataFromReducer: action.payload };
    default:
      return state;
  }
}
