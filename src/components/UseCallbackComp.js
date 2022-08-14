import React, { useCallback, useEffect, useState } from "react";

const UseCallbackComp = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(2);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleIncrement2 = useCallback((num) => {
    setCounter2(counter2 + num);
  }, [counter2]);

  // const handleIncrement2 = () => {
  //   setCounter2(counter2 + 1);
  // };

  useEffect(() => {
    console.log("useEffect called");
  }, [handleIncrement2]);

  return (
    <div>
      <div>Count 1 = {counter}</div>
      <div>Count 2 = {counter2}</div>
      <button onClick={()=>handleIncrement()}>Increment</button>
      <button onClick={()=>handleIncrement2(5)}>Increment2</button>
    </div>
  );
};

export default UseCallbackComp;
