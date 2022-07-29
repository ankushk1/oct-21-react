import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1'
import Component2 from './components/Component2'

const user = {
  name: "Aman",
  age : 24
} 


function App() {
  return (
    <div className="App">
       <h1>My name is {user.name} and my age is {user.age}</h1>
       <Component1/>
       <Component2/>
    </div>
   
  );
}

export default App;
