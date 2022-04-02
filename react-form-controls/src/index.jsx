import React from 'react';
import ReactDOM from 'react-dom';
class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const form = document.querySelector('form');
    console.log({ email: this.state.value });
    event.preventDefault();
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
ReactDOM.render(<NewsletterForm />, document.querySelector('#root'));
