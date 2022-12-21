import React, { ReactNode } from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import CalculatorResult from "./CalculatorResult";

interface ICalculatorModalComponentProps {
  children?: ReactNode;
  lastPage?: boolean;
}

const CalculatorStepsModalComponent = ({
  children,
  lastPage,
}: ICalculatorModalComponentProps) => {
  return (
    <Styled.Wrapper>
      {lastPage ? (
        <CalculatorResult>{children}</CalculatorResult>
      ) : (
        <Styled.StepsBackgroundImage>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 669 647"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M628.275 0.999939H634C652.778 0.999939 668 16.2222 668 34.9999V38.0085C668 26.983 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
              fill="url(#paint0_linear_5405_21508)"
            />
            <path
              d="M628.275 0.999939H634C652.778 0.999939 668 16.2222 668 34.9999V38.0085C668 26.983 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
              fill="url(#paint1_linear_5405_21508)"
            />
            <path
              d="M628.275 0.999939H634C652.778 0.999939 668 16.2222 668 34.9999V38.0085C668 26.983 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
              fill="black"
            />
            <path
              d="M628.275 628.996H21.0088C14.9577 628.996 9.53403 626.311 5.86501 622.067C2.83361 618.56 1 613.99 1 608.991V21.0046C1 9.95636 9.95824 0.999939 21.0088 0.999939H628.275C638.305 0.999939 646.612 8.37921 648.06 18.004C648.207 18.9828 648.283 19.9847 648.283 21.0046V608.991C648.283 620.04 639.325 628.996 628.275 628.996Z"
              fill="#F1EFED"
            />
            <foreignObject width="100%" height="100%">
              <Styled.ForeignObjectWrapper className="steps">
                {children}
              </Styled.ForeignObjectWrapper>
            </foreignObject>
            <path
              d="M668 625.995C668 637.044 659.042 646 647.991 646L628.275 628.996C639.325 628.996 648.283 620.04 648.283 608.991L668 625.995Z"
              fill="#5869DD"
            />
            <path
              d="M668 38.0085V625.995L648.283 608.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004C659.079 18.041 668 26.983 668 38.0085Z"
              fill="url(#paint2_linear_5405_21508)"
            />
            <path
              d="M647.991 646H40.7254H35C16.2223 646 1 630.778 1 612V608.991C1 613.99 2.83361 618.56 5.86501 622.067C9.53403 626.311 14.9577 628.996 21.0088 628.996H628.275L647.991 646Z"
              fill="url(#paint3_linear_5405_21508)"
            />
            <path
              d="M668 38.0085V625.995M668 38.0085V34.9999C668 16.2223 652.778 0.999939 634 0.999939H628.275M668 38.0085C668 26.9831 659.079 18.041 648.06 18.004M647.991 18.0039C648.014 18.0039 648.037 18.004 648.06 18.004M647.991 646H40.7254H35C16.2223 646 1 630.778 1 612V608.991M647.991 646C659.042 646 668 637.044 668 625.995M647.991 646L628.275 628.996M668 625.995L648.283 608.991M628.275 0.999939H21.0088C9.95824 0.999939 1 9.95633 1 21.0046V608.991M628.275 0.999939C638.305 0.999939 646.612 8.37922 648.06 18.004M628.275 628.996H21.0088C14.9577 628.996 9.53403 626.311 5.86501 622.067C2.83361 618.56 1 613.99 1 608.991M628.275 628.996C639.325 628.996 648.283 620.04 648.283 608.991M648.283 608.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004"
              stroke="black"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5405_21508"
                x1="1"
                y1="323.5"
                x2="668"
                y2="323.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5405_21508"
                x1="1"
                y1="323.5"
                x2="668"
                y2="323.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5405_21508"
                x1="282.123"
                y1="310.299"
                x2="705.771"
                y2="174.582"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_5405_21508"
                x1="1"
                y1="323.5"
                x2="668"
                y2="323.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
            </defs>
          </svg>
        </Styled.StepsBackgroundImage>
      )}
    </Styled.Wrapper>
  );
};

export default CalculatorStepsModalComponent;
