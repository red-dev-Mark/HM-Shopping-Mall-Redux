//action 파일 여기에 미들웨어 함수들을 쭉 만들 것이다.

//미들웨어 함수는 함수를 리턴

//상품 전체를 갖고오는 함수
function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = new URL(
      `https://my-json-server.typicode.com/redhero8830/shopping-mall-server/products?q=${searchQuery}`
    );
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    //이제 여기서 리듀서로 액션 전달!
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = new URL(
      `https://my-json-server.typicode.com/redhero8830/shopping-mall-server/products/${id}`
    );
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
//default가 아닌, const!
//미들웨어 함수가 여러 개 -> 객체에 함수들을 담아서 전달

//이렇게 미들웨어 함수로 만들면, 이 함수를 다른 곳에서도 사용 가능 (재사용성 굿)
