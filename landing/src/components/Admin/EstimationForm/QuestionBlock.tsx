import React, { useEffect, useState, memo } from "react";
import * as Styled from "../../../styles/EstimationForm.styled";
import { letterCaseSubmenu } from "../Calculator/letterCaseSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { inputSubmenu } from "../Calculator/inputSubmenuPlugin";

import AdminBlackButton from "../Global/AdminBlackButton";
import {
  IEstimationFormQuestion,
  IQuestionBlockProps,
} from "../../../types/Admin/AdminEstimationForm.types";
import dynamic from "next/dynamic";
import AddOptionInput from "./AddOptionInput";
import {
  AdminDeleteText,
  Box,
  StyledLine,
  TextWrapper,
} from "../../../styles/AdminPage";
import { FieldArray, Formik, ErrorMessage } from "formik";
import EstimationDropdown from "./EstimationOptionsDropdown";
import AdditinalAttributesBlock from "./AdditinalAttributesBlock";
import { defaultEditorOption } from "../../../utils/variables";
import SplitColumns from "./SplitColumns";

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

  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  const optionEditorOptions = {
    ...defaultEditorOption,
    plugins: { letterCaseSubmenu, inputSubmenu, ...plugins },
    addTagsWhitelist: "label|input",
    buttonList: [["fontColor", "fontSize", "letterCase"]],

    defaultTag: "p",
    defaultStyle: "position:relative; z-index:2",
  };

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => {
      return setPlugins(plugs);
    });
  }, []);

  const onDeleteQuestion = () => {
    onRemoveHandler(index ? index - 1 : 0);
  };
  const onSubmitHandler = (values: IEstimationFormQuestion) => {
    saveQuestion(values, index ? index - 1 : 0);
  };

  return (
    <>
      <Styled.QuestionBlockHeader>Question {index}</Styled.QuestionBlockHeader>
      <Formik
        initialValues={{
          ...question,
          title: name,
          conditionsForAppearance: pages.pages[currentPage].questions[index - 1]
            .conditionsForAppearance ?? {
            pageId: "",
            questionKey: "",
            pageIndex: 100,
            questionIndex: 100,
            acceptedOptions: [],
          },
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
                  setOptions: defaultEditorOption,
                }}
              />
              {props.errors.title && props.touched.title ? (
                <div>{props.errors.title}</div>
              ) : null}

              <Styled.EstimationFormDropDownWrapper>
                <EstimationDropdown />
                <SplitColumns />
              </Styled.EstimationFormDropDownWrapper>

              <FieldArray name="options">
                {({ push, remove }) => {
                  return (
                    <>
                      {props.values.options
                        ? props.values.options.map((option, i) => {
                            const removeItemHandle = () => {
                              if (props.values.options.length > 1) {
                                remove(i);
                              }
                            };
                            return (
                              <Box key={option.text + i}>
                                <TextWrapper
                                  contentType={props.values.optionsType}
                                  className={`${
                                    props.values.optionsType === "RADIO_BUTTON"
                                      ? "radio_btn"
                                      : props.values.optionsType === "CHECKBOX"
                                      ? "checkbox_btn"
                                      : ""
                                  }`}
                                >
                                  <EstimationFormInput
                                    name={`options.${i}.text`}
                                    props={{
                                      width: "500px",
                                      defaultValue: option.text,
                                      setOptions: {
                                        ...optionEditorOptions,
                                        defaultStyle: `position:relative; z-index:${
                                          props.values.options.length - 1 ===
                                            i && props.values.options.length > 2
                                            ? 120
                                            : props.values.options.length - i
                                        }`,
                                      },
                                    }}
                                  />
                                </TextWrapper>
                                <ErrorMessage name={`options.${i}.text`} />
                                <AdminDeleteText
                                  type="button"
                                  onClick={removeItemHandle}
                                >
                                  delete
                                </AdminDeleteText>
                              </Box>
                            );
                          })
                        : null}
                      {props.values.optionsType !== "TEXT" && (
                        <AddOptionInput
                          type={props.values.optionsType}
                          onClickHandler={() => {
                            push({ text: "" });
                          }}
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
                currentQuestion={index - 1}
                updateValues={props.setFieldValue}
              />
              <Box justify="space-between" align="center">
                <AdminBlackButton
                  type="submit"
                  text="Save question"
                  size="estimationForm"
                />
                <AdminDeleteText type="button" onClick={onDeleteQuestion}>
                  Delete question
                </AdminDeleteText>
              </Box>
            </Styled.QuestionBlock>
          </form>
        )}
      </Formik>
    </>
  );
};

export default memo(QuestionBlock);
