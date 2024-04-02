import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
// import productReducer from "./reduces/productReducer"
import rootReducer from './reducers'
// import rootReducer from './reducers.index' (index 파일이 기본)
import { composeWithDevTools } from '@redux-devtools/extension'


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//리듀서 파일이 여러 개면 합치고 스토어에 올려줘야 함
//기능별로 리듀서가 많아짐


export default store