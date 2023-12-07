// ChatIcon.jsx

import React from "react";

const ChatIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M61 1V55H7V1H61Z" fill="url(#paint0_linear_33678_19543)" />
    <path
      d="M61 1V55H7V1H61Z"
      stroke="black"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M61 55H1V61H61V55Z" fill="#5869DD" />
    <path
      d="M61 55H1V61H61V55Z"
      stroke="black"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M7 55V1L1 7V61L7 55Z" fill="url(#paint1_linear_33678_19543)" />
    <path
      d="M7 55V1L1 7V61L7 55Z"
      stroke="black"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_33678_19543"
        x1="7"
        y1="28"
        x2="61"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D6FFBB" />
        <stop offset="1" stopColor="#5869DD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_33678_19543"
        x1="1.2"
        y1="0.999998"
        x2="-25.877"
        y2="17.3694"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D6FFBB" />
        <stop offset="1" stopColor="#5869DD" />
      </linearGradient>
    </defs>
  </svg>
);

export default ChatIcon;
