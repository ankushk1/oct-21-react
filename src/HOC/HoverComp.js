import React, { useState } from "react";
import withCounter from "./withCounter";

const HoverComp = ({ count, handleIncrement }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 border border-dark w-25 ">
        <div onMouseOver={handleIncrement}>{count}</div>
      </div>
    </div>
  );
};

export default withCounter(HoverComp);
