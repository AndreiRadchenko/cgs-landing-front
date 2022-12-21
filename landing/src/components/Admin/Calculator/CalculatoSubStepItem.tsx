import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { getInputsFromLabels } from "../../../utils/calculatorGetInputFromLabel";
import CalculatorInputItem from "./CalculatorInputItem";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { inputSubmenu } from "./inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { formalizeData } from "../../../utils/formalizeCalculatorData";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

const CalculatorSubStepItem = () => {
  const { values } = useFormikContext<ICalculatorStep>();
  const [options, setOptions] = useState<{ type: string; label: string }[]>();
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  useEffect(() => {
    if (values.options && typeof values.options !== "string") {
      setOptions(values.options);
    } else {
      setOptions(getInputsFromLabels(values.options));
    }
  }, [values.options]);

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

  const textEditorOptions = plugins && {
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
    defaultStyle: "position:relative; z-index:1",
  };

  return (
    (plugins && (
      <Styled.SubStepContentContainer>
        <Styled.StepSubTitle>Sub-question</Styled.StepSubTitle>
        <Styled.SubStepSubtitle>
          If an answer is selected:
        </Styled.SubStepSubtitle>
        <Styled.InputsWrapper>
          {options &&
            values.subSteps.length > 0 &&
            options.map((el, ind) => {
              return <CalculatorInputItem ind={ind} item={el} key={ind} />;
            })}
        </Styled.InputsWrapper>
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
              <TextEditor
                name={`subSteps[0].options`}
                header="Text"
                props={{
                  width: "559px",
                  defaultValue:
                    typeof values.subSteps[0].options !== "string"
                      ? formalizeData(
                          values.subSteps[0].options as {
                            type: string;
                            label: string;
                          }[]
                        )
                      : (values.subSteps[0].options as string),
                  setOptions: textEditorOptions,
                }}
              />
            </Styled.TransparentTextEditorWrapper>
          </>
        )}
      </Styled.SubStepContentContainer>
    )) ||
    null
  );
};

export default CalculatorSubStepItem;
