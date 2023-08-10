import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import * as Styled from "../../../styles/HomePage/Testimonials.styled";

import { ITestimonialsModalProps } from "../../../types/Components.types";

import cross from "../../../../public/closeBtn.svg";
import star from "../../../../public/HomePageDecoration/feedbackStar.svg";

const TestimonialsModal = ({ setIsOpen }: ITestimonialsModalProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const data = `After talking with many different teams, I am very happy with my
            decision to hire CGS. Finding a web developer is no easy task,
            especially when you're just an individual, not a company, and have
            no idea where to start. But everyone at CGS is very personable and
            easy to connect with. Notably, the main contact on UpWork,
            Khrystyna, was kind, helpful, and responsive since day one, and her
            communication style stood out among a sea of other candidates. Their
            business analyst, Oleksandr, was very patient and worked with me for
            months before the contract even started to fine-tune my vision and
            help me stay within my budget.`;
  return (
    <Styled.TestimonialsModalContainer>
      <Styled.TestimonialsCrossContainer onClick={() => setIsOpen(false)}>
        <Image alt={"cross"} src={cross} width={"100%"} height={"100%"} />
      </Styled.TestimonialsCrossContainer>
      <Styled.TestimonialsVideoContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=AHbAAnt9qsY&ab_channel=WebDevCody"
          width={"100%"}
          height={"34.7em"}
        />
        <Styled.TestimonialsVideoInfoContainer>
          <Styled.TestimonialsInfoHeader>
            <div>
              <Styled.TestimonialsHeaderName>
                Damien Dalli
              </Styled.TestimonialsHeaderName>
              <Styled.TestimonialsHeaderPosition>
                Head of Design // Founder of Heartstring AI
              </Styled.TestimonialsHeaderPosition>
            </div>
            <div>
              {[...Array(5)].map((_, i) => (
                <Image key={i} src={star} alt={"star"} />
              ))}
            </div>
          </Styled.TestimonialsInfoHeader>
          <Styled.TestimonialsInfoText>
            {seeMore ? data : `${data.substring(0, 160)}... `}
            {seeMore ? (
              ""
            ) : (
              <span onClick={() => setSeeMore(true)}>see more</span>
            )}
          </Styled.TestimonialsInfoText>
        </Styled.TestimonialsVideoInfoContainer>
        <Styled.HoverBlockTestimonials>
          <Styled.HoverBlackBlockTestimonials />
        </Styled.HoverBlockTestimonials>
      </Styled.TestimonialsVideoContainer>
    </Styled.TestimonialsModalContainer>
  );
};

export default TestimonialsModal;
