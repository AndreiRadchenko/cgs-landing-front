import React from "react";
import Image from "next/image";

import * as Styled from "../../../styles/AdminPage";
import * as Styles from "../../../styles/HomePage/Testimonials.styled";

import { ITestimonial } from "../../../types/Components.types";

import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import star from "../../../../public/HomePageDecoration/feedbackStar.svg";
import PlayBtn from "../../HomePage/Testimonials/PlayBtn";
import ReactPlayer from "react-player";
import Link from "next/link";

interface IFeedbackProps {
  testimonial: ITestimonial;
  deleteFunc: (e?: React.ChangeEvent<any>) => void;
  isNewFeedback: boolean;
  setIsNewFeedback: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminTestimonial = ({
  testimonial,
  deleteFunc,
  isNewFeedback,
  setIsNewFeedback,
}: IFeedbackProps) => {
  const trigger = () => setIsNewFeedback((prev) => !prev);

  return (
    <Styled.AdminFeedbackFrame className={"testimonialsFrame"}>
      <Styles.TestimonialsSlideContainer className={"adminSlide"}>
        {testimonial.slideBanner?.image !== undefined &&
          testimonial.slideBanner?.image !== null && (
            <Image
              layout={"fill"}
              src={testimonial.slideBanner.image.url}
              alt={"clients"}
            />
          )}
        <Styles.TestimonialsSlideHeadline className={"adminSlide"}>
          {testimonial.slideTitle}
        </Styles.TestimonialsSlideHeadline>
        <Styles.TestimonialsSlideStar>
          {[...Array(Math.round(testimonial.stars))].map((_, i) => (
            <Image key={i} src={star} alt={"star"} />
          ))}
        </Styles.TestimonialsSlideStar>
        <Styles.TestimonialsSlidePlayBtnContainer>
          <PlayBtn />
        </Styles.TestimonialsSlidePlayBtnContainer>
      </Styles.TestimonialsSlideContainer>
      <Styled.AdminTestimonialContainerModal>
        <ReactPlayer
          url={testimonial.videoUrl}
          width={"100%"}
          height={"237px"}
        />
        <Styles.TestimonialsVideoInfoContainer>
          <Styles.TestimonialsInfoHeader>
            <div>
              <Styles.TestimonialsHeaderName className={"adminSlide"}>
                {testimonial.name}
              </Styles.TestimonialsHeaderName>
              <Styles.TestimonialsHeaderPosition
                className={"desktop grey adminSlide"}
              >
                <Link href={"/"}>{testimonial.company}</Link>
              </Styles.TestimonialsHeaderPosition>
            </div>
            <Styles.TestimonialsHeaderStar>
              {[...Array(Math.round(testimonial.stars))].map((_, i) => (
                <Image key={i} src={star} alt={"star"} />
              ))}
            </Styles.TestimonialsHeaderStar>
          </Styles.TestimonialsInfoHeader>
          <Styles.TestimonialsInfoText className={"adminSlide"}>
            {testimonial.text}
          </Styles.TestimonialsInfoText>
        </Styles.TestimonialsVideoInfoContainer>
      </Styled.AdminTestimonialContainerModal>
      <Styled.AdminEditDeleteContainer>
        <Styled.AdminEditIcon onClick={trigger}>
          <Image src={isNewFeedback ? edit : close} alt={"new feedback"} />
        </Styled.AdminEditIcon>
        <Styled.AdminDeleteTextTestimon onClick={deleteFunc}>
          delete review
        </Styled.AdminDeleteTextTestimon>
      </Styled.AdminEditDeleteContainer>
    </Styled.AdminFeedbackFrame>
  );
};

export default AdminTestimonial;
