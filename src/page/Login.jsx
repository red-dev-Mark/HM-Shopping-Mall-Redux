import { Button, Col, Container, Form } from "react-bootstrap";

import { authenticateAction } from "../redux/actions/authenticateAction";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // 사실 로그인 함수가 async는 아니라, 미들웨어로 굳이 안 보내도 됨
  //로그인을 시도하면 id, password, authenticate 정보 변경!
  const loginUser = (event) => {
    event.preventDefault();

    // 이제 상태 업데이트 함수 필요 없음
    // setAuthenticate(true);

    //dispatch는 함수를 호출해야 함 (미들웨어 함수!)
    //로그인 미들웨어 함수 만들자!
    //그냥 호출이 아닌, id/password 값을 들고 간다.
    dispatch(authenticateAction.login(id, password));

    navigate("/");
  };
  return (
    <Container
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Col lg={6} md={6} sm={12} xs={12} className="login-container">
        <Form
          onSubmit={(event) => {
            //여기서 event는 폼이 제출됐을 때의 이벤트
            loginUser(event);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              autoComplete="current-password"
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            {/* form의 특성상 제출 시 새로고침 */}
            {/* 타입이 submit이면, onClick이 아닌, onSubmit! 이것이 폼에서 사용되는 이벤트 */}
            {/* <Form onSubmit={loginUser}> */}
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
}
