import axios from "axios";
const api_url = "http://localhost:8000";

export const signup = async (user) => {
  try{
    const response = await axios({
      method : 'POST',
      url : `${api_url}/users/signup`,
      data: user
    })
    return response
  } catch(err) {
    console.log(err)
    return err
  }
}