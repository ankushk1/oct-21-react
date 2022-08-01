import React, { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {

  const [obj , setObj ] = useState({})
  console.log(obj)

  const handleInc = () => {
    setObj({})
  }
   return (
    <div>
      <Component2 setObj = {setObj} />
    </div>
  );
};

export default Component1;
