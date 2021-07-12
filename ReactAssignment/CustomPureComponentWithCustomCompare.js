import React from "react";
// import shallowCompare from "react-addons-shallow-compare";

class CustomPureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const keyState = Object.keys(this.state);
    const keyProps = Object.keys(this.props);

    for (let key of keyState) {
      if (this.state[key] === nextState[key]) {
        return false;
      }
    }
    for (let key of keyProps) {
      if (this.props[key] === nextProps[key]) {
        return false;
      }
    }
    return true;
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
    }, 1000);
  }

  render() {
    console.log("Render Invoked");
    return <b>Counter Value: {this.state.counter}</b>;
  }
}
