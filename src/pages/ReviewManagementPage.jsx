import React from "react";
import { Table, Button } from "react-bootstrap";

const ReviewManagementPage = () => {
  return (
    <>
      <h3 className="mb-3">Review Management</h3>
      <Table bordered hover style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th>User</th>
            <th>Book</th>
            <th>Review</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane D.</td>
            <td>Clean Code</td>
            <td>Very useful and clear.</td>
            <td>
              <Button size="sm" variant="outline-danger">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ReviewManagementPage;
