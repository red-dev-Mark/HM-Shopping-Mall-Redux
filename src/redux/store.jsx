import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import rootReducer from "./reducers";
// import rootReducer from './reducers.index' (index 파일이 기본)
// import productReducer from "./reducers/productReducer"; 이건 이제 필요 no

//DevTool
import { composeWithDevTools } from "@redux-devtools/extension";

//리듀서 파일이 여러 개면, 합치고 스토어에 올려줘야 함 -> combineReducers(reducers) 함수를 사용하면 됨 (이건 index.js!)
let store = createStore(
  rootReducer,
  //DevTool은 함수, 이 함수 안에 미들웨어를 넣어줌
  composeWithDevTools(applyMiddleware(thunk))
);

// let store = createStore(productReducer, applyMiddleware(thunk));
//기능별로 나누면 리듀서가 점점 많아짐

export default store;

//combineReducers해주고 rootReducer로 import해주면 왕창 오류!! (productAll의 productList가 undefined라 map 오류)
//const productList = useSelector((state) => state.productList); 이러면 잘 오는 것이 아닌가??

//리듀서를 합쳐줄 때, 객체 형태로 넣어줌, 각 키 값안에 넣어줌
//리듀서에 접근할 때 어떤 리듀서에 있는 상태인지 읽어올지를 알려줘야 함

//위에서 productList에서는 다짜고짜 state의 productList를 달라고 함
//const productList = useSelector((state) => state.product.productList);
//상태(combineReducers) 중, product 키 값 안에 있는 productList
