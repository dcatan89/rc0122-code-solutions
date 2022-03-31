import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root');

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleUnClick = this.handleUnClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  handleUnClick() {
    this.setState({ isClicked: false });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return (
        <button onClick={this.handleUnClick}> Thanks!</button>
      );
    }
    return (
     <button onClick={this.handleClick}>Click Me!</button>
    );
  }
}

const button = <CustomButton />;

ReactDOM.render(button, root);
