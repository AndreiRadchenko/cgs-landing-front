import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import SaveBtn from "../Global/SaveBtn";
import CalculatorTieUpItem from "./CalculatorTieUpItem";
import { formalizeData } from "../../../utils/formalizeCalculatorData";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { inputSubmenu } from "./inputSubmenuPlugin";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { useFormikContext } from "formik";
import {
  ICalculatorStep,
  ICalculatorTieUpStep,
} from "../../../types/Admin/Response.types";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";

interface ICalculatorStepItemComponentProps {
  isBlockchain: boolean;
  index: number;
  submitKey: boolean;
  data: ICalculatorStep[];
}

const CalculatorStepItemComponent = ({
  isBlockchain,
  data,
  index,
  submitKey,
}: ICalculatorStepItemComponentProps) => {
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<ICalculatorStep>();

  const { mutateAsync: addClassicTieUp } = useMutation(
    [queryKeys.addCalculatorClassicTieUpStep],
    (tieUpData: ICalculatorTieUpStep) =>
      adminCalculatorService.addClassicTieUp(tieUpData)
  );

  const { mutateAsync: addBlockchainTieUp } = useMutation(
    [queryKeys.addCalculatorBlockchainTieUpStep],
    (tieUpData: ICalculatorTieUpStep) =>
      adminCalculatorService.addBlockchainTieUp(tieUpData)
  );

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

  const handleAddTieUp = () => {
    isBlockchain
      ? addBlockchainTieUp({
          condition: [],
          step: { title: "", options: "" },
          number: null,
          _id: values._id,
        })
      : addClassicTieUp({
          condition: [],
          step: { title: "", options: "" },
          number: null,
          _id: values._id,
        });
    setFieldValue("tieUpSteps", [
      { condition: [], step: { title: "", options: "" }, number: null },
    ]);
    handleSubmit();
  };

  const handleMinusTieUp = () => {
    setFieldValue("tieUpSteps", [] as ICalculatorTieUpStep[]);
    handleSubmit();
  };

  return (
    (plugins && (
      <AdminBlockDropDown title={`STEP ${index + 1}`}>
        <Styled.TransparentTextEditorWrapper>
          <TextEditor
            name={`title`}
            props={{
              width: "559px",

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
                defaultValue:
                  typeof values.options !== "string"
                    ? formalizeData(values.options)
                    : values.options,
                setOptions: textEditorOptions,
              }}
            />
          </Styled.TransparentTextEditorWrapper>
          <Styled.TieUpContainer>
            {values.tieUpSteps.length === 0 && (
              <Styled.AddTieUpButton onClick={handleAddTieUp}>
                +
              </Styled.AddTieUpButton>
            )}
            <Styled.MinusTieUpButton onClick={handleMinusTieUp}>
              -
            </Styled.MinusTieUpButton>
            <Styled.TieUpText>Tie up question</Styled.TieUpText>
          </Styled.TieUpContainer>
        </Styled.TextEditorContainer>
        {values.tieUpSteps.length > 0 && (
          <CalculatorTieUpItem data={data} key={`step item ${submitKey}`} />
        )}
        <SaveBtn
          handleClick={handleSubmit}
          style={{ marginBlock: "37px 50px" }}
        />
      </AdminBlockDropDown>
    )) ||
    null
  );
};

export default CalculatorStepItemComponent;
