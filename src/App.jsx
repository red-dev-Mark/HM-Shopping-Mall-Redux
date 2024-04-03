import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect, useState } from "react";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./private/PrivateRoute";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  // const [authenticate, setAuthenticate] = useState(false); //true면 로그인이 됨, false면 로그인이 안 됨

  //원래면 최상위 부모 컴포넌트에서 authenticate를 props로 다 뿌려줘서,
  //authenticate의 상태가 바뀔 때마다, 상태 업데이트 함수로 업데이트해주고 다시 뿌려주는 방식
  //그래서 useEffect가 필요했지만, 이제는 각 페이지에서 직접 redux를 활용해 상태를 받아 필요 no
  // useEffect(() => {
  //   setAuthenticate(authenticated);
  // }, [authenticated]);

  return (
    <div>
      <Navbar />
      {/* 페이지 3장 안에 모두 네비게이션 바를 만들어도 되나, 코드 중복! */}
      {/* 따라서 위의 <Navbar /> 밑에 페이지 3장 배치 */}
      <Routes>
        <Route path="" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        {/* Restful Route의 규칙으로 path 이름을 지음 */}
        {/* http://localhost:3001/product/1 이런 식으로 테스트해보자 */}

        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}
