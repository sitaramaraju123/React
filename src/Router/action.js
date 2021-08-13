export const InAction = value => async dispatch => {
  dispatch({
    type: "SUBMIT",
    payload: value
  });
};
