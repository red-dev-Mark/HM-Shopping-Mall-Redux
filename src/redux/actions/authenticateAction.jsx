function login(id, password) {
  return (dispatch, getState) => {
      console.log("suc");
      dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

export const authenticate = { login };
