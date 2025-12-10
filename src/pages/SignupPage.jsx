import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { COLORS } from "../theme";

const SignupPage = () => {
  return (
    <div style={{ backgroundColor: COLORS.background, height: "100%" }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={7}>
            <Card
              style={{
                border: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
              }}
            >
              <Card.Body>
                <h3 className="mb-4 text-center">Create Account</h3>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm password"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: COLORS.accent,
                      borderColor: COLORS.accent,
                    }}
                    className="w-100"
                  >
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupPage;
