import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="d-flex justify-content-evenly">
        
        <li style={{ listStyle: "none" }}>
          <NavLink
            activeClassName="border border-dark bg bg-warning"
            style={{ textDecoration: "none", color: "black" }}
            to="/use-memo"
          >
            Use Memo
          </NavLink>
        </li>
        <li style={{ listStyle: "none" }}>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/form"
            activeClassName="border border-dark bg bg-warning"
          >
            Form Comp
          </NavLink>
        </li>
        <li style={{ listStyle: "none" }}>
          <NavLink
            // style={{ textDecoration: "none", color: "black" }}
            to="/api"
            // activeClassName="border border-dark bg bg-warning"
            // activeStyle={{
            //   fontWeight: "bold",
            //   backgroundColor: "yellow"
            // }}
            style={isActive => ({
              color: isActive ? "green" : "blue",
              textDecoration: "none",
            })}
          >
            Api Comp
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
