import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import ClassComp from "./components/ClassComp";
import FuncStateComp from "./components/FuncStateComp";

const obj = { num: 3, b: "b" };

function App() {
  return (
    <div className="App">
      <ClassComp name={"Prop name"} message={"Hey"} obj={obj} />
      {/* <ClassComp />  */}
    </div>
  );
}

export default App;
