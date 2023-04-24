import React from "react";

const BtnPolyline = () => {
  return (
    <svg width="170px" height="40px" viewBox="0 0 170 40" className="border">
      <polyline points="170,1 170,40 1,40 1,1 40,1" className="bg-line" />
      <polyline points="170,1 170,40 1,40 1,1 170,1" className="hl-line" />
    </svg>
  );
};

export default BtnPolyline;
