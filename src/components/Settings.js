import React from "react";
import PropTypes from "prop-types";
import "../styles/settings.scss";

export default class Settings extends React.Component {
  inc = () => {
    this.props.stopCountdown();
    this.props.inc();
  };
  dec = () => {
    this.props.stopCountdown();
    this.props.dec();
  };
  render() {
    return (
      <section>
        <header id={this.props.heading_id}>
          <h2>{this.props.headingText}</h2>
        </header>
        <main className="buttons">
          <button id={this.props.dec_id} type="button" onClick={this.dec}>
            <i className="fa fa-arrow-down fa-2x" />
          </button>
          <div id={this.props.value_id}>{this.props.value}</div>
          <button id={this.props.inc_id} type="button" onClick={this.inc}>
            <i className="fa fa-arrow-up fa-2x" />
          </button>
        </main>
      </section>
    );
  }
}

Settings.propTypes = {
  inc: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired,
  stopCountdown: PropTypes.func.isRequired,
  heading_id: PropTypes.string.isRequired,
  headingText: PropTypes.string,
  value: PropTypes.number.isRequired,
  value_id: PropTypes.string.isRequired
};
