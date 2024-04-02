//여기에 미들웨어 함수들을 쭉 만들 것이다.

//함수를 리턴
function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = new URL(
      `https://my-json-server.typicode.com/redhero8830/shopping-mall-server/products?q=${searchQuery}`
    );
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
//default가 아닌, const!
