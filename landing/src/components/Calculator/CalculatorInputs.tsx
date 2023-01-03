import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import {
  OptionWrapper,
  TieUpInput,
  TieUpLabel,
} from "../../styles/Calculator/CalculatorAdmin.styled";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import {
  ICalculatorFormValuesProps,
  ICalculatorStep,
  ICalculatorSubStep,
} from "../../types/Admin/Response.types";

interface ICalculatorFieldProps {
  stepInd: number;
  options: {
    type: string;
    label: string;
  }[];
  subStep?: ICalculatorSubStep[];
  disabled?: boolean;
  tieUpData?: { number: number | null; relatedAnswer: string | string[] };
  data: ICalculatorStep[];
}

const CalculatorInputs = ({
  options,
  stepInd,
  subStep,
  disabled,
  data,
  tieUpData,
}: ICalculatorFieldProps) => {
  const { values, handleChange } =
    useFormikContext<ICalculatorFormValuesProps>();

  useEffect(() => {
    if (
      !(
        subStep &&
        subStep.length > 0 &&
        subStep[0].condition.includes(
          values.questionsArr[stepInd].answer as string
        )
      )
    ) {
      values.questionsArr[stepInd].subStepAnswer = "";
    }
  }, [subStep, stepInd, values]);

  useEffect(() => {
    const disabledArr = data.map(
      (el) =>
        el.tieUpSteps &&
        el.tieUpSteps.length > 0 &&
        typeof el.tieUpSteps[0].number === "number" &&
        !el.tieUpSteps[0].condition.includes(
          values.questionsArr[el.tieUpSteps[0].number].answer as string
        )
    );
    disabledArr.map(
      (item, idx) => (values.questionsArr[idx].tieUpDisabled = item)
    );
  }, [data, values]);

  const answer = () => {
    if (
      disabled &&
      tieUpData &&
      typeof tieUpData.number === "number" &&
      tieUpData.relatedAnswer.length > 0
    ) {
      return typeof tieUpData.relatedAnswer === "string" ? (
        <>
          {"You’ve chosen "}
          <span
            dangerouslySetInnerHTML={{
              __html: tieUpData.relatedAnswer.substring(
                0,
                tieUpData.relatedAnswer.indexOf("<")
              ),
            }}
          />
        </>
      ) : (
        <>
          {"You’ve chosen "}
          <span
            dangerouslySetInnerHTML={{
              __html: tieUpData.relatedAnswer
                .map((el) => el.substring(0, el.indexOf("<")))
                .join(", "),
            }}
          />
        </>
      );
    } else {
      return "You haven't chosen any option";
    }
  };

  return (
    <Styled.CalculatorFieldWrapper className="input">
      <Styled.LeftBlackBorder className="input" />
      <Styled.CalculatorInputFields>
        <>
          {(disabled && tieUpData && typeof tieUpData.number === "number" && (
            <Styled.Disabled className={disabled ? "disabled" : undefined}>
              <div>
                {answer()} in <span>{tieUpData.number + 1}</span> question, so
                this one is disabled.
              </div>
            </Styled.Disabled>
          )) ||
            null}
          <Styled.CalculatorInputsFieldsWrapper className="input">
            <Styled.InputsWrapper>
              {options.map((input, idx) => (
                <OptionWrapper key={idx}>
                  <TieUpInput
                    type={input.type}
                    name={`questionsArr[${stepInd}].answer`}
                    id={`${input.type}${input.label}${idx}`}
                    value={input.label}
                    className={input.type}
                    onChange={handleChange}
                  />
                  <TieUpLabel
                    dangerouslySetInnerHTML={{ __html: input.label }}
                    htmlFor={`${input.type}${input.label}${idx}`}
                  />
                </OptionWrapper>
              ))}
              {subStep &&
                subStep.length > 0 &&
                subStep[0].condition.includes(
                  values.questionsArr[stepInd].answer as string
                ) && (
                  <Styled.SubStepWrapper>
                    <Styled.HorizontalLine />
                    {subStep[0].title.replace("<p><br></p>", "") !== "" && (
                      <Styled.SubStepTitle
                        dangerouslySetInnerHTML={{ __html: subStep[0].title }}
                      />
                    )}
                    {subStep[0].options.map((subInput, idx) => (
                      <OptionWrapper key={idx}>
                        <TieUpInput
                          type={subInput.type}
                          name={`questionsArr[${stepInd}].subStepAnswer`}
                          id={`${subInput.type}${subInput.label}${idx}`}
                          value={subInput.label}
                          className={subInput.type}
                          onChange={handleChange}
                        />
                        <TieUpLabel
                          dangerouslySetInnerHTML={{ __html: subInput.label }}
                          htmlFor={`${subInput.type}${subInput.label}${idx}`}
                        />
                      </OptionWrapper>
                    ))}
                  </Styled.SubStepWrapper>
                )}
            </Styled.InputsWrapper>
          </Styled.CalculatorInputsFieldsWrapper>
        </>
      </Styled.CalculatorInputFields>
    </Styled.CalculatorFieldWrapper>
  );
};

export default CalculatorInputs;
