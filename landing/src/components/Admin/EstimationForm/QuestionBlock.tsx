import React, { memo } from "react";
import * as Styled from "../../../styles/EstimationForm.styled";

import AdminBlackButton from "../Global/AdminBlackButton";
import {
  IEstimationFormQuestion,
  IQuestionBlockProps,
} from "../../../types/Admin/AdminEstimationForm.types";
import dynamic from "next/dynamic";
import AddOptionInput from "./AddOptionInput";
import { AdminDeleteText, Box, StyledLine } from "../../../styles/AdminPage";
import { FieldArray, Formik } from "formik";
import EstimationDropdown from "./EstimationOptionsDropdown";
import AdditinalAttributesBlock from "./AdditinalAttributesBlock";
import { defaultEditorOption } from "../../../utils/variables";
import SplitColumns from "./SplitColumns";
import OptionElement from "./OptionElement";
import IsRequired from "./IsRequired";
import { EstimationDeleteQuestion } from "../../../styles/EstimationForm.styled";

export interface IFormikValues extends IEstimationFormQuestion {
  isConditionsForAppearance: boolean;
}

const QuestionBlock = ({
  question,
  name,
  index,
  onRemoveHandler,
  saveQuestion,
  pages,
  currentPage,
}: IQuestionBlockProps) => {
  const EstimationFormInput = dynamic(
    () =>
      import("../../../components/Admin/EstimationForm/EstimationFormInput"),
    {
      ssr: false,
    }
  );

  const onDeleteQuestion = () => {
    onRemoveHandler(index ? index : 0);
  };
  const onSubmitHandler = (values: IEstimationFormQuestion) => {
    saveQuestion(values, index ? index : 0);
  };

  return (
    <>
      <Styled.QuestionBlockHeader>
        Question {index + 1}
      </Styled.QuestionBlockHeader>
      <Formik
        initialValues={{
          ...question,
          title: name,
          conditionsForAppearance: question.conditionsForAppearance,
          isConditionsForAppearance: !!question.conditionsForAppearance,
        }}
        onSubmit={onSubmitHandler}
        validateOnChange={false}
        validationSchema={false}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Styled.QuestionBlock>
              <EstimationFormInput
                header="Title"
                name="title"
                props={{
                  width: "559px",
                  defaultValue: question.title || "",
                  setOptions: {
                    ...defaultEditorOption,
                    defaultStyle: "position:relative; z-index:50",
                  },
                }}
              />
              {props.errors.title && props.touched.title ? (
                <div>{props.errors.title}</div>
              ) : null}

              <Styled.EstimationFormDropDownWrapper>
                <EstimationDropdown />
                <SplitColumns
                  currentQuestion={
                    question.questionKey ? question.questionKey : String(index)
                  }
                  currentPage={String(currentPage) + question.questionKey}
                />
                <IsRequired
                  currentQuestion={
                    question.questionKey ? question.questionKey : String(index)
                  }
                  currentPage={String(currentPage) + question.questionKey}
                />
              </Styled.EstimationFormDropDownWrapper>

              <FieldArray name="options">
                {({ push, remove }) => {
                  return (
                    <>
                      {props.values.options &&
                      props.values.optionsType !== "TEXT"
                        ? props.values.options.map(
                            (option, i, optionsArray) => (
                              <OptionElement
                                key={option?.optionKey}
                                option={option}
                                i={i}
                                remove={remove}
                                optionsLength={optionsArray.length}
                                optionsType={props.values.optionsType}
                              />
                            )
                          )
                        : null}
                      {props.values.optionsType !== "TEXT" && (
                        <AddOptionInput
                          type={props.values.optionsType}
                          onClickHandler={() => {
                            push({ text: "" });
                          }}
                        />
                      )}
                      {props.values.optionsType === "TEXT" && (
                        <OptionElement
                          key={
                            props?.values?.options?.[0]?.optionKey ||
                            "option_key"
                          }
                          option={props?.values?.options?.[0] || { text: "" }}
                          i={0}
                          optionsLength={1}
                          optionsType={"TEXT"}
                        />
                      )}
                    </>
                  );
                }}
              </FieldArray>

              <StyledLine />

              <AdditinalAttributesBlock
                isConditionsForAppearance={
                  props.values.isConditionsForAppearance
                }
                isHiddenText={props.values.isHiddenText}
                optionsLength={props.values.options.length}
                pages={pages}
                conditionsForAppearance={props.values.conditionsForAppearance}
                currentPage={currentPage}
                currentQuestion={index}
                updateValues={props.setFieldValue}
              />
              <Box justify="space-between" align="center">
                <AdminBlackButton
                  type="submit"
                  text="Save question"
                  size="estimationForm"
                />
                <EstimationDeleteQuestion onClick={onDeleteQuestion}>
                  Delete question
                </EstimationDeleteQuestion>
              </Box>
            </Styled.QuestionBlock>
          </form>
        )}
      </Formik>
    </>
  );
};

export default memo(QuestionBlock);
