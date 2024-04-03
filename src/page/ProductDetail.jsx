import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  let { id } = useParams();
  // const [product, setProduct] = useState(null);

  //useEffect를 사용하지 않으면, id가 바뀌어도(다른 상품을 눌러도) 같은 디테일 페이지만 보여줌
  useEffect(() => {
    const getProductDetail = async () => {
      dispatch(productAction.getProductDetail(id));
    };
    getProductDetail();
    // eslint-disable-next-line
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
