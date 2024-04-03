//상품을 가져오는 리듀서
let initialStore = {
  productList: [],
};

function productReducer(state = initialStore, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    default:
      return state;
  }
}

export default productReducer;
