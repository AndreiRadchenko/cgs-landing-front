import dynamic from "next/dynamic";
import React, { memo, useEffect } from "react";
import * as Styled from "../../../styles/EstimationForm.styled";
import {
  IConditionsForAppearance,
  IEstimationFormPages,
  IEstimationFormQuestionOptions,
} from "../../../types/Admin/AdminEstimationForm.types";
import { defaultEditorOption } from "../../../utils/variables";
import ConditionsForAppearanceBlock from "./ConditionsForAppearanceBlock";
import {
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import { Box } from "../../../styles/AdminPage";

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
  const EstimationFormInput = dynamic(
    () => import("../../../components/Admin/EstimationForm/EstimationFormInput")
  );

  useEffect(() => {
    if (!isConditionsForAppearance) {
      updateValues("conditionsForAppearance", null);
    }
  }, [isConditionsForAppearance, updateValues]);

  const hiddenTextInputOptions = {
    buttonList: [["fontColor", "fontSize"]],
    defaultStyle: `position:relative; z-index:4`,
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
        <EstimationFormInput
          name="hiddenText"
          props={{
            width: "550px",
            setOptions: { ...defaultEditorOption, ...hiddenTextInputOptions },
          }}
        />
      )}
    </Styled.AdditinalAttributesBlock>
  );
};

export default memo(AdditinalAttributesBlock);
