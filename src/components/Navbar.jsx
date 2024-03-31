import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar({ authenticate, setAuthenticate }) {
  const menuList = ["H&M Home", "남성", "여성", "아동", "Sale"];

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const getLogout = () => {
    setAuthenticate(false);
    alert("Logout되었습니다:)");
  };
  // const goToDetail = () => {
  //   authenticate === true ? navigate("/product/1") : navigate("/login");
  // };

  return (
    <div className="nav-container">
      <div
        className="login-button"
        onClick={authenticate === false ? goToLogin : getLogout}
      >
        <FontAwesomeIcon icon={faUser} className="login-icon" />
        <div>{authenticate === true ? "Logout" : "Login"}</div>
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
