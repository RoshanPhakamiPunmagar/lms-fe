import React, { use } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../theme";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.authStore);
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/borrowed", label: "My Borrowed Books" },
    { path: "/dashboard/profile", label: "Profile" },
  ];

  const adminItems = [
    { path: "/dashboard/books", label: "Book Management" },
    { path: "/dashboard/borrows", label: "Borrow Management" },
    { path: "/dashboard/reviews", label: "Review Management" },
  ];

  return (
    <div
      style={{
        backgroundColor: COLORS.dark,
        minHeight: "100vh",
        color: "white",
        padding: "1.5rem 1rem",
        height: "100%",
      }}
    >
      <h5 className="mb-4">MyLibrary</h5>
      <Nav className="flex-column gap-2">
        {menuItems.map((item) => (
          <Nav.Link
            as={Link}
            to={item.path}
            key={item.path}
            style={{
              color: "white",
              backgroundColor:
                location.pathname === item.path
                  ? "rgba(244,245,244,0.1)"
                  : "transparent",
              borderRadius: "0.5rem",
            }}
          >
            {item.label}
          </Nav.Link>
        ))}

        {user.role === "admin" && (
          <>
            <h4>Admin</h4>
            {adminItems.map((item) => (
              <Nav.Link
                as={Link}
                to={item.path}
                key={item.path}
                style={{
                  color: "white",
                  backgroundColor:
                    location.pathname === item.path
                      ? "rgba(244,245,244,0.1)"
                      : "transparent",
                  borderRadius: "0.5rem",
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
