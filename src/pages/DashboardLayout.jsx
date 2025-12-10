import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { COLORS } from "../theme";
import Auth from "../components/Auth";

const DashboardLayout = ({ userRole }) => {
  return (
    <Auth>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <div style={{ width: "230px" }}>
          <Sidebar userRole={userRole} />
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: COLORS.background,
            padding: "1.5rem",
          }}
        >
          <Outlet />
        </div>
      </div>
    </Auth>
  );
};

export default DashboardLayout;
