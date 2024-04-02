let initialStore = {
  id: "",
  password: "",
  authenticate: false,
};

function authenticate(state = initialStore, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
}

export default authenticate;
