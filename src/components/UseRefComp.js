import React, { useRef, useState } from "react";

const UseRefComp = () => {
  const [text, setText] = useState();
  const [count, setCount] = useState(0);
  const inputRef = useRef(0)
  const countRef = useRef(1)

  const onIncement = () => {
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  };

  const focus = () => {
    console.dir(inputRef.current)
    inputRef.current.style.width = "500px"
  }

  return (
    <div>
      {console.log("render")}
      <input
        ref = {inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>{count}</div>
      <button onClick={onIncement}>Inc</button>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default UseRefComp;
