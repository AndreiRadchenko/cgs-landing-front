import React, { useState } from "react";
import * as Styled from "../../styles/ShowCase.styled";
import StarPortfolio from "../../../public/starPortfolio.svg";
import emptyStar from "../../../public/emptyStar.svg";
import halfStar from "../../../public/halfStar.svg";
import { IReviewProps } from "../../types/Admin/Response.types";
import Image from "next/image";

interface IReview {
  review: IReviewProps;
}

const Slide = ({ review }: IReview) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const countRating = (review: IReviewProps) => {
    if (review.feedback.rating) {
      const starsArr = [];
      let stars = review.feedback.rating;

      for (let i = 0; i < 5; i++) {
        if (stars >= 1) {
          starsArr.push(Math.floor(1));
        } else if (stars > 0 && stars < 1) {
          starsArr.push(stars);
        } else {
          starsArr.push(0);
        }
        stars = stars - 1;
      }
      return starsArr;
    }
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
      <Styled.ImageWrapper className={isHover ? "text" : undefined}>
        {(isHover && <Styled.HoverText>{review.text}</Styled.HoverText>) ||
          (review.image?.url && (
            <Image
              src={review.image?.url}
              alt={"project image"}
              layout={"fill"}
            />
          ))}
      </Styled.ImageWrapper>
      <Styled.ContentWrapper>
        <Styled.ProjectTitle>{review.title}</Styled.ProjectTitle>
        {review.industry && (
          <Styled.ProjectScope>
            {"// "}
            {review.industry}
          </Styled.ProjectScope>
        )}
        <Styled.BottomContent>
          <Styled.ProjectRating>
            {countRating(review)?.map((num, i) => {
              if (num > 0.5) {
                return (
                  <Styled.Star
                    src={StarPortfolio.src}
                    key={i}
                    alt="feedback star img"
                  />
                );
              } else if (num > 0 && num <= 0.5) {
                return (
                  <Styled.Star
                    src={halfStar.src}
                    key={i}
                    alt="feedback star img"
                  />
                );
              }
              return (
                <Styled.Star
                  src={emptyStar.src}
                  key={i}
                  alt="feedback star img"
                />
              );
            })}
          </Styled.ProjectRating>
          <Styled.ProjectLinkButton href={review.button}>
            project link
          </Styled.ProjectLinkButton>
        </Styled.BottomContent>
      </Styled.ContentWrapper>
    </Styled.SlideContainer>
  );
};

export default Slide;
