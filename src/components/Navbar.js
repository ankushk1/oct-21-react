import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const onSignOut = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };

  return (
    <div>
      <ul className="d-flex justify-content-between container mt-3">
        <div>
          <h3>Books Store</h3>
        </div>
        <div>
          {token && (
            <button className="btn btn-danger" onClick={() => onSignOut()}>
              Sign Out
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
