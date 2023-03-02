import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { queryKeys } from "../../consts/queryKeys";
import { adminCalculatorService } from "../../services/adminCalculator";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
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
  ICalculatorStep,
} from "../../types/Admin/Response.types";
import { Formik, FormikHelpers } from "formik";
import { CalculatorValidation } from "../../validations/CalculatorValidation";
import { getResults } from "../../utils/getCalculatorResults";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";

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

  // console.log("Classic loading: ", classicLoading);
  // console.log("Blockchain loading: ", blockchainLoading);

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

  const handlePagerRightButtonClick = () => {
    setStartLoading(true);
  };
  const handlePagerLeftButtonClick = () => {
    setStartLoading(false);
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

  const countData = (
    obj: { [key: string]: number },
    role: string,
    coef: number
  ) => (obj[role] ? (obj[role] += coef || 0) : (obj[role] = coef || 0));

  const onSubmit = (
    values: ICalculatorFormValuesProps,
    { resetForm }: FormikHelpers<ICalculatorFormValuesProps>
  ) => {
    const { questionsArr, isBlockchain, email } = values;

    const getRolesCoefObject = (
      matchData: Array<IStepOptions | Array<IStepOptions> | undefined>,
      resultObj: { [key: string]: number }
    ) => {
      matchData.map((dataEl) => {
        if (dataEl) {
          return Array.isArray(dataEl)
            ? dataEl.forEach(
                (matchDataEl) =>
                  matchDataEl.endRole &&
                  matchDataEl.endRole.role &&
                  matchDataEl.endRole.coef &&
                  countData(
                    resultObj,
                    matchDataEl.endRole.role,
                    matchDataEl.endRole.coef
                  )
              )
            : dataEl.endRole &&
                dataEl.endRole.role &&
                dataEl.endRole.coef &&
                countData(resultObj, dataEl.endRole.role, dataEl.endRole.coef);
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
          return Array.isArray(dataEl)
            ? dataEl.forEach(
                (matchDataEl) =>
                  matchDataEl.roles &&
                  matchDataEl.hours &&
                  countData(
                    resultObj,
                    matchDataEl.roles.sort().join(", "),
                    matchDataEl.hours
                  )
              )
            : dataEl.hours &&
                dataEl.roles &&
                countData(
                  resultObj,
                  dataEl.roles.sort().join(", "),
                  dataEl.hours
                );
        }
      });
      return resultObj;
    };

    const testName = (
      definedStepData: void | ICalculatorStep[] | undefined
    ) => {
      if (!definedStepData) return;

      const matchData: Array<IStepOptions | Array<IStepOptions> | undefined> =
        questionsArr.map((question, idx) =>
          typeof question.answer === "string"
            ? definedStepData[idx].options.find(
                (option) => question.answer === option.label
              )
            : definedStepData[idx].options.filter((option) =>
                (question.answer as string[]).includes(option.label)
              )
        );

      console.log("Match data: ", matchData);

      const matchSubStepData: Array<
        IStepOptions | Array<IStepOptions> | undefined
      > = questionsArr.map((question, idx) => {
        if (
          definedStepData[idx].subSteps &&
          definedStepData[idx].subSteps.length > 0
        ) {
          return typeof question.subStepAnswer === "string"
            ? definedStepData[idx].subSteps[0].options.find(
                (option) => question.subStepAnswer === option.label
              )
            : definedStepData[idx].subSteps[0].options.filter((option) =>
                (question.subStepAnswer as string[]).includes(option.label)
              );
        }
      });

      const resultObj: IRoles = {};
      getRolesHoursObject(matchData, resultObj);
      console.log("Step 1 resultObj", resultObj);
      getRolesHoursObject(matchSubStepData, resultObj);
      console.log("Step 2 resultObj", resultObj);

      const resultObjRolesCoef: IRoles = {};
      getRolesCoefObject(matchData, resultObjRolesCoef);
      console.log("Step 1 resultObjRolesCoef", resultObjRolesCoef);
      getRolesCoefObject(matchSubStepData, resultObjRolesCoef);
      console.log("Step 2 resultObjRolesCoef", resultObjRolesCoef);

      Object.entries(resultObjRolesCoef).map(
        (roleCoefArr) => (resultObj[roleCoefArr[0]] *= 1 + roleCoefArr[1])
      );

      console.log("Resul Object: ", resultObj);

      const endCoef =
        1 + getResults(definedStepData, values.questionsArr, "endCoef");
      Object.entries(resultObj).forEach(
        (el) => (resultObj[el[0]] = el[1] * endCoef)
      );

      const getPriceInConnectedRole = (roles: string[], hours: number) => {
        if (data) {
          const resultPrices = data.roles
            .map((dataRole) => {
              if (roles.includes(dataRole.name)) {
                return dataRole.rate;
              }
            })
            .filter((el) => el);

          console.log("Result prices: ", resultPrices);

          return (
            ((resultPrices as number[]).reduce(
              (a, b) => (a || 0) + (b || 0),
              0
            ) /
              resultPrices.length) *
            hours
          );
        }
      };

      const price =
        data &&
        Object.keys(resultObj)
          .map((role) =>
            role.split(", ").length === 1
              ? Math.round(
                  (resultObj[role] || 0) *
                    (data?.roles.find((dataRole) => dataRole.name === role)
                      ?.rate || 0)
                )
              : getPriceInConnectedRole(role.split(", "), resultObj[role])
          )
          .reduce((acc, curr) => (acc ?? 0) + (curr ?? 0), 0);

      console.log("Price is here: ", price);
      console.log("Result Object is here: ", resultObj);

      const hours = getResults(definedStepData, values.questionsArr, "hours");
      const uxui = getResults(definedStepData, values.questionsArr, "uxui");

      if (
        typeof hours === "number" &&
        typeof uxui === "number" &&
        typeof price === "number"
      ) {
        const emailData: ICalculatorPostEmailResultsProps = {
          answers: questionsArr,
          isBlockchain,
          estimation: { uxui, hours, price },
          email,
        };
        // mutate(emailData);
        const leadEmailData: ILeadMailData = {
          uxui,
          hours,
          price,
        };
        // mutateLeadEmail({ answers: leadEmailData, email });
        // resetForm();
      }
    };

    testName(stepsData);
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
                validateOnBlur
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
                    isBlockchain={isBlockchain}
                  >
                    {stepsData.map((currentData, stepInd) => (
                      <div key={currentData.title}>
                        <CalculatorField
                          text={currentData.title}
                          disabled={values.questionsArr[stepInd].tieUpDisabled}
                          className="title"
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
              handlePagerRightButtonClick={handlePagerRightButtonClick}
              handlePagerLeftButtonClick={handlePagerLeftButtonClick}
              buttonText={buttonText}
              startLoading={startLoading}
              classicLoading={true}
              blockchainLoading={true}
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
