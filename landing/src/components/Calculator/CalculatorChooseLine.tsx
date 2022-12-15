import React, { ReactNode } from "react";

interface ICalculatorChooseLineProps {
  children: ReactNode;
}

const CalculatorChooseLine = ({ children }: ICalculatorChooseLineProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 581 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.92578V60C1 62.7614 3.23858 65 6 65L6 6.92578H1Z"
        fill="black"
      />
      <path d="M1 6V6.92578H6V1C3.23858 1 1 3.23858 1 6Z" fill="black" />
      <path
        d="M575 1H6V6.92578H568.045L575 1Z"
        fill="url(#paint0_linear_5380_20920)"
      />
      <path
        d="M580 6C580 3.23858 577.761 1 575 1L568.045 6.92578C570.807 6.92578 573.045 9.16436 573.045 11.9258L580 6Z"
        fill="url(#paint1_linear_5380_20920)"
      />
      <path
        d="M580 60V6L573.045 11.9258V65L575 65C577.761 65 580 62.7614 580 60Z"
        fill="url(#paint2_linear_5380_20920)"
      />
      <path
        d="M6 65L573.045 65V11.9258C573.045 9.16436 570.807 6.92578 568.045 6.92578H6L6 65Z"
        fill="#F1EFED"
      />
      <path
        d="M6 65H575M6 65C3.23858 65 1 62.7614 1 60M6 65L573.045 65M6 65L6 6.92578M1 60V6M1 60V6.92578M575 65C577.761 65 580 62.7614 580 60V6M575 65L573.045 65M575 1H6M575 1C577.761 1 580 3.23858 580 6M575 1L568.045 6.92578M580 6L573.045 11.9258M6 1C3.23858 1 1 3.23858 1 6M6 1V6.92578M1 6V6.92578M1 6.92578H6M573.045 65V11.9258M568.045 6.92578C570.807 6.92578 573.045 9.16436 573.045 11.9258M568.045 6.92578H6"
        stroke="black"
        strokeWidth="1.8"
      />
      <foreignObject width="100%" height="100%">
        {children}
      </foreignObject>
      <defs>
        <linearGradient
          id="paint0_linear_5380_20920"
          x1="1"
          y1="33"
          x2="580"
          y2="32.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5380_20920"
          x1="558.5"
          y1="15.4258"
          x2="580"
          y2="0.999997"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00837758" stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5380_20920"
          x1="531.5"
          y1="41.4258"
          x2="608"
          y2="40.9258"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CalculatorChooseLine;
