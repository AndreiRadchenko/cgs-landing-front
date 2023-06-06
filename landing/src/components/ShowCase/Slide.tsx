import React, { useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { IReviewProps as IReview } from "../../types/Admin/Response.types";
import Image from "next/image";
import Loader from "../Portfolio/Loader";
import { useRouter } from "next/router";
import { openInNewTab } from "../../utils/OpenInNewTab";

interface IReviewProps {
  review: IReview;
  isActive: boolean;
}

const Slide = ({ review, isActive }: IReviewProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onLoadCallBack = () => {
    setIsLoading(false);
  };

  const navigateToProjectPage = (url: string, id?: string) => {
    const newUrl = url.toLowerCase().replace(/\s+/g, "-");
    openInNewTab(`https://cgsteam.io/portfolio/${newUrl}-${id}`);
  };

  return (
    <Styled.SlideContainer>
      {review.imageProjectBanner?.image?.url && (
        <Styled.ImageWrapper className={isActive ? "active" : undefined}>
          {isLoading && <Loader />}
          <Image
            src={review.imageProjectBanner?.image?.url}
            alt={"project image"}
            layout={"fill"}
            objectFit="contain"
            onLoadingComplete={onLoadCallBack}
            style={{ opacity: isLoading ? "0" : "1" }}
          />
        </Styled.ImageWrapper>
      )}
      <Styled.ContentWrapper>
        <Styled.TitleContainer>
          <Styled.ProjectTitle className={isActive ? "active" : undefined}>
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
              {review.text}
            </Styled.ProjectScopeText>
          )}
          <Styled.BottomSection>
            <Styled.ReadMore
              onClick={() => navigateToProjectPage(review.title, review._id)}
            >
              read more
            </Styled.ReadMore>
            <Styled.AllProjects
              onClick={() => openInNewTab(`https://cgsteam.io/portfolio`)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6965 0.383971V12.5585M12.6965 12.5585H0.521938M12.6965 12.5585L2.0768 1.93883"
                  stroke="black"
                  strokeWidth="1.5"
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
