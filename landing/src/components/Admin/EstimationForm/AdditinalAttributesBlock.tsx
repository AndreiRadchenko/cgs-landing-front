import dynamic from "next/dynamic";
import React, { memo, useEffect, useState } from "react";
import * as Styled from "../../../styles/EstimationForm.styled";
import {
  IConditionsForAppearance,
  IEstimationFormPages,
  IEstimationFormQuestionOptions,
} from "../../../types/Admin/AdminEstimationForm.types";
import ConditionsForAppearanceBlock from "./ConditionsForAppearanceBlock";
import {
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import { Box } from "../../../styles/AdminPage";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { letterCaseSubmenu } from "../Calculator/letterCaseSubmenuPlugin";
import { letterWeightSubmenu } from "../Calculator/letterWeightSubmenuPlugin";
import * as StyledCalc from "../../../styles/Calculator/CalculatorAdmin.styled";
const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

interface IAdditionalAttributesBlockProps {
  isConditionsForAppearance: boolean;
  isHiddenText: boolean;
  optionsLength: number;
  pages: IEstimationFormPages;
  conditionsForAppearance: IConditionsForAppearance | null;
  updateValues: (
    field: string,
    value:
      | IConditionsForAppearance
      | null
      | string
      | IEstimationFormQuestionOptions[],
    shouldValidate?: boolean
  ) => void;
  currentPage: number;
  currentQuestion: number;
}

const AdditinalAttributesBlock = ({
  isConditionsForAppearance,
  isHiddenText,
  pages,
  conditionsForAppearance,
  updateValues,
  currentQuestion,
  currentPage,
  ...indexes
}: IAdditionalAttributesBlockProps) => {
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  const hiddenEditorOptions = {
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

  const conditionForAppearanceMessage = (
    conditionsForAppearance: IConditionsForAppearance | null
  ) => {
    if (
      conditionsForAppearance &&
      (conditionsForAppearance.questionIndex == -1 ||
        conditionsForAppearance.pageIndex == -1)
    ) {
      return (
        <h3>
          Question or page required for this conditions for appearance was
          DELETED. Please, choose new parameters for this question if you still
          need to show this one!
        </h3>
      );
    }
    if (
      conditionsForAppearance &&
      (conditionsForAppearance.questionIndex == 100 ||
        conditionsForAppearance.pageIndex == 100)
    ) {
      return (
        <h3>
          Please, choose parameters for this question if you need to show this
          one!
        </h3>
      );
    }
  };

  return (
    <Styled.AdditinalAttributesBlock>
      <Box margin="0 0 5px 0" align="start">
        <TieUpInput
          type="checkbox"
          className={"admin-checkbox"}
          name={`isConditionsForAppearance`}
          id={`isConditionsForAppearance${currentQuestion}${currentPage}`}
        />
        <TieUpLabel
          dangerouslySetInnerHTML={{
            __html: "add conditions for appearance",
          }}
          htmlFor={`isConditionsForAppearance${currentQuestion}${currentPage}`}
          style={{ marginLeft: "6px" }}
        />
      </Box>
      {conditionForAppearanceMessage(conditionsForAppearance)}
      {isConditionsForAppearance && (
        <ConditionsForAppearanceBlock
          pages={pages}
          conditionsForAppearance={conditionsForAppearance}
          updateValues={updateValues}
          currentQuestion={currentQuestion}
          currentPage={currentPage}
          {...indexes}
        />
      )}

      <Box margin="0 0 5px 0" align="start">
        <TieUpInput
          type="checkbox"
          className={"admin-checkbox"}
          name={`isAbilityToAttachFile`}
          id={`isAbilityToAttachFileId${currentQuestion}${currentPage}`}
        />
        <TieUpLabel
          dangerouslySetInnerHTML={{
            __html: "add the ability to attach files",
          }}
          htmlFor={`isAbilityToAttachFileId${currentQuestion}${currentPage}`}
          style={{ marginLeft: "6px" }}
        />
      </Box>

      <Box margin="0 0 5px 0" align="start">
        <TieUpInput
          type="checkbox"
          className={"admin-checkbox"}
          name={`isHiddenText`}
          id={`isHiddenTextId${currentQuestion}${currentPage}`}
        />
        <TieUpLabel
          dangerouslySetInnerHTML={{
            __html: "add hidden text",
          }}
          htmlFor={`isHiddenTextId${currentQuestion}${currentPage}`}
          style={{ marginLeft: "6px" }}
        />
      </Box>

      {isHiddenText && (
        <StyledCalc.TransparentTextEditorWrapper>
          <TextEditor
            name={`hiddenText`}
            props={{
              height: "57px",
              width: "875px",
              setDefaultStyle: "position:relative; z-index:3",
              setOptions: hiddenEditorOptions,
            }}
          />
        </StyledCalc.TransparentTextEditorWrapper>
      )}
    </Styled.AdditinalAttributesBlock>
  );
};

export default memo(AdditinalAttributesBlock);
