const name = [];

export default function Reducer(state = name, action) {
  const { type, payload } = action;
  switch (type) {
    case "SUBMIT":
      state.push(payload);
      return state;
    default:
      return state;
  }
}
