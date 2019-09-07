import React from "react";
import Timer from "./Timer.js";
import Settings from "./Settings";
import "../styles/container.scss";

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="settings">
          <Settings
            value={this.props.breakSeconds}
            headingText="Break length"
            inc_id="break-increment"
            dec_id="break-decrement"
            inc={() => this.props.incBreak()}
            dec={() => this.props.decBreak()}
          />
          <Settings
            value={this.props.sessionSeconds}
            headingText="Session Length"
            inc_id="session-increment"
            dec_id="session-decrement"
            inc={() => this.props.incSession()}
            dec={() => this.props.decSession()}
          />
        </div>
        <Timer {...this.props} />
      </div>
    );
  }
}
