import React from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { COLORS } from "../theme";

const BorrowManagementPage = () => {
  return (
    <>
      <h3 className="mb-3">Borrow Management</h3>
      <Table bordered hover style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th>User</th>
            <th>Book</th>
            <th>Borrowed At</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ashon</td>
            <td>Clean Code</td>
            <td>2025-10-10</td>
            <td>
              <Badge bg="" style={{ backgroundColor: COLORS.seafoam }}>
                Borrowed
              </Badge>
            </td>
            <td>
              <Button size="sm" variant="outline-secondary" className="me-2">
                Mark Returned
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default BorrowManagementPage;
