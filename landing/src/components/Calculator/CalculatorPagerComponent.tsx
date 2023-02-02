import React, { useRef } from "react";
import Image from "next/image";
import CalculatorModal from "./CalculatorPagerModalComponent";
import PressButtonArrow from "../../../public/Calculator/pressButtonArrow.svg";
import CalculatorPager from "./CalculatorPager";
import CalculatorChooseLine from "./CalculatorChooseLine";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICalculator, ICalculatorStep } from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { ClickAudio, Source } from "../HeaderNavNew/HeaderNav.styled";

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
  handlePagerButtonsClick: () => void;
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
  handlePagerButtonsClick,
}: ICalculatorPagerComponentProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleClick = () => {
    audioRef.current?.play();
    handlePagerButtonsClick();
  };
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);
  const { width } = useWindowDimension();

  return width && isOpen ? (
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
            <Styled.ChooseText onClick={handleBlockchainClick}>
              Blockchain development
            </Styled.ChooseText>
          </CalculatorChooseLine>
          <CalculatorChooseLine mobile={width < 768}>
            <Styled.ChooseText onClick={handleClassicClick}>
              classic development
            </Styled.ChooseText>
          </CalculatorChooseLine>
        </Styled.ChooseModalWrapper>
      ) : (
        <CalculatorPager
          mobile={width < 768}
          onPagerClick={handleClick}
          startLoading={startLoading}
        >
          <ClickAudio ref={audioRef}>
            <Source src="/music/calculatorButton.mp3" type="audio/mpeg" />
          </ClickAudio>
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
              <Styled.PagerText>
                <SplitBrackets text={data?.startMessage} />
              </Styled.PagerText>
            )}
          </Styled.ContentWrapper>
        </CalculatorPager>
      )}
    </CalculatorModal>
  ) : null;
};

export default CalculatorPagerComponent;
