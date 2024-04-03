import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./private/PrivateRoute";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인이 됨, false면 로그인이 안 됨
  const authenticated = useSelector((state) => state.auth.authenticate);

  useEffect(() => {
    setAuthenticate(authenticated);
  }, [authenticated]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      {/* 페이지 3장 안에 모두 네비게이션 바를 만들어도 되나, 코드 중복! */}
      {/* 따라서 위의 <Navbar /> 밑에 페이지 3장 배치 */}
      <Routes>
        <Route path="" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        {/* Restful Route의 규칙으로 path 이름을 지음 */}
        {/* http://localhost:3001/product/1 이런 식으로 테스트해보자 */}

        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}
