//create auth component
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({ children }) => {
  const location = useLocation();

  const { user } = useSelector((state) => state.authStore);
  return user?._id ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default Auth;
