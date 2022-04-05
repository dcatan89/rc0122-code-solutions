
import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    let isValidated;
    let fontColor;
    let errorCheck;

    if (value.length === 0) {
      errorCheck = 'A password is required';
      isValidated = 'fas fa-times';
      fontColor = 'red-font';
    } else if (value.length < 8) {
      errorCheck = 'Your password is too short';
      isValidated = 'fas fa-times';
      fontColor = 'red-font';
    } else {
      isValidated = 'fas fa-check';
      fontColor = 'green-font';
      errorCheck = '';
    }

    return (
      <form>
        <div className="container">
          <div className="row align-center">
            <label>
              Password
              <div className="col-half">
                <input type="text" value={value}
                  onChange={this.handleChange} />
              </div>
            </label>
            <h2 className={`margin-zero row col-half ${fontColor} ${isValidated}`}></h2>
          </div>
          <p className="red-font margin-zero">{errorCheck}</p>
        </div>
      </form>
    );
  }
}

export default ValidatedInput;
