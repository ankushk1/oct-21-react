import React, { useState } from "react";
import withCounter from "./withCounter";

const CounterComp = ({ count, handleIncrement }) => {
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default withCounter(CounterComp);
