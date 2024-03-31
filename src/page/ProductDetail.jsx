import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      let url = new URL(
        `https://my-json-server.typicode.com/redhero8830/shopping-mall-server/products/${id}`
      );
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setProduct(data);
    };
    getProductDetail();
  }, [id]); //props로 { id }를 넘기거나, useParams()의 id를 갖고와도 의존성 불안정..

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <Container className="product-detail-container">
      <Row>
        <Col>
          <img src={product?.img} alt="Product" className="product-image" />
        </Col>
        <Col className="product-info">
          <h2 className="product-title">{product?.title}</h2>
          <h3 className="product-price">
            {`${product?.price.toLocaleString("ko-KR")}원`}
          </h3>
          <h4 className="product-details">
            Size:{" "}
            {product?.size.map((size) => {
              if (size !== "L") return size + " / ";
              else return size;
            })}
          </h4>
          <Button variant="danger" className="product-button">
            장바구니 추가하기
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
