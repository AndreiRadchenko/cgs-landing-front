import React from "react";
import * as StyledThisComp from "../../styles/Feedback.styled";
import { feedbackArr } from "../../utils/variables";
import arrowIMG from "../../../public/arrow.svg";

import CarouselFeedback from "./CarouselFeedback";
import Image from "next/image";

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
        <StyledThisComp.StyledArrowButton className="swiper-button-prev">
          <Image src={arrowIMG} layout={"fill"} objectFit={"cover"} />
        </StyledThisComp.StyledArrowButton>
        <CarouselFeedback feedback={feedbackArr} />
        <StyledThisComp.StyledArrowButton className="swiper-button-next">
          <Image src={arrowIMG} layout={"fill"} objectFit={"cover"} />
        </StyledThisComp.StyledArrowButton>
      </StyledThisComp.FeedbackRow>
    </StyledThisComp.FeedbackContainer>
  );
};

export default Feedback;
