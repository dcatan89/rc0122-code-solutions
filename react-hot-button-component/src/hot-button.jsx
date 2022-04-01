import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      { counter: this.state.counter + 1 }
    );
  }

  render() {
    const { counter } = this.state;
    const bgcColors = ['purple', 'lpurple', 'red', 'orange', 'brown', 'yel', 'white'];

    const index = Math.floor(counter / 3);

    const btn = bgcColors[index];
    return (
      <button className={`button ${btn}`} onClick={this.handleClick} > {`Hot Button Counter: ${counter}`}</button>
    );
  }
}

export default HotButton;
