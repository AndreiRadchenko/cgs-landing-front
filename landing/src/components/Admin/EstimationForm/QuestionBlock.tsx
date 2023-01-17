import React, { useState } from "react";
import AdminDropDown from "../Global/AdminDropDown";
import * as Styled from "../../../styles/EstimationForm.styled";
import { letterCaseSubmenu } from "../Calculator/letterCaseSubmenuPlugin";
import { inputSubmenu } from "../Calculator/inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import AdminBlackButton from "../Global/AdminBlackButton";
import {
  IEstimationFormQuestion,
  IQuestionBlockProps,
} from "../../../types/Admin/AdminEstimationForm.types";
import dynamic from "next/dynamic";
import AddOptionInput from "./AddOptionInput";
import AdditinalAttributesBlock from "./AdditinalAttributesBlock";
import { AdminDeleteText } from "../../../styles/AdminPage";

const QuestionBlock = ({ question, name }: IQuestionBlockProps) => {
  const {
    questionNumber,
    title,
    options,
    optionsType,
    isAbilityToAttachFile,
    hiddenText,
    conditionsForAppearance,
  } = question;
  const EstimationFormInput = dynamic(
    () =>
      import("../../../components/Admin/EstimationForm/EstimationFormInput"),
    {
      ssr: false,
    }
  );
  const [optionValue, setOptionValue] = useState(optionsType);

  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  const titleEditorOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: { letterCaseSubmenu, inputSubmenu, ...plugins },
    buttonList: [["fontColor", "fontSize"], ["letterCase"]],
  };

  const optionEditorOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: { inputSubmenu, ...plugins },
    buttonList: [["fontColor", "fontSize"]],
  };

  return (
    <>
      <Styled.QuestionBlockHeader>
        Question {questionNumber}
      </Styled.QuestionBlockHeader>
      <Styled.QuestionBlock>
        <EstimationFormInput
          header="Title"
          name={name}
          props={{
            width: "559px",
            setOptions: titleEditorOptions,
          }}
        />
        <Styled.EstimationFormDropDownWrapper>
          <AdminDropDown
            size="primary"
            optionsMenu={[
              { optionType: "RADIO_BUTTON", optionText: "Radio button" },
              { optionType: "CHECKBOX", optionText: "List" },
              { optionType: "TEXT", optionText: "< Text >" },
            ]}
            value={optionValue || "select an option"}
            setValue={setOptionValue}
          />
          <label htmlFor="split">
            <input name="split" type="checkbox" />
            split columns
          </label>
        </Styled.EstimationFormDropDownWrapper>
        {options
          ? options.map((option) => (
              <div key={option.text} style={{ display: "flex" }}>
                <EstimationFormInput
                  name={option.text}
                  props={{
                    width: "500px",
                    defaultValue: option.text,
                    setOptions: optionEditorOptions,
                  }}
                />
                <AdminDeleteText>delete</AdminDeleteText>
              </div>
            ))
          : null}

        {optionValue !== "TEXT" && <AddOptionInput type={optionValue} />}
        <AdditinalAttributesBlock
          attachFileAbility={isAbilityToAttachFile}
          hiddenText={hiddenText}
          conditionsForAppearance={conditionsForAppearance}
        />
        <AdminBlackButton text="Save question" size="estimationForm" />
        <AdminDeleteText>Delete question</AdminDeleteText>
      </Styled.QuestionBlock>
    </>
  );
};

export default QuestionBlock;
