import { defaultState, Status } from "./constants";
import countdownActions from "../actions/countdown";
import breakActions from "../actions/break";
import sessionActions from "../actions/session";

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case countdownActions.START_COUNTDOWN:
      return {
        ...state,
        status: Status.ACTIVE
      };
    case countdownActions.TICK:
      return {
        ...state,
        secondsLeft: state.secondsLeft - 1
      };
    case countdownActions.STOP_COUNTDOWN:
      return {
        ...state,
        status: Status.PAUSED
      };
    case countdownActions.RESET_COUNTDOWN:
      return { ...defaultState };
    case breakActions.INCREMENT_BREAK:
      return {
        ...state,
        breakSeconds: state.breakSeconds + 1
      };
    case breakActions.DECREMENT_BREAK:
      return {
        ...state,
        breakSeconds: state.breakSeconds - 1
      };
    case sessionActions.INCREMENT_SESSION:
      return {
        ...state,
        sessionSeconds: state.sessionSeconds + 1
      };
    case sessionActions.DECREMENT_SESSION:
      return {
        ...state,
        sessionSeconds: state.sessionSeconds - 1
      };
    default:
      return state;
  }
};
export default rootReducer;
