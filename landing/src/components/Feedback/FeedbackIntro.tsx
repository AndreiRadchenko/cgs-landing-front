import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Feedback.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

interface IFeedbackProps {
  title?: string;
  subtitle?: string;
}

const FeedbackIntro: FC<IFeedbackProps> = ({ title, subtitle }) => {
  return (
    <StyledThisComp.FeedbackContainer>
      <StyledThisComp.FeedbackSectionTitle>
        <SplitBrackets text={title} />
      </StyledThisComp.FeedbackSectionTitle>
      <StyledThisComp.FeedbackSectionSubTitle>
        <SplitBrackets text={subtitle} />
      </StyledThisComp.FeedbackSectionSubTitle>
    </StyledThisComp.FeedbackContainer>
  );
};

export default FeedbackIntro;
