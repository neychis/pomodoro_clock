import React from "react";
import PropTypes from "prop-types";
import { Status, Period } from "../reducers/constants";
import "../styles/timer.scss";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null
    };
  }
  startCountdown = () => {
    clearInterval(this.state.timer);
    const timer = setInterval(() => {
      if (this.props.secondsLeft > 0) {
        this.props.tick();
      } else if (this.props.currentPeriod === Period.BREAK) {
        this.clearTimer();
        this.audioBeep.play();
      } else {
        this.props.startBreak();
      }
    }, 100);
    this.setState({
      ...this.state,
      timer
    });
    this.props.startCountdown();
  };
  toggle = () => {
    this.clearTimer();
    if (this.props.status === Status.PAUSED) {
      this.startCountdown();
    } else {
      this.props.stopCountdown();
    }
  };
  reset = () => {
    this.clearTimer();
    this.props.resetCountdown();
  };
  getTimeLeft = () => {
    let minutes = Math.floor(this.props.secondsLeft / 60);
    let seconds = this.props.secondsLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return (
      <div id="time-left">
        {minutes}:{seconds}
      </div>
    );
  };
  clearTimer = () => {
    clearInterval(this.state.timer);
    this.setState({
      ...this.state,
      timer: null
    });
  };
  render() {
    return (
      <div className="timer">
        <div className="display">
          <h2 id="timer-label">{this.props.currentPeriod}</h2>
          <div>{this.getTimeLeft()}</div>
        </div>
        <button id="start_stop" type="button" onClick={this.toggle}>
          <i className="fa fa-play fa-2x" />
          <i className="fa fa-pause fa-2x" />
        </button>
        <button id="reset" type="button" onClick={this.reset}>
          <i className="fa fa-sync-alt fa-2x" />
        </button>
        <audio
          id="beep"
          preload="auto"
          src="https://goo.gl/65cBl1"
          ref={audio => {
            this.audioBeep = audio;
          }}
        />
      </div>
    );
  }
}

Timer.propTypes = {
  secondsLeft: PropTypes.number.isRequired,
  startCountdown: PropTypes.func.isRequired,
  stopCountdown: PropTypes.func.isRequired,
  resetCountdown: PropTypes.func.isRequired,
  currentPeriod: PropTypes.string.isRequired
};
