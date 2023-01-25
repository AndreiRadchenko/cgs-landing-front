import { FieldArray, useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import CalculatorInputItem from "./CalculatorInputItem";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { inputSubmenu } from "./inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import CalculatorQuestionItem from "./CalculatorQuestionItem";
import { emptyCalculatorOption } from "../../../utils/variables";
import CalculatorOptionTypeSelect from "./CalculatorOptionTypeSelect";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const CalculatorSubStepItem = () => {
  const { values } = useFormikContext<ICalculatorStep>();
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  const titleEditorOptions = plugins && {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: { letterCaseSubmenu, inputSubmenu, ...plugins },
    buttonList: [
      ["fontColor", "fontSize"],
      ["letterCase"],
      ["input"],
      ["removeFormat"],
      ["codeView"],
    ],
    defaultStyle: "position:relative; z-index:2",
  };

  return (
    (plugins && (
      <Styled.SubStepContentContainer>
        <Styled.StepSubTitle>Sub-question</Styled.StepSubTitle>
        <Styled.SubStepSubtitle>
          If an answer is selected:
        </Styled.SubStepSubtitle>
        <Styled.InputsWrapper>
          {values.subSteps &&
            values.subSteps.length > 0 &&
            values.options.map((el, ind) => (
              <CalculatorInputItem
                type={values.type}
                ind={ind}
                item={el}
                key={ind}
              />
            ))}
        </Styled.InputsWrapper>
        <CalculatorOptionTypeSelect
          type={values.subSteps[0].type}
          nameBefore="subSteps[0]."
        />
        {values.subSteps.length > 0 && (
          <>
            <Styled.TransparentTextEditorWrapper>
              <TextEditor
                name={`subSteps[0].title`}
                props={{
                  width: "559px",
                  setOptions: titleEditorOptions,
                }}
              />
            </Styled.TransparentTextEditorWrapper>
            <Styled.TransparentTextEditorWrapper className="text">
              <FieldArray name="subSteps[0].options">
                {({ insert, remove }) =>
                  values.subSteps[0].options.map((option, idx) => (
                    <CalculatorQuestionItem
                      type={values.subSteps[0].type}
                      nameBefore="subSteps[0]."
                      key={idx}
                      onAdd={() => insert(idx + 1, emptyCalculatorOption)}
                      onDelete={() => remove(idx)}
                      idx={idx}
                      option={option}
                    />
                  ))
                }
              </FieldArray>
            </Styled.TransparentTextEditorWrapper>
          </>
        )}
      </Styled.SubStepContentContainer>
    )) ||
    null
  );
};

export default CalculatorSubStepItem;
