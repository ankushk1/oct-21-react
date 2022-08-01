import React, { useState } from "react";

const FuncStateComp = (props) => {
  console.log('props  = ' ,props);
  const {name, message, children} = props

  // console.log(props)
  const [data, setData] = useState({
    username: "ABC",
    age: 0
  });

  // console.log(data);

  //Always first clone the obj/state and then update it
  const onAgeIncrement = (num) => {
    setData({ ...data, age: data.age + 1 });
  };

  const onAgeDecrement = (num) => {
    setData({ ...data, age: data.age - 1 });
  };

  return (
    <div>
      {props.name}
      {data.age}
      {console.log('render')}
      <div>
        <button onClick={() => onAgeIncrement(3)}>Increment</button>
        <button onClick={() => onAgeDecrement(3)}>Decrement</button>
      </div>
    </div>
  );
};

export default FuncStateComp;
