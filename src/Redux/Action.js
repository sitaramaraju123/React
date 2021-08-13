export const InAction = () => async dispatch => {
  dispatch({
    type: "INCREMENT"
    // payload: value          //here we can get the payload data from the user through function parameter
  });
};
export const DecAction = () => async dispatch => {
  dispatch({
    type: "DECREMENT"
  });
};
