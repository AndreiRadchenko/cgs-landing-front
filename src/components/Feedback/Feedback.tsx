import React from "react";
import * as StyledThisComp from "../../styles/Feedback.styled";
import { feedbackArr } from "../../utils/variables";

import CarouselFeedback from "./CarouselFeedback";

const Feedback = () => {
  return (
    <StyledThisComp.FeedbackContainer>
      <StyledThisComp.FeedbackSectionTitle>
        feedback
      </StyledThisComp.FeedbackSectionTitle>
      <StyledThisComp.FeedbackSectionSubTitle>
        We are proud of what our clients say about us. <br /> These words sound
        even louder than any others!
      </StyledThisComp.FeedbackSectionSubTitle>

      <StyledThisComp.FeedbackRow>
        <CarouselFeedback feedback={feedbackArr} />
      </StyledThisComp.FeedbackRow>
    </StyledThisComp.FeedbackContainer>
  );
};

export default Feedback;
