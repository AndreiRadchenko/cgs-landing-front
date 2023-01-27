import { FieldArray } from "formik";
import React, { useState, memo, useEffect } from "react";
import { Box } from "../../../styles/AdminPage";
import { TieUpInput } from "../../../styles/Calculator/CalculatorAdmin.styled";
import { StyledConditionsForAppearanceBlock } from "../../../styles/EstimationForm.styled";
import {
  IConditionsForAppearance,
  IEstimationFormPages,
  IMenuOption,
} from "../../../types/Admin/AdminEstimationForm.types";
import {
  pagesValidation,
  questionValidation,
} from "../../../utils/conditionforAppearance";
import EstimationDropdown from "./EstimationDropdown";

interface IConditionsForAppearanceBlockProps {
  pages: IEstimationFormPages;
  conditionsForAppearance: IConditionsForAppearance | null;
  currentPage: number;
  currentQuestion: number;
  updateValues: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const ConditionsForAppearanceBlock = ({
  pages,
  conditionsForAppearance,
  currentPage,
  currentQuestion,
  updateValues,
}: IConditionsForAppearanceBlockProps) => {
  const menuPageOptions: IMenuOption[] = pagesValidation(
    currentQuestion,
    pages,
    currentPage
  );

  const [pageValue, setPageValue] = useState<IMenuOption>(
    conditionsForAppearance?.pageId
      ? menuPageOptions[conditionsForAppearance.pageIndex]
      : menuPageOptions[currentPage]
      ? menuPageOptions[currentPage]
      : menuPageOptions[currentPage - 1]
  );

  const menuQuestionOptions: IMenuOption[] | null = questionValidation(
    currentPage,
    pageValue,
    currentQuestion,
    pages
  );

  const [questionValue, setQuestionValue] = useState<IMenuOption | null>(
    conditionsForAppearance?.questionKey && menuQuestionOptions
      ? menuQuestionOptions[conditionsForAppearance.questionIndex]
      : !menuQuestionOptions
      ? null
      : menuQuestionOptions[0]
  );

  useEffect(() => {
    if (
      pageValue &&
      questionValue &&
      pageValue.index !== conditionsForAppearance?.pageIndex &&
      questionValue.index !== conditionsForAppearance?.questionIndex
    ) {
      updateValues("conditionsForAppearance.pageId", pageValue.id);
      updateValues("conditionsForAppearance.questionKey", questionValue.id);
      updateValues(
        "conditionsForAppearance.acceptedOptions",
        pages.pages[pageValue.index].questions[questionValue.index].options.map(
          (el) => {
            return {
              text: el.text.startsWith("<") ? el.text.slice(3, -4) : el.text,
              isSelected: false,
            };
          }
        )
      );
    }
  }, [pageValue?.id, questionValue?.id]);

  return (
    <>
      {pageValue && questionValue && (
        <StyledConditionsForAppearanceBlock>
          <Box>
            <EstimationDropdown
              size="primary"
              menu={menuPageOptions}
              value={pageValue || "select a page"}
              setValue={setPageValue}
            />
            <EstimationDropdown
              size="primary"
              menu={menuQuestionOptions as IMenuOption[]}
              value={questionValue || "select a question"}
              setValue={setQuestionValue}
            />
          </Box>
          <p>If an answer is selected:</p>

          <FieldArray name="conditionsForAppearance.acceptedOptions">
            {() => {
              return (
                <>
                  {conditionsForAppearance &&
                    !!conditionsForAppearance.acceptedOptions.length &&
                    conditionsForAppearance.acceptedOptions.map(
                      (acceptedOption, i) => {
                        return (
                          <Box
                            key={acceptedOption.text + i}
                            margin="0 0 10px 0"
                          >
                            <TieUpInput
                              className={"radio"}
                              type="checkbox"
                              name={`conditionsForAppearance.acceptedOptions.${i}.isSelected`}
                            />
                            {acceptedOption.text}
                          </Box>
                        );
                      }
                    )}
                </>
              );
            }}
          </FieldArray>
        </StyledConditionsForAppearanceBlock>
      )}
    </>
  );
};

export default memo(ConditionsForAppearanceBlock);
