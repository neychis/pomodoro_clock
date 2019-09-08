import { defaultState, Status, Period } from "./constants";
import countdownActions from "../actions/countdown";
import breakActions from "../actions/break";
import sessionActions from "../actions/session";

const secondsInMinute = 60;

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case countdownActions.START:
      return {
        ...state,
        status: Status.ACTIVE
      };
    case countdownActions.TICK:
      return {
        ...state,
        secondsLeft: state.secondsLeft - 1
      };
    case countdownActions.STOP:
      return {
        ...state,
        status: Status.STOPED
      };
    case countdownActions.UPDATE:
      return {
        ...state,
        secondsLeft: state.sessionMinutes * secondsInMinute
      };
    case countdownActions.RESET:
      return { ...defaultState };
    case breakActions.INCREMENT:
      if (state.breakMinutes === 60) {
        return state;
      }
      return {
        ...state,
        breakMinutes: state.breakMinutes + 1
      };
    case breakActions.DECREMENT:
      if (state.breakMinutes > 1) {
        return {
          ...state,
          breakMinutes: state.breakMinutes - 1
        };
      } else {
        return state;
      }
    case breakActions.START:
      return {
        ...state,
        secondsLeft: state.breakMinutes * secondsInMinute,
        currentPeriod: Period.BREAK
      };
    case sessionActions.INCREMENT:
      if (state.sessionMinutes === 60) {
        return state;
      }
      return {
        ...state,
        sessionMinutes: state.sessionMinutes + 1
      };
    case sessionActions.DECREMENT:
      if (state.sessionMinutes > 1) {
        return {
          ...state,
          sessionMinutes: state.sessionMinutes - 1
        };
      } else {
        return state;
      }
    case sessionActions.START:
      return {
        ...state,
        secondsLeft: state.sessionMinutes * secondsInMinute,
        currentPeriod: Period.SESSION
      };
    default:
      return state;
  }
};
export default rootReducer;
