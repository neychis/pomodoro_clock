import React from "react";
import Timer from "./Timer.js";
import Settings from "./Settings";
import "../styles/container.scss";

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Pomodoro clock</h1>
        <div className="settings">
          <Settings
            value={this.props.breakMinutes}
            value_id="break-length"
            heading_id="break-label"
            headingText="Break length"
            inc_id="break-increment"
            dec_id="break-decrement"
            inc={() => this.props.incBreak()}
            dec={() => this.props.decBreak()}
            stopCountdown={() => this.props.updateCountdown()}
          />
          <Settings
            value={this.props.sessionMinutes}
            value_id="session-length"
            heading_id="session-label"
            headingText="Session Length"
            inc_id="session-increment"
            dec_id="session-decrement"
            inc={() => this.props.incSession()}
            dec={() => this.props.decSession()}
            stopCountdown={() => this.props.updateCountdown()}
          />
        </div>
        <Timer {...this.props} />
      </div>
    );
  }
}
