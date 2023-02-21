import React from "react";
import {
  EstimationQuestionAdditional,
  EstimationTooltip,
  EstimationTooltipText,
} from "../../styles/EstimationForm.styled";

const EstimationAdditionalQuestion = ({
  hiddenText,
}: {
  hiddenText: string;
}) => {
  const email = hiddenText.split("<u>").toString();
  console.log(hiddenText);
  return (
    <EstimationQuestionAdditional>
      <EstimationTooltip>
        <EstimationTooltipText
          dangerouslySetInnerHTML={{ __html: hiddenText }}
        />
      </EstimationTooltip>
    </EstimationQuestionAdditional>
  );
};

export default EstimationAdditionalQuestion;
