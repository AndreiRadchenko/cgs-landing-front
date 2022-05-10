import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Feedback.styled";

const Feedback: FC = () => {
  return (
    <StyledThisComp.FeedbackContainer>
      <StyledThisComp.FeedbackSectionTitle>
        feedback
      </StyledThisComp.FeedbackSectionTitle>
      <StyledThisComp.FeedbackSectionSubTitle>
        We are proud of what our clients say about us. These words sound even
        louder than any others!
      </StyledThisComp.FeedbackSectionSubTitle>
    </StyledThisComp.FeedbackContainer>
  );
};

export default Feedback;
