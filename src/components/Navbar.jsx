import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar({ authenticate }) {
  const menuList = ["H&M Home", "남성", "여성", "아동", "Sale"];

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  // const goToDetail = () => {
  //   authenticate === true ? navigate("/product/1") : navigate("/login");
  // };
  
  return (
    <div className="nav-container">
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} className="login-icon" />
        <div>로그인</div>
      </div>
      <div className="logo">
        <img
          onClick={goToMain}
          width={120}
          style={{ cursor: "pointer" }}
          src="https://www2.hm.com/hm-logo.png"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
