import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      play: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    this.setState({ play: true });
    this.timerID = setInterval(
      () => this.handlePlay(),
      2000
    );
  }

  stop() {
    this.setState({ play: false });
    clearInterval(this.timerID);
  }

  reset() {
    this.setState({ counter: 0 });
  }

  handlePlay() {
    this.setState({ counter: this.state.counter + 2 });
  }

  render() {
    const { counter, play } = this.state;
    let togglePlay;

    if (play) {
      togglePlay = 'fas fa-pause';
    } else {
      togglePlay = 'fas fa-play';
    }

    return (
      <div className="container">
        <div className="row justify-center">
          <div className="col-full row justify-center">
            <div className="stopwatch" onClick={play ? this.stop : this.reset}>{counter}</div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="col-full row justify-center">
            <p className={togglePlay} onClick={play ? this.stop : this.play }></p>
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatch;
