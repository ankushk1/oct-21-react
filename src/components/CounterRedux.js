import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, reset } from "../actions/counterActions";

const CounterRedux = (props) => {

  const count = useSelector(state => state.counterData.count)
  // console.log(props);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // props.incrementCount();
    dispatch(increaseCount())
  };

  const handleDecrement = () => {
    // props.decrementCount();
    dispatch(decreaseCount())

  };

  const handleReset = () => {
    // props.resetCount();
    dispatch(reset())
  };

  return (
    <div>
      <h1>Counter using redux</h1>

      <h4>{count}</h4>

      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counterState: state.counterData
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCount: () => dispatch(increaseCount()),
//     decrementCount: () => dispatch(decreaseCount()),
//     resetCount: () => dispatch(reset())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
export default CounterRedux;

