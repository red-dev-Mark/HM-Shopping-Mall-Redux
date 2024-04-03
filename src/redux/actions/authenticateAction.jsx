// 제품과 관련없는 로그인 관련 함수
// 리덕스에서는 함수가 많을 때, 기능별로 리듀서, 액션 파일들을 나눈다!!

function login(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    // console.log("LOGIN_SUCCESS"); // -> 잘 출력됨
  };
}

export const authenticateAction = { login };
