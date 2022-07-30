import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "ABC",
      age: 0
    };
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
        {this.props.message} from {this.props.name} {this.props.obj.num}
        <div>
          <button onClick={() => this.onAgeIncrement()}>Increment</button>
          <button onClick={() => this.onAgeDecrement()}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
