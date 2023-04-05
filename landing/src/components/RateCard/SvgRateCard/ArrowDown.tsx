import React from "react";

const ArrowDown = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      transform={isActive ? "rotate(180)" : "rotate(0)"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 12C10.6057 12 10.2114 11.8559 9.91084 11.5684L0.451312 2.51663C-0.150437 1.94083 -0.150437 1.00725 0.451312 0.431681C1.05282 -0.143894 2.02826 -0.143894 2.63005 0.431681L11 8.44122L19.3699 0.43196C19.9717 -0.143614 20.947 -0.143614 21.5485 0.43196C22.1505 1.00753 22.1505 1.94111 21.5485 2.51691L12.0891 11.5687C11.7883 11.8563 11.3941 12 11 12Z"
        fill={isActive ? "#5869DD" : "black"}
      />
    </svg>
  );
};

export default ArrowDown;
