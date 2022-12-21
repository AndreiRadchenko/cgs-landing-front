import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { ICalculator } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import CalculatorModalComponent from "./CalculatorPagerModalComponent";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import CalculatorPager from "./CalculatorPager";
import Image from "next/image";
import PressButtonArrow from "../../../public/Calculator/pressButtonArrow.svg";

interface ICalculatorCompletedPagerProps {
  finishClick: boolean;
  handleClose: () => void;
  handleButtonClick: () => void;
  handlePagerButtonsClick: () => void;
}

const CalculatorCompletedPager = ({
  finishClick,
  handleClose,
  handleButtonClick,
  handlePagerButtonsClick,
}: ICalculatorCompletedPagerProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  return (
    <CalculatorModalComponent
      buttonText={"< Finish >"}
      onClose={handleClose}
      onButtonClick={handleButtonClick}
    >
      <CalculatorPager onPagerClick={handlePagerButtonsClick}>
        <Styled.ContentWrapper>
          {finishClick ? (
            <Styled.PressButtonWrapper>
              <Styled.PressButtonText>
                just press the button
              </Styled.PressButtonText>
              <Styled.PressButtonImageWrapper>
                <Image
                  src={PressButtonArrow.src}
                  alt="press button arrow"
                  layout="fill"
                  objectFit="contain"
                />
              </Styled.PressButtonImageWrapper>
            </Styled.PressButtonWrapper>
          ) : (
            <Styled.FinishTextWrapper>
              <SplitBrackets text={data?.finishMessage} />
            </Styled.FinishTextWrapper>
          )}
        </Styled.ContentWrapper>
      </CalculatorPager>
    </CalculatorModalComponent>
  );
};

export default CalculatorCompletedPager;
