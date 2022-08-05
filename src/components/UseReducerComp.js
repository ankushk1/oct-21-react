import React from "react";
import { useReducer } from "react";

//inital state
// actions === handlers/methods
// reducer, that changes the state on what action does

const UseReducerComp = () => {
  const initialState = {
    count: 0,
    count2: 5
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.value, count2 : state.count2 +  action.value2 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
      <h3>{state.count2}</h3>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 4, value2: 3})}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducerComp;
