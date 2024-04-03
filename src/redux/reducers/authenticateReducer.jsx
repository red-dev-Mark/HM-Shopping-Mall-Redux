//action과 같이, product과 역할이 다름

let initialStore = {
  id: "",
  password: "",
  authenticate: false,
};

function authenticate(state = initialStore, action) {
  let { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS"); //콘솔창에 안 나옴 -> 리듀서까지 도달하지 못함
      //그 이유는 스토어의 createStore에서 productReducer만 적용 -> 스토어로 가서 합쳐보자

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
