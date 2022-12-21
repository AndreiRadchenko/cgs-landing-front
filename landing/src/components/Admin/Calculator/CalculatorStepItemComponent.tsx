import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import SaveBtn from "../Global/SaveBtn";
import CalculatoSubStepItem from "./CalculatoSubStepItem";
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
  ICalculatorSubStep,
  ICalculatorTieUpStep,
} from "../../../types/Admin/Response.types";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import CalculatoTieUpItem from "./CalculatorTieUpItem";

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

  const { mutateAsync: addClassicSubStep } = useMutation(
    [queryKeys.addCalculatorClassicSubStep],
    (subStepData: ICalculatorSubStep) =>
      adminCalculatorService.addClassicSubStep(subStepData)
  );

  const { mutateAsync: addBlockchainSubStep } = useMutation(
    [queryKeys.addCalculatorBlockchainSubStep],
    (subStepData: ICalculatorSubStep) =>
      adminCalculatorService.addBlockchainSubStep(subStepData)
  );

  const { mutateAsync: addClassicTieUpStep } = useMutation(
    [queryKeys.addCalculatorClassicTieUpStep],
    (tieUpData: ICalculatorTieUpStep) =>
      adminCalculatorService.addClassicTieUp(tieUpData)
  );

  const { mutateAsync: addBlockchainTieUpStep } = useMutation(
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

  const handleAddSubStep = () => {
    isBlockchain
      ? addClassicSubStep({
          title: "",
          condition: [],
          options: [],
          _id: values._id,
        })
      : addBlockchainSubStep({
          title: "",
          condition: [],
          options: [],
          _id: values._id,
        });
    setFieldValue("subSteps", [{ title: "", condition: [], options: [] }]);
    handleSubmit();
  };

  const handleMinusSubStep = () => {
    setFieldValue("subSteps", [] as ICalculatorSubStep[]);
    handleSubmit();
  };

  const handleAddTieUpStep = () => {
    isBlockchain
      ? addClassicTieUpStep({
          _id: values._id,
          number: null,
          condition: [],
        })
      : addBlockchainTieUpStep({
          _id: values._id,
          number: null,
          condition: [],
        });
    setFieldValue("tieUpSteps", [
      {
        number: null,
        condition: [],
      },
    ]);
    handleSubmit();
  };

  const handleMinusTieUp = () => {
    setFieldValue("tieUpSteps", [] as ICalculatorTieUpStep[]);
    handleSubmit();
  };

  const handleSubmitButtonClick = () => {
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
          <Styled.ButtonWrapper>
            {index !== 0 && (
              <Styled.ButtonsRowContainer>
                {values.tieUpSteps.length === 0 && (
                  <Styled.AddButton
                    type="button"
                    onClick={handleAddTieUpStep}
                    className="tieup"
                  >
                    +
                  </Styled.AddButton>
                )}
                <Styled.MinusButton type="button" onClick={handleMinusTieUp}>
                  -
                </Styled.MinusButton>
                <Styled.ButtonsText>Tie up question</Styled.ButtonsText>
              </Styled.ButtonsRowContainer>
            )}
            <Styled.ButtonsRowContainer>
              {values.subSteps.length === 0 && (
                <Styled.AddButton type="button" onClick={handleAddSubStep}>
                  +
                </Styled.AddButton>
              )}
              <Styled.MinusButton type="button" onClick={handleMinusSubStep}>
                -
              </Styled.MinusButton>
              <Styled.ButtonsText>Sub-question</Styled.ButtonsText>
            </Styled.ButtonsRowContainer>
          </Styled.ButtonWrapper>
        </Styled.TextEditorContainer>
        {values.tieUpSteps.length > 0 && (
          <CalculatoTieUpItem
            current={index}
            data={data}
            key={`step item ${submitKey}`}
          />
        )}
        {values.subSteps.length > 0 && (
          <CalculatoSubStepItem key={`sub step item ${submitKey}`} />
        )}
        <SaveBtn
          handleClick={handleSubmitButtonClick}
          style={{ marginBlock: "37px 50px" }}
        />
      </AdminBlockDropDown>
    )) ||
    null
  );
};

export default CalculatorStepItemComponent;
