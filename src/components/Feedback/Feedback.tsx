import React, { useRef } from "react";
import * as StyledThisComp from "../../styles/Feedback.styled";
import { feedbackArr } from "../../utils/variables";
import CarouselFeedback from "./CarouselFeedback";
import { useOnScreen } from "../../hooks/useOneScreen";

const Feedback = () => {
  const feedbackRef = useRef(null);
  const isFeedbackOnScreen = useOnScreen(feedbackRef);

  return (
    <StyledThisComp.FeedbackContainer>
      <StyledThisComp.FeedbackSectionTitle>
        feedback
      </StyledThisComp.FeedbackSectionTitle>
      <StyledThisComp.FeedbackSectionSubTitle>
        We are proud of what our clients say about us. These words sound even
        louder than any others!
      </StyledThisComp.FeedbackSectionSubTitle>
      <div ref={feedbackRef}>
        <StyledThisComp.FeedbackRow>
          <CarouselFeedback
            feedback={feedbackArr}
            isFeedbackOnScreen={isFeedbackOnScreen}
          />
        </StyledThisComp.FeedbackRow>
      </div>
    </StyledThisComp.FeedbackContainer>
  );
};

export default Feedback;
