import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

import { productAction } from "../redux/actions/productAction";
import ProductCard from "../components/ProductCard";

import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ProductAll() {
  //이제 상태함수 필요 No, 리듀서로 작업한 스토어 속 상태를 가져옴
  const productList = useSelector((state) => state.product.productList);

  const [query] = useSearchParams();

  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";

    //여기서 바로 액션을 담으면 미들웨어를 거치지 않고 스토어로 감
    //-> productAction의 getProduct 미들웨어 함수를 거쳐서 가야함
    dispatch(productAction.getProducts(searchQuery)); //여기서 ()를 붙이는 이유 -> 없으면 함수 작동 X
    //인자 없다면 빈 배열이 콘솔에 출력
  };

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [dispatch, query]);
  // 빈 []이면 처음 한번만 렌더링 -> 다시 내부 코드(함수호출)하지 않음
  // query를 넣어줌 -> query가 바뀌면 다시 호출해줘

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
    <div className="search-container">
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
      <Container>
        <Row>
          {/* MAX : 12 */}
          {productList.map((menu, index) => {
            return (
              <Col key={index} lg={4} md={6} sm={12} xs={12}>
                {/* 화면에 따른 반응형 */}
                <ProductCard item={menu} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
