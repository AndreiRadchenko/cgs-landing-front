import React from "react";
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
  classicLoading: boolean;
  blockchainLoading: boolean;
  classicStepsData?: ICalculatorStep[] | void;
  blockchainStepsData?: ICalculatorStep[] | void;
  handleButtonClick: () => void;
  handleClose: () => void;
  handleBlockchainClick: () => void;
  handleClassicClick: () => void;
  handlePagerRightButtonClick: () => void;
  handlePagerLeftButtonClick: () => void;
}

const CalculatorPagerComponent = ({
  buttonText,
  isOpen,
  startLoading,
  blockchainLoading,
  classicLoading,
  blockchainStepsData,
  classicStepsData,
  handleButtonClick,
  handleClose,
  handleBlockchainClick,
  handleClassicClick,
  handlePagerRightButtonClick,
  handlePagerLeftButtonClick,
}: ICalculatorPagerComponentProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);
  const { width } = useWindowDimension();

  return width && isOpen && data ? (
    <CalculatorModal
      buttonText={buttonText}
      onClose={handleClose}
      onButtonClick={handleButtonClick}
      mobile={width < 768}
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
          onPagerRightClick={handlePagerRightButtonClick}
          onPagerLeftClick={handlePagerLeftButtonClick}
        >
          <Styled.ContentWrapper>
            {(startLoading && (
              <>
                {classicLoading && blockchainLoading ? (
                  <Styled.LoaderWrapper>
                    <Styled.Loader />
                  </Styled.LoaderWrapper>
                ) : (
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
                )}
              </>
            )) || (
              <Styled.PagerText
                dangerouslySetInnerHTML={{
                  __html: data.startMessage.replaceAll("|", "<br>"),
                }}
              />
            )}
          </Styled.ContentWrapper>
        </CalculatorPager>
      )}
    </CalculatorModal>
  ) : null;
};

export default CalculatorPagerComponent;
