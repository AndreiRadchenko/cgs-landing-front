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
  const email = hiddenText.split("<u>")[1].toString().split("</u>")[0];
  return (
    <EstimationQuestionAdditional>
      <EstimationTooltip>
        <EstimationTooltipText>
          <a
            dangerouslySetInnerHTML={{ __html: hiddenText }}
            href={`mailto:${email}`}
          />
        </EstimationTooltipText>
      </EstimationTooltip>
    </EstimationQuestionAdditional>
  );
};

export default EstimationAdditionalQuestion;
