import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />; //Navigate -> 리다이렉트해주는 역할
}
