import React from "react";
import * as actions from "../actions/index.js";
import { connect } from "react-redux";
import Container from "./Container.js";
import "../styles/index.scss";

const mapStateToProps = state => {
  return { ...state };
};
let timer = null;

const startTimer = ({ dispatch, sessionSeconds }) => {
  timer = setInterval(() => {
    if (sessionSeconds > 0) {
      dispatch(actions.tick());
      sessionSeconds--;
    } else {
      clearInterval(timer);
    }
  }, 100);
};

const mapDispatchToProps = dispatch => {
  return {
    startCountdown: ({ sessionSeconds, breakSeconds }) => {
      clearInterval(timer);
      startTimer({ dispatch, sessionSeconds });
      dispatch(actions.startCountdown());
    },
    tick: () => {
      dispatch(actions.tick());
    },
    stopCountdown: () => {
      clearInterval(timer);
      dispatch(actions.stopCountdown());
    },
    resetCountdown: () => {
      clearInterval(timer);
      dispatch(actions.resetCountdown());
    },
    incBreak: () => {
      dispatch(actions.incBreak());
    },
    decBreak: () => {
      dispatch(actions.decBreak());
    },
    incSession: () => {
      dispatch(actions.incSession());
    },
    decSession: () => {
      dispatch(actions.decSession());
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
