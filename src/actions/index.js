import countdownActions from "./countdown.js";
import breakActions from "./break.js";
import sessionActions from "./session.js";

export const startCountdown = () => {
  return {
    type: countdownActions.START
  };
};
export const stopCountdown = () => {
  return {
    type: countdownActions.STOP
  };
};
export const resetCountdown = () => {
  return {
    type: countdownActions.RESET
  };
};
export const tick = () => {
  return {
    type: countdownActions.TICK
  };
};
export const updateCountdown = () => {
  return {
    type: countdownActions.UPDATE
  };
};

export const incSession = () => {
  return {
    type: sessionActions.INCREMENT
  };
};
export const decSession = () => {
  return {
    type: sessionActions.DECREMENT
  };
};
export const startSession = () => {
  return {
    type: sessionActions.START
  };
};

export const incBreak = () => {
  return {
    type: breakActions.INCREMENT
  };
};
export const decBreak = () => {
  return {
    type: breakActions.DECREMENT
  };
};
export const startBreak = () => {
  return {
    type: breakActions.START
  };
};
