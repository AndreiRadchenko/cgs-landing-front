import React, { useState } from "react";
import Image from "next/image";
import CalculatorModal from "./CalculatorPagerModalComponent";
import PressButtonArrow from "../../../public/Calculator/pressButtonArrow.svg";
import CalculatorPager from "./CalculatorPager";
import CalculatorChooseLine from "./CalculatorChooseLine";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICalculator, ICalculatorStep } from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";

interface ICalculatorPagerComponentProps {
  buttonText: string;
  isOpen: boolean;
  startLoading: boolean;
  classicStepsData?: ICalculatorStep[] | void;
  blockchainStepsData?: ICalculatorStep[] | void;
  handleButtonClick: () => void;
  handleClose: () => void;
  handleBlockchainClick: () => void;
  handleClassicClick: () => void;
}

const CalculatorPagerComponent = ({
  buttonText,
  isOpen,
  startLoading,
  blockchainStepsData,
  classicStepsData,
  handleButtonClick,
  handleClose,
  handleBlockchainClick,
  handleClassicClick,
}: ICalculatorPagerComponentProps) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);
  const { width } = useWindowDimension();

  const content = data && [
    <Styled.PagerText
      dangerouslySetInnerHTML={{
        __html: data.startMessage.replaceAll("|", "<br>"),
      }}
    />,
    <Styled.LoaderWrapper>
      <Styled.Loader />
    </Styled.LoaderWrapper>,
    <Styled.PressButtonWrapper>
      <Styled.PressButtonText>just press the button</Styled.PressButtonText>
      <Styled.PressButtonImageWrapper>
        <Image
          src={PressButtonArrow.src}
          alt="press button arrow"
          layout="fill"
          objectFit="contain"
        />
      </Styled.PressButtonImageWrapper>
    </Styled.PressButtonWrapper>,
  ];

  if (!content) return <></>;

  const handleForwardClick = () => {
    setCurrentContentIndex((currentContentIndex + 1) % content.length);
  };

  const handleBackwardClick = () => {
    setCurrentContentIndex(
      (currentContentIndex - 1 + content.length) % content.length
    );
  };

  return width && isOpen && data ? (
    <CalculatorModal
      startLoading={startLoading}
      buttonText={buttonText}
      onClose={handleClose}
      onButtonClick={handleButtonClick}
      mobile={width < 768}
      isData={Boolean(classicStepsData && blockchainStepsData)}
    >
      {classicStepsData &&
      blockchainStepsData &&
      buttonText === "< choose >" ? (
        <Styled.ChooseModalWrapper>
          <CalculatorChooseLine mobile={width < 768}>
            <Styled.ChooseTextWrapper>
              <Styled.ChooseText onClick={handleBlockchainClick}>
                <span>Blockchain development</span>
              </Styled.ChooseText>
            </Styled.ChooseTextWrapper>
          </CalculatorChooseLine>
          <CalculatorChooseLine mobile={width < 768}>
            <Styled.ChooseTextWrapper>
              <Styled.ChooseText onClick={handleClassicClick}>
                <span>Classic development</span>
              </Styled.ChooseText>
            </Styled.ChooseTextWrapper>
          </CalculatorChooseLine>
        </Styled.ChooseModalWrapper>
      ) : (
        <CalculatorPager
          mobile={width < 768}
          onPagerLeftClick={
            currentContentIndex === 0 ? () => {} : handleBackwardClick
          }
          onPagerRightClick={
            currentContentIndex === content.length - 1
              ? () => {}
              : handleForwardClick
          }
        >
          <Styled.ContentWrapper>
            {content[currentContentIndex]}
          </Styled.ContentWrapper>
        </CalculatorPager>
      )}
    </CalculatorModal>
  ) : null;
};

export default CalculatorPagerComponent;
