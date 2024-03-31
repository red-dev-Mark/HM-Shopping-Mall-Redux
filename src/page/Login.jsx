import { Button, Col, Container, Form } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuthenticate }) {
  const navigate = useNavigate();

  const loginUser = (event) => {
    // console.log("login!!!"); //버튼을 누르자 아주 잠깐 콘솔창에 뜬다. 왜냐하면 새로고침되기 때문에
    event.preventDefault(); //이제 새로고침이 안 된다.
    setAuthenticate(true);
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
