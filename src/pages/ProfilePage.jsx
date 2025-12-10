import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { COLORS } from "../theme";

const ProfilePage = () => {
  return (
    <Card style={{ border: "none" }}>
      <Card.Body>
        <h3 className="mb-4">Profile</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control defaultValue="Ashon" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control defaultValue="Shakya" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" defaultValue="ashon@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" defaultValue="+61 400 000 000" />
          </Form.Group>
          <Button
            style={{
              backgroundColor: COLORS.accent,
              borderColor: COLORS.accent,
            }}
            type="submit"
          >
            Save Changes
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProfilePage;
