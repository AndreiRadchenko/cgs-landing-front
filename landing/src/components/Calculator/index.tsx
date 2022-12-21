import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { queryKeys } from "../../consts/queryKeys";
import { adminCalculatorService } from "../../services/adminCalculator";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import { SplitBrackets } from "../../utils/splitBrackets";
import BlackButtonComponent from "../BlackButtonWithArrow";
import CalculatorPagerComponent from "./CalculatorPagerComponent";
import CalculatorStepsComponent from "./CalculatorStepsComponent";
import CalculatorField from "./CalculatorTitleField";
import CalculatorInputField from "./CalculatorInputs";
import CalculatorCompletedPager from "./CalculatorCompletedPager";

const Calculator = () => {
  const [buttonText, setButtonText] = useState<string>("< start >");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startLoading, setStartLoading] = useState<boolean>(false);
  const [isBlockchain, setIsBlockchain] = useState<boolean>(false);
  const [isChosen, setIsChosen] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [previousSteps, setPreviousSteps] = useState<number[]>([]);
  const [finishPagerClick, setFinishPagerClick] = useState<boolean>(false);

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
    setIsCompleted(false);
    setIsBlockchain(false);
    setFinishPagerClick(false);
    setStep(0);
    setPreviousSteps([]);
    setButtonText("< start >");
  };

  const handlePagerButtonsClick = () => {
    setStartLoading(true);
  };

  const handleCompletedPagerButtonsClick = () => {
    setFinishPagerClick(true);
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

  DisableScrollBarHandler(isOpen);

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
      {isCompleted ? (
        <CalculatorCompletedPager
          finishClick={finishPagerClick}
          handlePagerButtonsClick={handleCompletedPagerButtonsClick}
          handleClose={handleClose}
          handleButtonClick={handleClose}
        />
      ) : (
        <>
          {(isChosen && blockchainStepsData && classicStepsData && (
            <CalculatorStepsComponent
              isBlockchain={isBlockchain}
              step={step}
              stepsCount={
                isBlockchain
                  ? blockchainStepsData.length
                  : classicStepsData.length
              }
              setIsChosen={setIsChosen}
              data={isBlockchain ? blockchainStepsData : classicStepsData}
              handleClose={handleClose}
              setStep={setStep}
              previousSteps={previousSteps}
              setPreviousSteps={setPreviousSteps}
              setIsCompleted={setIsCompleted}
            >
              {(isBlockchain &&
                blockchainStepsData &&
                blockchainStepsData.map((currentData, stepInd) => (
                  <div key={currentData.title}>
                    <CalculatorField text={currentData.title} />
                    {typeof currentData.options !== "string" && (
                      <CalculatorInputField
                        subStep={currentData.subSteps}
                        stepInd={stepInd}
                        options={currentData.options}
                        data={
                          isBlockchain ? blockchainStepsData : classicStepsData
                        }
                      />
                    )}
                  </div>
                ))) ||
                classicStepsData.map((currentData, stepInd) => (
                  <div key={currentData.title}>
                    <CalculatorField text={currentData.title} />
                    {typeof currentData.options !== "string" && (
                      <CalculatorInputField
                        subStep={currentData.subSteps}
                        stepInd={stepInd}
                        options={currentData.options}
                        data={
                          isBlockchain ? blockchainStepsData : classicStepsData
                        }
                      />
                    )}
                  </div>
                ))}
            </CalculatorStepsComponent>
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
      )}
    </>
  );
};

export default Calculator;
