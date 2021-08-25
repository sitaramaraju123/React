const fav = false;

export default function Reducer(state = fav, action) {
  switch (action.type) {
    case "SUBMIT":
      state = !state;
      return state;
    default:
      return state;
  }
}
