import React, { useState, useEffect } from "react";

const FuncStateComp = (props) => {
  // console.log('props  = ' ,props);
  const { name, message, children } = props;

  // console.log(props)
  const [data, setData] = useState({
    username: "ABC",
    age: 0,
    obj: {}
  });

  const [state2, setState2] = useState("");

  useEffect(() => {
    setData({
      ...data,
      obj: {
        name: {
          user: "Abc"
        }
      }
    });
    console.log("useEffect called");
  }, []);

  useEffect(() => {
    //something you want to do
    console.log("useEffect2 called");
  }, [state2]);
  // console.log(data);

  //Always first clone the obj/state and then update it
  const onAgeIncrement = (num) => {};

  const onAgeDecrement = (num) => {
    // setData({ ...data, age: data.age - 1 });
    setState2("ABC");
  };

  return (
    <div>
      {console.log(data.obj.name)}
      {data.obj.name && (
        <div>
          {data?.obj?.name?.user}
          {console.log("render")}
          <div>
            <button onClick={() => onAgeIncrement(3)}>Increment</button>
            <button onClick={() => onAgeDecrement(3)}>Decrement</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuncStateComp;
