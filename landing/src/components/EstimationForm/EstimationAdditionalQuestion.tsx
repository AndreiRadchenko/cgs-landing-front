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
