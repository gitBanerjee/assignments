import React from "react";
import shallowCompare from "react-addons-shallow-compare";

class CustomPureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
}

export default class InheritedComponent extends CustomPureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      console.log("Interval Invoked");
      this.setState({
        counter: 0,
      });
    }, 10000);
  }

  render() {
    console.log("Render Invoked");
    return <b>Counter Value: {this.state.counter}</b>;
  }
}
