const userData = {
  inProgress: false,
  user: { username: "", email: "", password: "" },
  error: null
};

export default function Reducer(state = userData, action) {
  switch (action.type) {
    case "REQUEST":
      state.inProgress = true;
      return state;
    case "SUCCESS":
      state.inProgress = false;
      state.user.username = action.username;
      state.user.email = action.email;
      state.user.password = action.password;
      return state;
    case "FAILURE":
      state.inProgress = false;
      state.error = action.error;
      return state;
    default:
      return state;
  }
}
