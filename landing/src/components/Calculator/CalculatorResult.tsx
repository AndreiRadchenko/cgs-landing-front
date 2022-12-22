import React, { ReactNode } from "react";
import { ResultImageWrapper } from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorResultProps {
  mobile?: boolean;
  children: ReactNode;
}

const CalculatorResult = ({ mobile, children }: ICalculatorResultProps) => {
  return (
    <ResultImageWrapper>
      {mobile ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 356 481"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M327.5 1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.648 8.37927 332.824 1 327.5 1Z"
            fill="url(#paint0_linear_2705_66939)"
          />
          <path
            d="M327.5 1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.648 8.37927 332.824 1 327.5 1Z"
            fill="url(#paint1_linear_2705_66939)"
          />
          <path
            d="M327.5 1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.648 8.37927 332.824 1 327.5 1Z"
            fill="black"
          />
          <path
            d="M333.916 468.996H14.5C6.9868 468.996 1.49663 460.484 1.05154 452.984C1 452.116 1 451.163 1 449.991V21.0046C1 9.95639 14.1351 1 20 1H327.5C332.824 1 343.648 8.37927 344.417 18.0041C344.495 18.9828 344.536 19.9848 344.536 21.0046V449.991C344.536 463 342.5 468.996 333.916 468.996Z"
            fill="#F1EFED"
          />
          <path
            d="M355 465.995C355 477.044 350.246 480 344.381 480L333.916 468.996C342.5 468.996 344.536 463 344.536 449.991L355 465.995Z"
            fill="#5869DD"
          />
          <path
            d="M355 38.0085V465.995L344.536 449.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041C350.265 18.041 355 26.9831 355 38.0085Z"
            fill="url(#paint2_linear_2705_66939)"
          />
          <path
            d="M344.381 480H22.0836C10.4395 480 1 470.561 1 458.916V449.991C1 451.163 1 452.116 1.05154 452.984C1.49663 460.484 6.9868 468.996 14.5 468.996H333.916L344.381 480Z"
            fill="url(#paint3_linear_2705_66939)"
          />
          <path
            d="M355 38.0085V465.995M355 38.0085V28.5C355 13.3122 342.688 1 327.5 1V1M355 38.0085C355 26.9831 350.265 18.041 344.417 18.0041M344.381 18.004C344.393 18.004 344.405 18.004 344.417 18.0041M344.381 480H22.0836V480C10.4395 480 1 470.561 1 458.916V449.991M344.381 480C350.246 480 355 477.044 355 465.995M344.381 480L333.916 468.996M355 465.995L344.536 449.991M327.5 1H20C14.1351 1 1 9.9564 1 21.0046V449.991M327.5 1C332.824 1 343.649 8.37928 344.417 18.0041M333.916 468.996H14.5V468.996C6.9868 468.996 1.49663 460.484 1.05154 452.984C1 452.116 1 451.163 1 449.991M333.916 468.996C342.5 468.996 344.536 463 344.536 449.991M344.536 449.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041"
            stroke="black"
            strokeWidth="1.2"
          />
          <foreignObject width="97%" height="97.5%">
            {children}
          </foreignObject>
          <defs>
            <linearGradient
              id="paint0_linear_2705_66939"
              x1="1"
              y1="240.5"
              x2="355"
              y2="240.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2705_66939"
              x1="1"
              y1="240.5"
              x2="355"
              y2="240.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2705_66939"
              x1="150.202"
              y1="230.696"
              x2="385.774"
              y2="176.763"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2705_66939"
              x1="1"
              y1="240.5"
              x2="355"
              y2="240.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
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
      )}
    </ResultImageWrapper>
  );
};

export default CalculatorResult;
