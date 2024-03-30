import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function ProductAll() {
  const [productList, setProductList] = useState([]);
  // const [query, setQuery] = useSearchParams(); 배포를 위한 상태함수 삭제
  const [query] = useSearchParams();

  
  useEffect(() => {
    const getProducts = async () => {
      let searchQuery = query.get("q") || ""; //|| "";가 없으면 화면에 안 나옴
      console.log(searchQuery);
      let url = new URL(`https://my-json-server.typicode.com/redhero8830/shopping-mall-server/products?q=${searchQuery}`);
      //q랑 query를 보내주면 json server에서 알아서 서치를 해줌
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      setProductList(data);
    };
    
    getProducts();
  }, [query]);
  // 빈 []이면 처음 한번만 렌더링 -> 다시 내부 코드(함수호출)하지 않음
  // query를 넣어줌 -> query가 바뀌면 다시 호출해줘

  return (
    <div>
      <Container>
        <Row>
          {/* MAX : 12 */}
          {productList.map((menu, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={12} xs={12}>
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
