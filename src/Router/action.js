export const InAction = (value1, value2) => async dispatch => {
  dispatch({
    type: "SUBMIT",
    payload: value1,
    payloadEmail: value2
  });
};
