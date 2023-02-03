import dynamic from "next/dynamic";
import React, { memo, useEffect } from "react";
import * as Styled from "../../../styles/EstimationForm.styled";
import {
  IConditionsForAppearance,
  IEstimationFormPages,
} from "../../../types/Admin/AdminEstimationForm.types";
import { defaultEditorOption } from "../../../utils/variables";
import ConditionsForAppearanceBlock from "./ConditionsForAppearanceBlock";

interface IAdditionalAttributesBlockProps {
  isConditionsForAppearance: boolean;
  isHiddenText: boolean;
  optionsLength: number;
  pages: IEstimationFormPages;
  conditionsForAppearance: IConditionsForAppearance | null;
  updateValues: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
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
      <Styled.AdditinalAttributesWrapper>
        <Styled.AdditinalAttributesLabel>
          <Styled.AdditinalAttributesInput
            type="checkbox"
            name="isConditionsForAppearance"
          />
          <span>add conditions for appearance</span>
        </Styled.AdditinalAttributesLabel>
        {conditionForAppearanceMessage(conditionsForAppearance)}
        {isConditionsForAppearance && (
          <ConditionsForAppearanceBlock
            pages={pages}
            conditionsForAppearance={conditionsForAppearance}
            updateValues={updateValues}
            {...indexes}
          />
        )}
      </Styled.AdditinalAttributesWrapper>
      <Styled.AdditinalAttributesWrapper>
        <Styled.AdditinalAttributesLabel>
          <Styled.AdditinalAttributesInput
            name="isAbilityToAttachFile"
            type="checkbox"
          />
          <span>add the ability to attach files</span>
        </Styled.AdditinalAttributesLabel>
      </Styled.AdditinalAttributesWrapper>

      <Styled.AdditinalAttributesWrapper>
        <Styled.AdditinalAttributesLabel>
          <Styled.AdditinalAttributesInput
            type="checkbox"
            name="isHiddenText"
          />
          <span>add hidden text</span>
        </Styled.AdditinalAttributesLabel>
        {isHiddenText && (
          <EstimationFormInput
            name="hiddenText"
            props={{
              width: "550px",
              setOptions: { ...defaultEditorOption, ...hiddenTextInputOptions },
            }}
          />
        )}
      </Styled.AdditinalAttributesWrapper>
    </Styled.AdditinalAttributesBlock>
  );
};

export default memo(AdditinalAttributesBlock);
