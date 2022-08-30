import { getBooks } from "../utils/ApiUtils";
import { error, success } from "../utils/Toast";
import { GET_BOOKS_DATA } from "./actionsTypes";

export const getBooksData = () => async (dispatch) => {
  const apiResponse = await getBooks();
  if(apiResponse.status === 200) {
    // success(apiResponse.data.message)
  } else{
    // error(apiResponse.response.data.message)
  }
  dispatch({
    type: GET_BOOKS_DATA,
    payload: apiResponse.data
  });
};
