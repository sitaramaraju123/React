const count = 0;

export default function Reducer(state = count, action) {
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1; //payload can use here
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
