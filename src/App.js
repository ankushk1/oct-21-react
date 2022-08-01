import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import ClassComp from "./components/ClassComp";
import FuncStateComp from "./components/FuncStateComp";
import {createContext} from 'react'
const obj = { num: 3, b: "b" };

//api call /  some data

export const messageContext = createContext(null)

function App() {
  return (
    <div className="App">
      {/* {" "}
      This is a div
      <FuncStateComp name={"Prop name"} number={3} obj={obj}>
        {obj}
      </FuncStateComp> */}
      {/* <FuncStateComp name={"Prop name"} obj={obj} /> */}
      {/* <ClassComp />  */}
      <messageContext.Provider value={"Hey from the comp App.js"}>
       <Component1/>
      </messageContext.Provider>
      <FuncStateComp/>
    </div>
  );
}

export default App;
