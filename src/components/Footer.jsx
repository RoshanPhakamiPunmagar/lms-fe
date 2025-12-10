// src/components/Footer.jsx
import React from "react";
import { COLORS } from "../theme";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: COLORS.dark,
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
        marginTop: "auto",
      }}
    >
      © {new Date().getFullYear()} MyLibrary. All rights reserved.
    </footer>
  );
};

export default Footer;
