export const Status = {
  PAUSED: "paused",
  ACTIVE: "active",
  STOPED: "stoped"
};
Object.freeze(Status);

export const Period = {
  SESSION: "Session",
  BREAK: "Break"
};
Object.freeze(Period);

export const defaultState = {
  status: Status.PAUSED,
  secondsLeft: 25 * 60,
  breakMinutes: 5,
  sessionMinutes: 25,
  currentPeriod: Period.SESSION
};
