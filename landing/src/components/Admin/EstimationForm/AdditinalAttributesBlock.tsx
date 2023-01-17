import React, { useState } from "react";
import dynamic from "next/dynamic";
import { IConditionsForAppearance } from "../../../types/Admin/AdminEstimationForm.types";
import * as Styled from "../../../styles/EstimationForm.styled";
import ConditionsForAppearanceBlock from "./ConditionsForAppearanceBlock";

interface IAdditionalAttributesBlockProps {
  attachFileAbility: boolean;
  hiddenText: string | null;
  conditionsForAppearance: IConditionsForAppearance | null;
}

const AdditinalAttributesBlock = ({
  attachFileAbility,
  hiddenText,
}: // conditionsForAppearance,
IAdditionalAttributesBlockProps) => {
  const [isConditionsForAppearance, setIsConditionsForAppearance] =
    useState(false);
  const [isAbilityToAttachFiles, setIsAbilityToAttachFiles] =
    useState(attachFileAbility);
  const [isHiddenText, setIsHiddenText] = useState(
    hiddenText !== null ? true : false
  );

  const hiddenTextInputOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    buttonList: [["fontColor", "fontSize"]],
  };

  const EstimationFormInput = dynamic(
    () =>
      import("../../../components/Admin/EstimationForm/EstimationFormInput"),
    {
      ssr: false,
    }
  );

  return (
    <Styled.AdditinalAttributesBlock>
      <Styled.AdditinalAttributesWrapper>
        <Styled.AdditinalAttributesLabel>
          <Styled.AdditinalAttributesInput
            type="checkbox"
            defaultChecked={isConditionsForAppearance}
            onClick={() =>
              setIsConditionsForAppearance(!isConditionsForAppearance)
            }
          />
          <span>add conditions for appearance</span>
        </Styled.AdditinalAttributesLabel>
        {isConditionsForAppearance && <ConditionsForAppearanceBlock />}
      </Styled.AdditinalAttributesWrapper>

      <Styled.AdditinalAttributesWrapper>
        <Styled.AdditinalAttributesLabel>
          <Styled.AdditinalAttributesInput
            type="checkbox"
            defaultChecked={isAbilityToAttachFiles}
            onClick={() => setIsAbilityToAttachFiles(!isAbilityToAttachFiles)}
          />
          <span>add the ability to attach files</span>
        </Styled.AdditinalAttributesLabel>
      </Styled.AdditinalAttributesWrapper>

      <Styled.AdditinalAttributesWrapper>
        <Styled.AdditinalAttributesLabel>
          <Styled.AdditinalAttributesInput
            type="checkbox"
            defaultChecked={isHiddenText}
            onClick={() => setIsHiddenText(!isHiddenText)}
          />
          <span>add hidden text</span>
        </Styled.AdditinalAttributesLabel>
        {isHiddenText && (
          <EstimationFormInput
            name={hiddenText || ""}
            props={{
              width: "550px",
              setOptions: hiddenTextInputOptions,
            }}
          />
        )}
      </Styled.AdditinalAttributesWrapper>
    </Styled.AdditinalAttributesBlock>
  );
};

export default AdditinalAttributesBlock;
