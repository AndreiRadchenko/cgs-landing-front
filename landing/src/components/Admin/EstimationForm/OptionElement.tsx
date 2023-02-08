import { IQuestionOptionElementProps } from "../../../types/Admin/AdminEstimationForm.types";
import { AdminDeleteText, Box, TextWrapper } from "../../../styles/AdminPage";
import { ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { defaultEditorOption } from "../../../utils/variables";
import { letterCaseSubmenu } from "../Calculator/letterCaseSubmenuPlugin";
import { inputSubmenu } from "../Calculator/inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import dynamic from "next/dynamic";

const OptionElement = ({
  option,
  i,
  remove,
  optionsLength,
  optionsType,
}: IQuestionOptionElementProps) => {
  const EstimationFormInput = dynamic(
    () =>
      import("../../../components/Admin/EstimationForm/EstimationFormInput"),
    {
      ssr: false,
    }
  );

  const removeItemHandle = () => {
    if (optionsLength) {
      remove && remove(i);
    }
  };

  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => {
      return setPlugins(plugs);
    });
  }, []);

  const optionEditorOptions = {
    ...defaultEditorOption,
    plugins: { letterCaseSubmenu, inputSubmenu, ...plugins },
    addTagsWhitelist: "label|input",
    buttonList: [["fontColor", "fontSize", "letterCase"]],

    defaultTag: "p",
    defaultStyle: "position:relative; z-index:3",
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
        <EstimationFormInput
          name={`options.${i}.text`}
          props={{
            width: "500px",
            defaultValue: option.text,
            setOptions: {
              ...optionEditorOptions,
              defaultStyle: `position:relative; z-index:${
                optionsLength - 1 === i && optionsLength > 2
                  ? 3
                  : optionsLength - i + 3
              }`,
            },
          }}
        />
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
