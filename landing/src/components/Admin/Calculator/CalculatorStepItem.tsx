import React, { useEffect, useState } from "react";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

import { ICalculatorStep } from "../../../types/Admin/Response.types";
import dynamic from "next/dynamic";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { inputSubmenu } from "./inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import SaveBtn from "../Global/SaveBtn";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import CalculatorTieUpItem from "./CalculatorTieUpItem";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

interface ICalculatorStepItemProps {
  step: ICalculatorStep;
  index: number;
  refetch: () => void;
}

const CalculatorStepItem = ({
  step,
  index,
  refetch,
}: ICalculatorStepItemProps) => {
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
  };

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorSteps],
    (data: ICalculatorStep) =>
      adminCalculatorService.updateCalculatorStepById(data)
  );

  const handleSubmit = async (values: ICalculatorStep) => {
    const converted = values;
    if (typeof converted.options === "string") {
      converted.options = getInputsFromLabels(converted.options);
    }

    document.body.style.cursor = "wait";
    await mutateAsync(converted);
    await refetch();
    document.body.style.cursor = "auto";
  };

  const getInputsFromLabels = (options: string) => {
    const isRadio = options.includes("__se__t-radio-input");

    const separators = [
      isRadio
        ? '<label class="__se__t-radio-input">'
        : '<label class="__se__t-checkbox-input">',
      isRadio
        ? "<label class=__se__t-radio-input>"
        : "<label class=__se__t-checkbox-input>",
      "</label>",
    ];

    return options
      .split(new RegExp(separators.join("|"), "g"))
      .filter((el) => !el.includes("p>"))
      .map((label) => {
        return {
          type: isRadio ? "radio" : "checkbox",
          label,
        };
      });
  };

  const formalizeData = (
    oldData: {
      type: string;
      label: string;
    }[]
  ) => {
    return oldData
      .map(
        (option) =>
          `<p><label class=${
            option.type === "radio"
              ? "__se__t-radio-input"
              : "__se__t-checkbox-input"
          }>${option.label}</label></p>`
      )
      .join("");
  };

  return (
    <Formik initialValues={step} onSubmit={handleSubmit}>
      {({ handleSubmit, values }) => {
        return (
          <AdminBlockDropDown title={`STEP ${index + 1}`}>
            <Styled.TransparentTextEditorWrapper>
              <TextEditor
                name={`title`}
                props={{
                  width: "559px",
                  height: "88px",
                  setOptions: titleEditorOptions,
                }}
              />
            </Styled.TransparentTextEditorWrapper>
            <Styled.TextEditorContainer>
              <Styled.TransparentTextEditorWrapper className="text">
                <TextEditor
                  name="options"
                  header="Text"
                  props={{
                    width: "559px",
                    height: "88px",
                    defaultValue:
                      typeof step.options !== "string"
                        ? formalizeData(step.options)
                        : step.options,
                    setOptions: textEditorOptions,
                  }}
                />
              </Styled.TransparentTextEditorWrapper>
              <Styled.TieUpContainer>
                <Styled.AddTieUpButton>+</Styled.AddTieUpButton>
                <Styled.MinusTieUpButton>-</Styled.MinusTieUpButton>
                <Styled.TieUpText>Tie up question</Styled.TieUpText>
              </Styled.TieUpContainer>
            </Styled.TextEditorContainer>
            {values.tieUpSteps && <CalculatorTieUpItem />}
            <SaveBtn
              handleClick={handleSubmit}
              style={{ marginBlock: "37px 50px" }}
            />
          </AdminBlockDropDown>
        );
      }}
    </Formik>
  );
};

export default CalculatorStepItem;
