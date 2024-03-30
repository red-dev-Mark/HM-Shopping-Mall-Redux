import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      // url을 바꿔준다.
      // JS에서는 input.value를 사용, 리액트는 조금 다름 -> event.target.value
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
    event.target.value = "";
  };
  return (
    <div>
      <div className="search-area">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          onKeyPress={(event) => {
            search(event);
            // search()는 콜백 함수!, 매개변수 두 개 모두 event 잊지 말자!
          }}
          // deprecated -> onKeyDown 추천, 일단은 ts에서 제한 삭제함
          className="input"
          placeholder="제품 검색"
        />
        {/* onKeyPress : 키 입력이 되면 함수 실행 */}
      </div>
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
