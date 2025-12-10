import React from "react";
import { Card } from "react-bootstrap";
import { COLORS } from "../theme";

const StatCard = ({ label, value }) => {
  return (
    <Card
      style={{
        backgroundColor: COLORS.white,
        border: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
      }}
      className="mb-3"
    >
      <Card.Body>
        <p className="text-muted mb-1">{label}</p>
        <h3>{value}</h3>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
