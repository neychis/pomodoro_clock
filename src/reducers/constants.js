export const Status = {
  PAUSED: "paused",
  ACTIVE: "active"
};
Object.freeze(Status);

export const Period = {
  SESSION: "Session",
  BREAK: "Break"
};
Object.freeze(Period);

export const defaultState = {
  status: Status.PAUSED,
  secondsLeft: 60,
  breakSeconds: 15,
  sessionSeconds: 45,
  currentPeriod: Period.SESSION
};
