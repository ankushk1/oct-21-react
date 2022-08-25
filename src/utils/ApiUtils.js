import axios from "axios";
const api_url = "http://localhost:8000";

export const signup = async (user) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/users/signup`,
      data: user
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const signin = async (signInData) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/users/signin`,
      data: signInData
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getBooks = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${api_url}/books/getBooks`,
      headers: {
        "access-token": localStorage.getItem("token"),
        'accept': "application/json",
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
