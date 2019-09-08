import React from "react";
import * as actions from "../actions/index.js";
import { connect } from "react-redux";
import Container from "./Container.js";
import "../styles/index.scss";

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    startCountdown: () => {
      dispatch(actions.startCountdown());
    },
    tick: () => {
      dispatch(actions.tick());
    },
    stopCountdown: () => {
      dispatch(actions.stopCountdown());
    },
    updateCountdown: () => {
      dispatch(actions.updateCountdown());
    },
    resetCountdown: () => {
      dispatch(actions.resetCountdown());
    },
    incBreak: () => {
      dispatch(actions.incBreak());
    },
    decBreak: () => {
      dispatch(actions.decBreak());
    },
    startBreak: () => {
      dispatch(actions.startBreak());
    },
    incSession: () => {
      dispatch(actions.incSession());
    },
    decSession: () => {
      dispatch(actions.decSession());
    },
    startSession: () => {
      dispatch(actions.startSession());
    }
  };
};

const Wrapper = props => {
  return (
    <div className="wrapper">
      <Container {...props} />
    </div>
  );
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

export default Main;
