import React, { useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { IReviewProps as IReview } from "../../types/Admin/Response.types";
import Image from "next/image";
import Loader from "../Portfolio/Loader";

interface IReviewProps {
  review: IReview;
}

const Slide = ({ review }: IReviewProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onLoadCallBack = () => {
    setIsLoading(false);
  };

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };
  return (
    <Styled.SlideContainer
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Styled.TextWrapper className={isHover ? "hover" : undefined}>
        <Styled.HoverText>{review.text}</Styled.HoverText>
      </Styled.TextWrapper>
      {review.image?.url && (
        <Styled.ImageWrapper>
          {isLoading && <Loader />}
          <Image
            src={review.image?.url}
            alt={"project image"}
            layout={"fill"}
            objectFit="contain"
            onLoadingComplete={onLoadCallBack}
            style={{ opacity: isLoading ? "0" : "1" }}
          />
        </Styled.ImageWrapper>
      )}
      <Styled.ContentWrapper>
        <Styled.ProjectTitle>{review.title}</Styled.ProjectTitle>
        <Styled.BottomContent>
          <span>
            {review.industry && (
              <Styled.ProjectScope>
                {"// "}
                {review.industry}
              </Styled.ProjectScope>
            )}
          </span>
          {review.button.length > 0 && (
            <Styled.ProjectLinkButton href={review.button}>
              project link
            </Styled.ProjectLinkButton>
          )}
        </Styled.BottomContent>
      </Styled.ContentWrapper>
    </Styled.SlideContainer>
  );
};

export default Slide;
