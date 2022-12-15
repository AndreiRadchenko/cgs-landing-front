import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { queryKeys } from "../../consts/queryKeys";
import { adminCalculatorService } from "../../services/adminCalculator";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import BlackButtonComponent from "../BlackButtonWithArrow";
import CalculatorPagerComponent from "./CalculatorPagerComponent";
import CalculatorStepsComponent from "./CalculatorStepsComponent";

const Calculator = () => {
  const [buttonText, setButtonText] = useState<string>("< start >");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startLoading, setStartLoading] = useState<boolean>(false);
  const [isBlockchain, setIsBlockchain] = useState<boolean>(false);
  const [isChosen, setIsChosen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);

  const { data } = useQuery([queryKeys.getCalculatorData], () =>
    adminCalculatorService.getCalculatorData()
  );

  const { data: classicStepsData, isLoading: classicLoading } = useQuery(
    [queryKeys.getCalculatorClassicSteps],
    () => adminCalculatorService.getCalculatorClassicSteps(),
    { enabled: startLoading }
  );

  const { data: blockchainStepsData, isLoading: blockchainLoading } = useQuery(
    [queryKeys.getCalculatorBlockchainSteps],
    () => adminCalculatorService.getCalculatorBlockchainSteps(),
    { enabled: startLoading }
  );

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsChosen(false);
    setIsOpen(false);
    setStartLoading(false);
    setButtonText("< start >");
  };

  const handlePagerButtonsClick = () => {
    setStartLoading(true);
  };

  const handleButtonClick = () => {
    setStartLoading(true);
    setButtonText("< choose >");
  };

  const handleBlockchainClick = () => {
    setIsChosen(true);
    setIsBlockchain(true);
  };

  const handleClassicClick = () => {
    setIsChosen(true);
    setIsBlockchain(false);
  };

  return (
    <>
      <Styled.CalculatorPreviewWrapper>
        <Styled.CalculatorPreviewCube>
          <Styled.CalculatorPreview>
            <Styled.CalculatorButton className="button">
              calculator
            </Styled.CalculatorButton>
            <Styled.CalculatorPreviewContentWrapper className="content">
              <span>
                <SplitBrackets text={data?.previewTextMessage} />
              </span>
              <BlackButtonComponent
                onClick={handleOpen}
                text="Start calculation"
                style={{ padding: "1em 2.15em" }}
              />
            </Styled.CalculatorPreviewContentWrapper>
          </Styled.CalculatorPreview>
        </Styled.CalculatorPreviewCube>
      </Styled.CalculatorPreviewWrapper>
      {(isChosen && blockchainStepsData && classicStepsData && (
        <CalculatorStepsComponent
          step={step}
          stepsCount={
            isBlockchain ? blockchainStepsData.length : classicStepsData.length
          }
          setIsChosen={setIsChosen}
          currentData={
            isBlockchain ? blockchainStepsData[step] : classicStepsData[step]
          }
          handleClose={handleClose}
          setStep={setStep}
        />
      )) || (
        <CalculatorPagerComponent
          isOpen={isOpen}
          handleBlockchainClick={handleBlockchainClick}
          handleButtonClick={handleButtonClick}
          handleClassicClick={handleClassicClick}
          handleClose={handleClose}
          handlePagerButtonsClick={handlePagerButtonsClick}
          buttonText={buttonText}
          startLoading={startLoading}
          classicLoading={classicLoading}
          blockchainLoading={blockchainLoading}
          classicStepsData={classicStepsData}
          blockchainStepsData={blockchainStepsData}
        />
      )}
    </>
  );
};

export default Calculator;
