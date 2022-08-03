import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      username: "ABC",
      age: 0,
      apiData: {},
      obj:{}
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) =>
        {
          console.log(json);
          this.setState({
          apiData: json
        })}
      );

  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      obj: {
        name: {
          user: 'Abc'
        }
      }
    })
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onAgeIncrement() {
    this.setState({
      age: this.state.age + 1
    });
  }

  onAgeDecrement() {
    this.setState({
      username: "Updated user"
    });
  }

  render() {
    return (
      <div>
        {console.log("render", this.state.age)}
        {this.state.age}
        {/* {this.state.apiData.title}
        {this.state?.obj?.name?.user} */}
        <div>
          <button onClick={() => this.onAgeIncrement()}>Increment</button>
          <button onClick={() => this.onAgeDecrement()}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
