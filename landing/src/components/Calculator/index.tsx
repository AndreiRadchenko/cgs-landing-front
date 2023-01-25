import { useMutation, useQuery } from "@tanstack/react-query";

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
import {
  ICalculatorFormValuesProps,
  ICalculatorPostEmailResultsProps,
} from "../../types/Admin/Response.types";
import { Formik } from "formik";
import { CalculatorValidation } from "../../validations/CalculatorValidation";

const Calculator = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("< start >");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startLoading, setStartLoading] = useState<boolean>(false);
  const [isBlockchain, setIsBlockchain] = useState<boolean>(false);
  const [isChosen, setIsChosen] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [previousSteps, setPreviousSteps] = useState<number[]>([]);
  const [finishPagerClick, setFinishPagerClick] = useState<boolean>(false);
  const [calculateIsClicked, setCalculateIsClicked] = useState<boolean>(false);
  const [isQuitting, setIsQuitting] = useState<boolean>(false);
  const [warnIsShow, setWarnIsShow] = useState<boolean>(false);

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
    setCalculateIsClicked(false);
    setIsQuitting(false);
    setWarnIsShow(false);
    setStep(0);
    setPreviousSteps([]);
    setButtonText("< start >");
  };

  const handleQuit = () => {
    setIsQuitting(true);
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

  const { mutate } = useMutation(
    [queryKeys.sendEmailResults],
    (answers: ICalculatorPostEmailResultsProps) =>
      adminCalculatorService.sendResultsEmail(answers),
    {
      onSuccess: () => setIsCompleted(true),
    }
  );

  const stepsData = isBlockchain ? blockchainStepsData : classicStepsData;

  const initialValues = stepsData && {
    questionsArr: stepsData.map((el) => {
      return {
        title: el.title,
        answer: "",
        subStepAnswer: "",
      };
    }),
    email: "",
    isBlockchain,
  };

  const onSubmit = (values: ICalculatorFormValuesProps) => {
    const { isBlockchain, questionsArr, email } = values;
    mutate({ answers: questionsArr, isBlockchain, email });
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  };

  DisableScrollBarHandler(isOpen);

  const hoverClassName = isHovered ? "active" : undefined;

  return (
    <>
      <Styled.CalculatorPreviewWrapper>
        <Styled.CalculatorPreviewCube className={hoverClassName}>
          <Styled.CalculatorPreview className={hoverClassName}>
            <Styled.CalculatorButton
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              calculator
            </Styled.CalculatorButton>
            <Styled.CalculatorPreviewContentWrapper
              onClick={handleOpen}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              className={hoverClassName}
            >
              <span>
                <SplitBrackets text={data?.previewTextMessage} />
              </span>
              <div>
                <BlackButtonComponent
                  onClick={handleOpen}
                  text="Start calculation"
                  style={{ padding: "1em 2.15em" }}
                />
              </div>
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
          {(isChosen &&
            initialValues &&
            blockchainStepsData &&
            classicStepsData && (
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={CalculatorValidation}
                validateOnChange
              >
                {({ values }) => (
                  <CalculatorStepsComponent
                    isQuitting={isQuitting}
                    setIsQuitting={setIsQuitting}
                    step={step}
                    stepsCount={stepsData.length + 1}
                    setIsChosen={setIsChosen}
                    handleClose={handleClose}
                    setStep={setStep}
                    previousSteps={previousSteps}
                    setPreviousSteps={setPreviousSteps}
                    calculateIsClicked={calculateIsClicked}
                    setCalculateIsClicked={setCalculateIsClicked}
                    handleQuit={handleQuit}
                    warnIsShow={warnIsShow}
                    setWarnIsShow={setWarnIsShow}
                  >
                    {stepsData.map((currentData, stepInd) => (
                      <div key={currentData.title}>
                        <CalculatorField
                          text={currentData.title}
                          disabled={values.questionsArr[stepInd].tieUpDisabled}
                        />
                        {typeof currentData.options !== "string" && (
                          <CalculatorInputField
                            type={currentData.type}
                            subStep={currentData.subSteps}
                            stepInd={stepInd}
                            options={currentData.options}
                            disabled={
                              values.questionsArr[stepInd].tieUpDisabled
                            }
                            data={stepsData}
                          />
                        )}
                      </div>
                    ))}
                  </CalculatorStepsComponent>
                )}
              </Formik>
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
