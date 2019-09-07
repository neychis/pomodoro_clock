export const Status = {
  PAUSED: "paused",
  ACTIVE: "active"
};
Object.freeze(Status);

export const defaultState = {
  status: Status.PAUSED,
  secondsLeft: 60,
  breakSeconds: 15,
  sessionSeconds: 45
};
