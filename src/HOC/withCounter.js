import React, { useState } from "react";

const withCounter = (PrevComp) => ({number}) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + number);
  };

  return (
    <div>
      <PrevComp count={count} handleIncrement={handleIncrement} number={number} />
    </div>
  );
};

export default withCounter;
