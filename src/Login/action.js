export const Request = () => async dispatch => {
  dispatch({
    type: "REQUEST"
  });
};
export const Success = (username, email, password) => async dispatch => {
  dispatch({
    type: "SUCCESS",
    username: username,
    email: email,
    password: password
  });
};
export const Failure = error => async dispatch => {
  dispatch({
    type: "FAILURE",
    error: error
  });
};
