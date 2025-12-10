import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { COLORS } from "../theme";

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE}/api/v1/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg || "Signup failed");
      }

      setSuccess("Account created successfully!");
      setLoading(false);

      // Redirect after signup
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.background, minHeight: "100vh" }}>
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

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          value={form.password}
                          onChange={handleChange}
                          placeholder="Password"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          name="confirmPassword"
                          type="password"
                          value={form.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    type="submit"
                    disabled={loading}
                    style={{
                      backgroundColor: COLORS.accent,
                      borderColor: COLORS.accent,
                    }}
                    className="w-100"
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
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
