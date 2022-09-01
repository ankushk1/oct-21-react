import React from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { signup } from "../../utils/ApiUtils";
import { useFormHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/Toast";

const Signup = () => {
  const { values, onHandleChange } = useFormHook();
  const history = useHistory();

  const onSubmit = async () => {
    const apiResponse = await signup(values);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      history.push("/signin");
    } else {
      error(apiResponse.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <h4 className="my-5">Signup</h4>
      <div>
        <form className="d-flex flex-column align-items-center ">
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            value={values.firstname}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            value={values.lastname}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
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
      <h4>
        If Registered, SignIn <Link to="/signin">Here</Link>
      </h4>
    </div>
  );
};

export default Signup;
