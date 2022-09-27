import React, { useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import { IReviewProps } from "../../types/Admin/Response.types";
import Image from "next/image";

interface IReview {
  review: IReviewProps;
}

const Slide = ({ review }: IReview) => {
  const [isHover, setIsHover] = useState<boolean>(false);

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
      {(isHover && (
        <Styled.TextWrapper>
          <Styled.HoverText>{review.text}</Styled.HoverText>
        </Styled.TextWrapper>
      )) || (
        <Styled.ImageWrapper>
          {review.image?.url && (
            <Image
              src={review.image?.url}
              alt={"project image"}
              layout={"fill"}
            />
          )}
        </Styled.ImageWrapper>
      )}
      <Styled.ContentWrapper>
        <Styled.ProjectTitle>{review.title}</Styled.ProjectTitle>
        <Styled.BottomContent>
          {review.industry && (
            <Styled.ProjectScope>
              {"// "}
              {review.industry}
            </Styled.ProjectScope>
          )}
          <Styled.ProjectLinkButton href={review.button}>
            project link
          </Styled.ProjectLinkButton>
        </Styled.BottomContent>
      </Styled.ContentWrapper>
    </Styled.SlideContainer>
  );
};

export default Slide;
