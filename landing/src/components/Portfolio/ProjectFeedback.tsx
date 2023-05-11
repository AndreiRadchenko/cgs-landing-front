import React from "react";

import QuotesFeedback from "./svg/QuotesFeedback";
import StarFeedback from "./svg/StarFeedback";

import * as Styled from "../../styles/PortfolioPage.styled";

export interface IFeedback {
  name: string;
  position: string;
  feedbackText: string;
}

const ProjectFeedback = ({ feedback }: { feedback: IFeedback }) => {
  return (
    <Styled.FeedbackContainer>
      <Styled.FeedbackTitleContainer>
        <h4>What our clients say about us?</h4>
        <QuotesFeedback />
        <Styled.FeedbackStarContainer>
          {[...Array(5)].map((start, idx) => (
            <StarFeedback key={idx} />
          ))}
        </Styled.FeedbackStarContainer>
      </Styled.FeedbackTitleContainer>
      <Styled.FeedbackInfoContainer>
        <h4>{feedback.name}</h4>
        <p className="position">{feedback.position}</p>
        <p className="text">{feedback.feedbackText}</p>
      </Styled.FeedbackInfoContainer>
    </Styled.FeedbackContainer>
  );
};

export default ProjectFeedback;
