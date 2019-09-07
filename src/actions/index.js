import countdownActions from "./countdown.js";
import breakActions from "./break.js";
import sessionActions from "./session.js";

export const startCountdown = () => {
  return {
    type: countdownActions.START_COUNTDOWN
  };
};
export const stopCountdown = () => {
  return {
    type: countdownActions.STOP_COUNTDOWN
  };
};
export const resetCountdown = () => {
  return {
    type: countdownActions.RESET_COUNTDOWN
  };
};
export const tick = () => {
  return {
    type: countdownActions.TICK
  };
};

export const incSession = () => {
  return {
    type: sessionActions.INCREMENT_SESSION
  };
};
export const decSession = () => {
  return {
    type: sessionActions.DECREMENT_SESSION
  };
};

export const incBreak = () => {
  return {
    type: breakActions.INCREMENT_BREAK
  };
};
export const decBreak = () => {
  return {
    type: breakActions.DECREMENT_BREAK
  };
};
