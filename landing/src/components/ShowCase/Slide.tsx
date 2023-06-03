import React, { useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { IReviewProps as IReview } from "../../types/Admin/Response.types";
import Image from "next/image";
import Loader from "../Portfolio/Loader";
import { useRouter } from "next/router";

interface IReviewProps {
  review: IReview;
  isActive: boolean;
}

const Slide = ({ review, isActive }: IReviewProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onLoadCallBack = () => {
    setIsLoading(false);
  };

  const navigateToProjectPage = (url: string, id?: string) => {
    const newUrl = url.toLowerCase().replace(/\s+/g, "-");
    router.push(
      {
        pathname: `/portfolio/${newUrl}-${id}`,
        query: { projectId: id },
      },
      `/portfolio/${newUrl}-${id}`
    );
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
        <Styled.ProjectTitle className={isActive ? "active" : undefined}>
          {review.showCaseTitle}
        </Styled.ProjectTitle>
        <Styled.BottomContent>
          {review.title && (
            <Styled.ProjectScope className={isActive ? "active" : undefined}>
              <span>for </span>
              {review.title}
            </Styled.ProjectScope>
          )}
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
            <Styled.AllProjects onClick={() => router.push("/portfolio")}>
              <span>All projects</span>
            </Styled.AllProjects>
          </Styled.BottomSection>
        </Styled.BottomContent>
      </Styled.ContentWrapper>
    </Styled.SlideContainer>
  );
};

export default Slide;
