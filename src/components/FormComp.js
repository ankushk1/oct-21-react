import React, { useState } from "react";
import Navbar from "./Navbar";

const FormComp = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const onHandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className= "form-component">
      <div>
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
      </div>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          value={user.firstname}
          onChange={(event) => onHandleChange(event)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={user.lastname}
          onChange={(event) => onHandleChange(event)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={(event) => onHandleChange(event)}
        />
      </form>
    </div>
  );
};

export default FormComp;
