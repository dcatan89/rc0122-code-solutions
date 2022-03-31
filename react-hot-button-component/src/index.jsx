import React from 'react';
import ReactDOM from 'react-dom';

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
    let index = 0;

    if (counter < 3) {
      index = 0;
    } else if (counter < 6) {
      index = 1;
    } else if (counter < 9) {
      index = 2;
    } else if (counter < 12) {
      index = 3;
    } else if (counter < 15) {
      index = 4;
    } else if (counter < 18) {
      index = 5;
    } else if (counter >= 18) {
      index = 6;
    }

    const btn = bgcColors[index];
    return (
      <button className={`button ${btn}`} onClick={this.handleClick} > {`Hot Button Counter: ${counter}`}</button>
    );
  }
}

ReactDOM.render(<HotButton />, document.querySelector('#root'));
