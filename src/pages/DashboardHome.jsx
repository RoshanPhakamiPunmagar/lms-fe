import React from "react";
import { Row, Col } from "react-bootstrap";
import StatCard from "../components/StatCard";

const DashboardHome = () => {
  return (
    <>
      <h3 className="mb-4">Dashboard</h3>
      <Row>
        <Col md={4}>
          <StatCard label="Borrowed Books" value="4" />
        </Col>
        <Col md={4}>
          <StatCard label="Total History" value="12" />
        </Col>
        <Col md={4}>
          <StatCard label="Overdue" value="1" />
        </Col>
      </Row>
    </>
  );
};

export default DashboardHome;
