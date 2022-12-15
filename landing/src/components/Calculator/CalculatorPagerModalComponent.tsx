import React, { ReactNode } from "react";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import Logo from "./CalculatorLogo";

interface ICalculatorModalComponentProps {
  buttonText: string;
  onClose: () => void;
  onButtonClick: () => void;
  children: ReactNode;
}

const CalculatorModalComponent = ({
  buttonText,
  onClose,
  onButtonClick,
  children,
}: ICalculatorModalComponentProps) => {
  return (
    <Styled.Wrapper>
      <Styled.PagerBackgroundImageWrapper>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 669 391"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37922 638.305 0.999939 628.275 0.999939Z"
            fill="url(#paint0_linear_2705_42721)"
          />
          <path
            d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37922 638.305 0.999939 628.275 0.999939Z"
            fill="url(#paint1_linear_2705_42721)"
          />
          <path
            d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37922 638.305 0.999939 628.275 0.999939Z"
            fill="black"
          />
          <path
            d="M628.275 372.996H21.0088C14.9577 372.996 9.53403 370.311 5.86501 366.067C2.83361 362.56 1 357.99 1 352.991V21.0046C1 9.95633 9.95824 0.999939 21.0088 0.999939H628.275C638.305 0.999939 646.612 8.37922 648.06 18.004C648.207 18.9828 648.283 19.9847 648.283 21.0046V352.991C648.283 364.04 639.325 372.996 628.275 372.996Z"
            fill="#F1EFED"
          />
          <foreignObject width="100%" height="100%">
            <Styled.ForeignObjectWrapper>
              <Styled.CalculatorHeaderWrapper>
                <Styled.CalculatorHeaderInner>
                  <Logo />
                  <Styled.CloseButton onClick={onClose} />
                </Styled.CalculatorHeaderInner>
              </Styled.CalculatorHeaderWrapper>
              {children}
              <Styled.StartButton onClick={onButtonClick}>
                {buttonText}
              </Styled.StartButton>
            </Styled.ForeignObjectWrapper>
          </foreignObject>
          <path
            d="M668 369.995C668 381.044 659.042 390 647.991 390L628.275 372.996C639.325 372.996 648.283 364.04 648.283 352.991L668 369.995Z"
            fill="#5869DD"
          />
          <path
            d="M668 38.0085V369.995L648.283 352.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004C659.079 18.041 668 26.9831 668 38.0085Z"
            fill="url(#paint2_linear_2705_42721)"
          />
          <path
            d="M647.991 390H40.7254H35C16.2223 390 1 374.778 1 356V352.991C1 357.99 2.83361 362.56 5.86501 366.067C9.53403 370.311 14.9577 372.996 21.0088 372.996H628.275L647.991 390Z"
            fill="url(#paint3_linear_2705_42721)"
          />
          <path
            d="M668 38.0085V369.995M668 38.0085V34.9999C668 16.2223 652.778 0.999939 634 0.999939H628.275M668 38.0085C668 26.9831 659.079 18.041 648.06 18.004M647.991 18.0039C648.014 18.0039 648.037 18.004 648.06 18.004M647.991 390H40.7254H35C16.2223 390 1 374.778 1 356V352.991M647.991 390C659.042 390 668 381.044 668 369.995M647.991 390L628.275 372.996M668 369.995L648.283 352.991M628.275 0.999939H21.0088C9.95824 0.999939 1 9.95633 1 21.0046V352.991M628.275 0.999939C638.305 0.999939 646.612 8.37922 648.06 18.004M628.275 372.996H21.0088C14.9577 372.996 9.53403 370.311 5.86501 366.067C2.83361 362.56 1 357.99 1 352.991M628.275 372.996C639.325 372.996 648.283 364.04 648.283 352.991M648.283 352.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004"
            stroke="black"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2705_42721"
              x1="1"
              y1="195.5"
              x2="668"
              y2="195.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2705_42721"
              x1="1"
              y1="195.5"
              x2="668"
              y2="195.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2705_42721"
              x1="282.123"
              y1="187.538"
              x2="646.453"
              y2="-5.98555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2705_42721"
              x1="1"
              y1="195.5"
              x2="668"
              y2="195.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
          </defs>
        </svg>
      </Styled.PagerBackgroundImageWrapper>
    </Styled.Wrapper>
  );
};

export default CalculatorModalComponent;
