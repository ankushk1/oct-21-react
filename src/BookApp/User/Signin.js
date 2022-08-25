import React from "react";
import { useHistory } from "react-router-dom";
import { signin } from "../../utils/ApiUtils";
import { useFormHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/Toast";


const Signin = () => {
  const { values, onHandleChange } = useFormHook();
  const history = useHistory();

  const onSubmit = async () => {
    const apiResponse = await signin(values);
    if(apiResponse.status === 200) {
      success(apiResponse.data.message)
      localStorage.setItem("token", apiResponse.data.token)
      history.push('/books')
    } else{
      error(apiResponse.response.data.message)
    }
  }

  return (
    <div>
      <h4 className="my-5">Signin</h4>
      <div>
        <form className="d-flex flex-column align-items-center ">
          <input
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
        </form>
        <button className="btn btn-primary mt-3" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signin;
