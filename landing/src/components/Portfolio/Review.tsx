import React from "react";
import { IPortfolioReview } from "../../types/Admin/AdminPortfolioPage.types";
import * as Styled from "../../styles/PortfolioSlider.styled";
import * as Styles from "../../styles/Portfolio.styled";
import StarPortfolio from "../../../public/starPortfolio.svg";
import emptyStar from "../../../public/emptyStar.svg";
import halfStar from "../../../public/halfStar.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { StarCont } from "../../styles/PortfolioSlider.styled";
import portfolioArrow from "../../../public/portfolioArrow.svg";
import { recoverLink } from "../../utils/recoverLink";
import Image from "next/image";

interface IReviewProps {
  review: IPortfolioReview;
  className?: string | undefined;
}

const Review = ({ review, className }: IReviewProps) => {
  const { width } = useWindowDimension();
  const startsArr = [];
  let stars = review.feedback.rating;

  for (let i = 0; i < 5; i++) {
    if (stars >= 1) {
      startsArr.push(Math.floor(1));
    } else if (stars > 0 && stars < 1) {
      startsArr.push(stars);
    } else {
      startsArr.push(0);
    }
    stars = stars - 1;
  }

  return (
    review && (
      <Styled.ReviewContainer className={className}>
        <Styled.ContentContainer>
          <Styled.ProjectHeader>
            <Styled.PortfolioProjectHeader>
              {review.title}
            </Styled.PortfolioProjectHeader>
            {review.button.length > 0 && (
              <Styles.LinkButton>
                <a
                  href={recoverLink(review.button)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {width && width < 1300 && width > 768
                    ? "link"
                    : "project link"}
                </a>
              </Styles.LinkButton>
            )}
          </Styled.ProjectHeader>
          <Styled.ProjectDescription>{review.text}</Styled.ProjectDescription>
          <Styled.Separator />
          {review.feedback.name !== "" && (
            <>
              <Styled.TitleContainer>
                <Styled.Feedback>
                  <Styled.AuthorName>{review.feedback?.name}</Styled.AuthorName>
                  <Styled.CompanyName>
                    {review.feedback?.company}
                  </Styled.CompanyName>
                </Styled.Feedback>
                <StarCont>
                  {startsArr.map((num, i) => {
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
                </StarCont>
              </Styled.TitleContainer>
              <Styled.ProjectComment>
                {review.feedback?.feedbackText}
              </Styled.ProjectComment>
              <Styled.ViewMoreContainer href="https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/">
                <Styled.ViewMoreText>view more</Styled.ViewMoreText>
                <Styled.ViewMoreArrow
                  src={portfolioArrow.src}
                  alt="view more stroke img"
                />
              </Styled.ViewMoreContainer>
            </>
          )}
        </Styled.ContentContainer>
        {(review?.image && (
          <Styled.ImageContainer bgColor={review.bgColor}>
            <Image
              src={review.image.url}
              alt="review image"
              layout="fill"
              priority={true}
            />
          </Styled.ImageContainer>
        )) || <h1>No Image</h1>}
      </Styled.ReviewContainer>
    )
  );
};

export default Review;
