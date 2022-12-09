import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { getInputsFromLabels } from "../../../utils/calculatorGetInputFromLabel";
import CalculatorTieUpDropdown from "./CalculatorTieUpDropdown";
import CalculatorTieUpInputItem from "./CalculatorTIeUpInputItem";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { inputSubmenu } from "./inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { formalizeData } from "../../../utils/formalizeCalculatorData";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

interface ICalculatorTieUpItempProps {
  data: ICalculatorStep[];
}

const CalculatorTieUpItem = ({ data }: ICalculatorTieUpItempProps) => {
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
    (data && plugins && (
      <Styled.TieUpContentContainer>
        <Styled.TieUpTitle>Tie up question</Styled.TieUpTitle>
        <Styled.TieUpSubtitle>If an answer is selected:</Styled.TieUpSubtitle>
        <Styled.InputsWrapper>
          {options &&
            values.tieUpSteps.length > 0 &&
            typeof values.tieUpSteps[0].number === "number" &&
            options.map((el, ind) => {
              return (
                <CalculatorTieUpInputItem ind={ind} tieUpItem={el} key={ind} />
              );
            })}
        </Styled.InputsWrapper>
        <CalculatorTieUpDropdown header="Step" data={data} />
        {values.tieUpSteps.length > 0 &&
          typeof values.tieUpSteps[0].number === "number" && (
            <>
              <Styled.TransparentTextEditorWrapper>
                <TextEditor
                  name={`tieUpSteps[0].step.title`}
                  props={{
                    width: "559px",
                    height: "88px",
                    setOptions: titleEditorOptions,
                  }}
                />
              </Styled.TransparentTextEditorWrapper>
              <Styled.TransparentTextEditorWrapper className="text">
                <TextEditor
                  name={`tieUpSteps[0].step.options`}
                  header="Text"
                  props={{
                    width: "559px",
                    defaultValue:
                      typeof data[values.tieUpSteps[0].number].options !==
                      "string"
                        ? formalizeData(
                            data[values.tieUpSteps[0].number].options as {
                              type: string;
                              label: string;
                            }[]
                          )
                        : (data[values.tieUpSteps[0].number].options as string),
                    setOptions: textEditorOptions,
                  }}
                />
              </Styled.TransparentTextEditorWrapper>
            </>
          )}
      </Styled.TieUpContentContainer>
    )) ||
    null
  );
};

export default CalculatorTieUpItem;
