import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    })
    );
  }

  render() {
    const { isOn } = this.state;
    let bgc;
    let boxPosition;

    if (isOn) {
      bgc = 'bgc-green';
      boxPosition = 'right';
    } else {
      bgc = 'bgc-grey';
      boxPosition = 'left';
    }

    return (
    <div className='row'>
      <div className={`col-half button ${bgc}`} onClick={this.handleClick}>
        <button className={boxPosition}></button>
      </div>
        <div className='col-half display'>{isOn ? 'ON' : 'Off'}</div>
    </div>
    );
  }
}

ReactDOM.render(<ToggleSwitch />, document.querySelector('#root'));
