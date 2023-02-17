import { IQuestionOptionElementProps } from "../../../types/Admin/AdminEstimationForm.types";
import { AdminDeleteText, Box, TextWrapper } from "../../../styles/AdminPage";
import { ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { letterCaseSubmenu } from "../Calculator/letterCaseSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import dynamic from "next/dynamic";
import * as StyledCalc from "../../../styles/Calculator/CalculatorAdmin.styled";
import { letterWeightSubmenu } from "../Calculator/letterWeightSubmenuPlugin";
const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const OptionElement = ({
  option,
  i,
  remove,
  optionsLength,
  optionsType,
}: IQuestionOptionElementProps) => {
  const removeItemHandle = () => {
    if (optionsLength) {
      remove && remove(i);
    }
  };

  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  const textEditorOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: { letterCaseSubmenu, letterWeightSubmenu, ...plugins },
    buttonList: [
      ["fontColor", "fontSize"],
      ["letterCase"],
      ["letterWeight"],
      ["removeFormat"],
      ["codeView"],
    ],
  };
  return (
    <Box>
      <TextWrapper
        contentType={optionsType}
        className={`${
          optionsType === "RADIO_BUTTON"
            ? "radio_btn"
            : optionsType === "CHECKBOX"
            ? "checkbox_btn"
            : ""
        }`}
      >
        <StyledCalc.TransparentTextEditorWrapper>
          <TextEditor
            name={`options.${i}.text`}
            props={{
              height: "37px",
              width: "507px",
              defaultValue: option.text,
              setDefaultStyle: `position:relative; z-index:${
                optionsLength - 1 === i && optionsLength > 2
                  ? 3
                  : optionsLength - i + 3
              }`,
              setOptions: textEditorOptions,
            }}
          />
        </StyledCalc.TransparentTextEditorWrapper>
      </TextWrapper>
      <ErrorMessage name={`options.${i}.text`} />
      {remove && (
        <AdminDeleteText type="button" onClick={removeItemHandle}>
          delete
        </AdminDeleteText>
      )}
    </Box>
  );
};

export default OptionElement;
