import React, { useState, useMemo } from "react";

const slowFunc = (n) => {
  for (var i = 0; i < 1000000000; i++) {}
  console.log("slowFunc called");
  return n * 2;
};

const UseMemoComp = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const NumIntoTwo = useMemo(()=>{
    return slowFunc(number)
  }, [number]);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>count = {count}
      <button onClick={increment}>Increment</button>
      </div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      {number} * 2 result is = {NumIntoTwo}
    </div>
  );
};

export default UseMemoComp;
