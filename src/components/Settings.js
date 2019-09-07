import React from "react";
import "../styles/settings.scss";

export default class Settings extends React.Component {
  inc = () => {
    this.props.inc();
  };
  dec = () => {
    this.props.dec();
  };
  render() {
    return (
      <section>
        <header>
          <h2>{this.props.headingText}</h2>
        </header>
        <main className="buttons">
          <button id={this.props.dec_id} type="button" onClick={this.dec}>
            <i className="fa fa-arrow-down fa-2x" />
          </button>
          <div>{this.props.value}</div>
          <button id={this.props.inc_id} type="button" onClick={this.inc}>
            <i className="fa fa-arrow-up fa-2x" />
          </button>
        </main>
      </section>
    );
  }
}
