import React from "react";

const Error = ({ error }) => {
  return (
    <p
      style={{
        fontSize: "1.125rem",
        letterSpacing: "0.0625rem",
        color: "var(--primary-red)",
      }}
    >
      {error}
    </p>
  );
};

export default Error;
