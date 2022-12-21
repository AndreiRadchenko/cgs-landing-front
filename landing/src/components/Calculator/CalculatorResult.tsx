import React, { ReactNode } from "react";
import { ResultImageWrapper } from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorResultProps {
  children: ReactNode;
}

const CalculatorResult = ({ children }: ICalculatorResultProps) => {
  return (
    <ResultImageWrapper>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 669 463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
          fill="url(#paint0_linear_2705_30426)"
        />
        <path
          d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
          fill="url(#paint1_linear_2705_30426)"
        />
        <path
          d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
          fill="black"
        />
        <path
          d="M628.275 444.996H21.0088C14.9577 444.996 9.53403 442.311 5.86501 438.067C2.83361 434.56 1 429.99 1 424.991V21.0046C1 9.95633 9.95824 0.999939 21.0088 0.999939H628.275C638.305 0.999939 646.612 8.37921 648.06 18.004C648.207 18.9828 648.283 19.9847 648.283 21.0046V424.991C648.283 436.04 639.325 444.996 628.275 444.996Z"
          fill="#F1EFED"
        />
        <path
          d="M668 441.995C668 453.044 659.042 462 647.991 462L628.275 444.996C639.325 444.996 648.283 436.04 648.283 424.991L668 441.995Z"
          fill="#5869DD"
        />
        <path
          d="M668 38.0085V441.995L648.283 424.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004C659.079 18.041 668 26.9831 668 38.0085Z"
          fill="url(#paint2_linear_2705_30426)"
        />
        <path
          d="M647.991 462H40.7254H35C16.2223 462 1 446.778 1 428V424.991C1 429.99 2.83361 434.56 5.86501 438.067C9.53403 442.311 14.9577 444.996 21.0088 444.996H628.275L647.991 462Z"
          fill="url(#paint3_linear_2705_30426)"
        />
        <path
          d="M668 38.0085V441.995M668 38.0085V34.9999C668 16.2223 652.778 0.999939 634 0.999939H628.275M668 38.0085C668 26.9831 659.079 18.041 648.06 18.004M647.991 18.0039C648.014 18.0039 648.037 18.004 648.06 18.004M647.991 462H40.7254H35C16.2223 462 1 446.778 1 428V424.991M647.991 462C659.042 462 668 453.044 668 441.995M647.991 462L628.275 444.996M668 441.995L648.283 424.991M628.275 0.999939H21.0088C9.95824 0.999939 1 9.95633 1 21.0046V424.991M628.275 0.999939C638.305 0.999939 646.612 8.37922 648.06 18.004M628.275 444.996H21.0088C14.9577 444.996 9.53403 442.311 5.86501 438.067C2.83361 434.56 1 429.99 1 424.991M628.275 444.996C639.325 444.996 648.283 436.04 648.283 424.991M648.283 424.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004"
          stroke="black"
          strokeWidth="2"
        />
        <foreignObject width="97%" height="96%">
          {children}
        </foreignObject>
        <defs>
          <linearGradient
            id="paint0_linear_2705_30426"
            x1="1"
            y1="231.5"
            x2="668"
            y2="231.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6FFBB" />
            <stop offset="1" stopColor="#5869DD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2705_30426"
            x1="1"
            y1="231.5"
            x2="668"
            y2="231.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6FFBB" />
            <stop offset="1" stopColor="#5869DD" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2705_30426"
            x1="282.123"
            y1="222.065"
            x2="671.103"
            y2="47.7173"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6FFBB" />
            <stop offset="1" stopColor="#5869DD" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2705_30426"
            x1="1"
            y1="231.5"
            x2="668"
            y2="231.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6FFBB" />
            <stop offset="1" stopColor="#5869DD" />
          </linearGradient>
        </defs>
      </svg>
    </ResultImageWrapper>
  );
};

export default CalculatorResult;
