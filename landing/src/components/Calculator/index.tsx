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
  ICalculatorPostLeadEmailResultsProps,
  ILeadMailData,
  IRoles,
  IStepOptions,
} from "../../types/Admin/Response.types";
import { Formik } from "formik";
import { CalculatorValidation } from "../../validations/CalculatorValidation";
import { getResults } from "../../utils/getCalculatorResults";

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

  const { mutate: mutateLeadEmail } = useMutation(
    [queryKeys.sendLeadEmailResults],
    (answers: ICalculatorPostLeadEmailResultsProps) =>
      adminCalculatorService.sendResultsLeadEmail(answers)
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
    const { questionsArr, isBlockchain, email } = values;
    const emailData: ICalculatorPostEmailResultsProps = {
      answers: questionsArr,
      isBlockchain,
      email,
    };
    // mutate(emailData);

    const getRolesCoefObject = (
      matchData: Array<IStepOptions | Array<IStepOptions> | undefined>,
      resultObj: { [key: string]: number }
    ) => {
      matchData.map((dataEl) => {
        if (dataEl) {
          const countData = (role: string, coef: number) =>
            resultObj[role]
              ? (resultObj[role] += coef || 0)
              : (resultObj[role] = coef || 0);

          return Array.isArray(dataEl)
            ? dataEl.forEach(
                (matchDataEl) =>
                  matchDataEl.endRole &&
                  matchDataEl.endRole.role &&
                  matchDataEl.endRole.coef &&
                  countData(matchDataEl.endRole.role, matchDataEl.endRole.coef)
              )
            : dataEl.endRole &&
                dataEl.endRole.role &&
                dataEl.endRole.coef &&
                countData(dataEl.endRole.role, dataEl.endRole.coef);
        }
      });
      return resultObj;
    };

    const getRolesHoursObject = (
      matchData: Array<IStepOptions | Array<IStepOptions> | undefined>,
      resultObj: { [key: string]: number }
    ) => {
      matchData.map((dataEl) => {
        if (dataEl) {
          const countData = (role: string, hours: number) =>
            resultObj[role]
              ? (resultObj[role] += hours || 0)
              : (resultObj[role] = hours || 0);

          return Array.isArray(dataEl)
            ? dataEl.forEach(
                (matchDataEl) =>
                  matchDataEl.role &&
                  matchDataEl.hours &&
                  countData(matchDataEl.role, matchDataEl.hours)
              )
            : dataEl.hours &&
                dataEl.role &&
                countData(dataEl.role, dataEl.hours);
        }
      });
      return resultObj;
    };

    if (classicStepsData) {
      const matchData: Array<IStepOptions | Array<IStepOptions> | undefined> =
        questionsArr.map((question, idx) =>
          typeof question.answer === "string"
            ? classicStepsData[idx].options.find(
                (option) => question.answer === option.label
              )
            : classicStepsData[idx].options.filter((option) =>
                (question.answer as string[]).includes(option.label)
              )
        );

      const matchSubStepData: Array<
        IStepOptions | Array<IStepOptions> | undefined
      > = questionsArr.map((question, idx) => {
        if (
          classicStepsData[idx].subSteps &&
          classicStepsData[idx].subSteps.length > 0
        ) {
          return typeof question.subStepAnswer === "string"
            ? classicStepsData[idx].subSteps[0].options.find(
                (option) => question.subStepAnswer === option.label
              )
            : classicStepsData[idx].subSteps[0].options.filter((option) =>
                (question.subStepAnswer as string[]).includes(option.label)
              );
        }
      });

      const resultObj: IRoles = {};
      getRolesHoursObject(matchData, resultObj);
      getRolesHoursObject(matchSubStepData, resultObj);

      const resultObjRolesCoef: IRoles = {};
      getRolesCoefObject(matchData, resultObjRolesCoef);
      getRolesCoefObject(matchSubStepData, resultObjRolesCoef);

      Object.entries(resultObjRolesCoef).map(
        (roleCoefArr) => (resultObj[roleCoefArr[0]] *= 1 + roleCoefArr[1])
      );

      const endCoef =
        1 + getResults(classicStepsData, values.questionsArr, "endCoef");
      Object.entries(resultObj).forEach(
        (el) => (resultObj[el[0]] = el[1] * endCoef)
      );

      const price = data?.roles
        .map((roleData) =>
          Math.round((resultObj[roleData.name] || 0) * roleData.rate)
        )
        .reduce((acc, curr) => acc + curr);
      console.log(price);

      const hours = getResults(classicStepsData, values.questionsArr, "hours");
      const uxui = getResults(classicStepsData, values.questionsArr, "uxui");
      if (hours && uxui && price) {
        const leadEmailData: ILeadMailData = {
          uxui,
          hours,
          price,
        };
        mutateLeadEmail({ answers: leadEmailData, email });
      }
    }
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
                            tieUpData={
                              currentData.tieUpSteps.length > 0 &&
                              typeof currentData.tieUpSteps[0].number ===
                                "number"
                                ? {
                                    number: currentData.tieUpSteps[0].number,
                                    relatedAnswer:
                                      values.questionsArr[
                                        currentData.tieUpSteps[0].number
                                      ].answer,
                                  }
                                : undefined
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
