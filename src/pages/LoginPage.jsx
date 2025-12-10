import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { COLORS } from "../theme";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { autoLoginUser, loginUserAction } from "../features/auth/authAction";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.authStore);

  const [form, setForm] = useState({
    email: "admin@gmail.com",
    password: "admin123",
  });

  const from = location.state?.from?.pathname || "/dashboard";
  useEffect(() => {
    if (user?._id) {
      navigate(from);
    } else {
      dispatch(autoLoginUser());
    }
  }, [user, navigate, dispatch, from]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    // 1. get email and password from client
    // 2. send email and password to login api
    // 3. receive response
    // 4. if respons success update accessToken to session storage and refreshToken to local storage
    // 5. if accessToken call user detail fetch api
    // 6. if success update user store
    dispatch(loginUserAction(form));
  };

  return (
    <div style={{ backgroundColor: COLORS.background }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={5}>
            <Card
              style={{
                border: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
              }}
            >
              <Card.Body>
                <h3 className="mb-4 text-center">Login</h3>
                <Form onSubmit={handleOnSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      required
                      value={form.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={handleChange}
                      required
                      value={form.password}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="w-100"
                    style={{
                      backgroundColor: COLORS.accent,
                      borderColor: COLORS.accent,
                    }}
                  >
                    Login
                  </Button>
                </Form>
                <p className="mt-3 text-center">
                  Don’t have an account? <Link to="/signup">Sign up</Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
