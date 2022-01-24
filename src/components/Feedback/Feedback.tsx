import React from "react";
import * as StyledThisComp from "../../styles/Feedback.styled";
import { feedbackArr } from "../../utils/variables";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

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
        {feedbackArr.map(
          ({ name, description, company, position, rates }, idx) => (
            <FeedbackCard
              key={idx}
              name={name}
              description={description}
              company={company}
              position={position}
              rates={rates}
            />
          )
        )}
      </StyledThisComp.FeedbackRow>
    </StyledThisComp.FeedbackContainer>
  );
};

export default Feedback;
