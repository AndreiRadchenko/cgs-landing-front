import React from "react";
import Image from "next/image";

import * as Styled from "../../styles/ShowCase.styled";

import { IReviewProps as IReview } from "../../types/Admin/Response.types";

import { openInNewTab } from "../../utils/OpenInNewTab";
import { useMediaQuery } from "@mui/material";

interface IReviewProps {
  review: IReview;
  isActive: boolean;
  ind: number;
}

const Slide = ({ review, isActive }: IReviewProps) => {
  const is768px = useMediaQuery("(max-width:768px)");

  const splitted = is768px ? review.text?.split("^") : review.text?.split("|");

  const navigateToProjectPage = (url: string, id?: string) => {
    const newUrl = url.toLowerCase().replace(/\s+/g, "-");
    openInNewTab(`https://cgsteam.io/portfolio/${newUrl}-${id}`);
  };

  return (
    <Styled.SlideContainer>
      {review.imageProjectBanner?.image?.url && (
        <Styled.ImageWrapper className={isActive ? "active" : undefined}>
          <Image
            src={review.imageProjectBanner?.image?.url}
            alt={"project image"}
            layout={"fill"}
            objectFit="contain"
            quality={10}
            priority
            loading={"eager"}
          />
        </Styled.ImageWrapper>
      )}
      <Styled.ContentWrapper>
        <Styled.TitleContainer>
          <Styled.ProjectTitle
            isBig={review.showCaseTitle.length > 45}
            className={isActive ? "active" : undefined}
          >
            {review.showCaseTitle}
          </Styled.ProjectTitle>
          {review.title && (
            <Styled.ProjectScope className={isActive ? "active" : undefined}>
              <span>for </span>
              {review.title}
            </Styled.ProjectScope>
          )}
        </Styled.TitleContainer>
        <Styled.BottomContent>
          {review.text && (
            <Styled.ProjectScopeText
              className={isActive ? "active" : undefined}
            >
              {splitted?.map((el) => el !== "" && el.replace(/[\^|]/g, ""))}
            </Styled.ProjectScopeText>
          )}
          <Styled.BottomSection className={isActive ? "active" : undefined}>
            <Styled.ReadMore
              onClick={() => navigateToProjectPage(review.title, review._id)}
            >
              read more
            </Styled.ReadMore>
            <Styled.AllProjects
              onClick={() => openInNewTab(`https://cgsteam.io/portfolio`)}
            >
              <svg
                width="0.722em"
                height="0.722em"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8536 11.1464L1.70711 2L2 1.70711L11.1464 10.8536L12 11.7071V10.5V0.5H12.5V12.5H0.5V12H10.5H11.7071L10.8536 11.1464Z"
                  stroke="black"
                />
                <path
                  d="M10.8536 11.1464L1.70711 2L2 1.70711L11.1464 10.8536L12 11.7071V10.5V0.5H12.5V12.5H0.5V12H10.5H11.7071L10.8536 11.1464Z"
                  stroke="black"
                />
              </svg>
              <span>All projects</span>
            </Styled.AllProjects>
          </Styled.BottomSection>
        </Styled.BottomContent>
      </Styled.ContentWrapper>
    </Styled.SlideContainer>
  );
};

export default Slide;
