import React, { useEffect, useState } from "react";
import { IPortfolioReview } from "../../types/Admin/AdminPortfolioPage.types";
import * as Styled from "../../styles/PortfolioSlider.styled";
import * as Styles from "../../styles/Portfolio.styled";
import StarPortfolio from "../../../public/starPortfolio.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { StarCont } from "../../styles/PortfolioSlider.styled";

interface IReviewProps {
  review: IPortfolioReview;
}

const Review = ({ review }: IReviewProps) => {
  const [isTablet, setIsTablet] = useState(false);
  const { width } = useWindowDimension();
  useEffect(() => {
    if (width && width <= 1024) {
      setIsTablet(true);
    }
  }, [width]);

  return (
    review && (
      <Styled.ReviewContainer>
        <Styled.ContentContainer>
          <Styled.ProjectHeader>
            <Styled.PortfolioProjectHeader>
              {review.title}
            </Styled.PortfolioProjectHeader>
            <Styles.LinkButton>project link</Styles.LinkButton>
          </Styled.ProjectHeader>
          <Styled.ProjectDescription>{review.text}</Styled.ProjectDescription>
          <Styled.Separator />
          <Styled.Feedback>
            <Styled.AuthorName>{review.feedback?.name}</Styled.AuthorName>
            <Styled.CompanyName>{review.feedback?.company}</Styled.CompanyName>
            <StarCont>
              <Styled.Star src={StarPortfolio.src} />
              <Styled.StarRate>{review.feedback.rating}</Styled.StarRate>
            </StarCont>
          </Styled.Feedback>
          <Styled.ProjectComment>
            {review.feedback?.feedbackText}
          </Styled.ProjectComment>
        </Styled.ContentContainer>
        {(review?.image && (
          <Styled.ImageContainer>
            <Styled.Image src={review?.image.url} alt="review image" />
          </Styled.ImageContainer>
        )) || <h1>No Image</h1>}
      </Styled.ReviewContainer>
    )
  );
};

export default Review;
