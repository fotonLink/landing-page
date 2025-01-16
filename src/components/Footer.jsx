import React from "react";

function Footer() {
  return (
    <footer
      className="footer bg-dark text-warning py-5"
      style={{
        textAlign: "left",
        paddingTop: "10px",
        paddingLeft: "40px",
      }}
    >
      <p
        style={{
          fontSize: "2rem",
          marginTop: "16px",
          marginBottom: "32px",
        }}
      >
        fotonLink
      </p>
      <p style={{ fontSize: "0.8rem" }}>
        &copy; 2024 FontonLink. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
