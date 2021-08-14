const name = { username: "", email: "" };

export default function Reducer(state = name, action) {
  const { type, payload, payloadEmail } = action;
  switch (type) {
    case "SUBMIT":
      state.username = payload;
      state.email = payloadEmail;
      return state;
    default:
      return state;
  }
}
