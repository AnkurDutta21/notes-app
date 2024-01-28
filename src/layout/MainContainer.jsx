import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default MainContainer;
