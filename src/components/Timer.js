import React from "react";
import PropTypes from "prop-types";
import { Status } from "../reducers/constants";
import "../styles/timer.scss";

export default class Timer extends React.Component {
  toggle = () => {
    if (this.props.status === Status.PAUSED) {
      this.props.startCountdown({
        sessionSeconds: this.props.secondsLeft,
        breakSeconds: this.props.breakSeconds
      });
    } else {
      this.props.stopCountdown();
    }
  };
  reset = () => {
    this.props.resetCountdown();
  };
  getTimeLeft = () => {
    const minutes = Math.floor(this.props.secondsLeft / 60);
    const seconds = this.props.secondsLeft % 60;
    return (
      <time>
        {minutes}:{seconds}
      </time>
    );
  };
  render() {
    return (
      <div className="timer">
        <div className="display">
          <h2>Session</h2>
          <div id="time-left">{this.getTimeLeft()}</div>
        </div>
        <button id="start_stop" type="button" onClick={this.toggle}>
          <i className="fa fa-play fa-2x" />
          <i className="fa fa-pause fa-2x" />
        </button>
        <button id="reset" type="button" onClick={this.reset}>
          <i className="fa fa-sync-alt fa-2x" />
        </button>
      </div>
    );
  }
}

Timer.propTypes = {
  secondsLeft: PropTypes.number.isRequired,
  startCountdown: PropTypes.func.isRequired,
  stopCountdown: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};
