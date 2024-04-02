import { combineReducers } from "redux";
import authenticate from "./authenticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticate,
  product: productReducer,
});
