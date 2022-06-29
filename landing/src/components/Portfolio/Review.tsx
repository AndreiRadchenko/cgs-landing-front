import React, { useEffect, useState } from "react";
import { IPortfolioReview } from "../../types/Admin/AdminPortfolioPage.types";
import * as Styled from "../../styles/PortfolioSlider.styles";
import Image from "next/image";
import AdminStars from "../Admin/FeedbackBlock/AdminStars";
import AdminBlackButton from "../Admin/Global/AdminBlackButton";
import themes from "../../utils/themes";
import { useWindowDimension } from "../../hooks/useWindowDimension";

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
            <AdminBlackButton text={"project link"} />
          </Styled.ProjectHeader>
          <Styled.ProjectDescription>{review.text}</Styled.ProjectDescription>
          <Styled.Separator />
          <Styled.Feedback>
            <Styled.AuthorName>{review.feedback?.name}</Styled.AuthorName>
            <Styled.CompanyName>{review.feedback?.company}</Styled.CompanyName>
            <AdminStars
              value={review.feedback?.rating}
              size={isTablet ? 28 : 20}
              color2={themes.primary.colors.darkBlue}
            />
          </Styled.Feedback>
          <Styled.ProjectDescription>
            {review.feedback?.feedbackText}
          </Styled.ProjectDescription>
        </Styled.ContentContainer>
        <Styled.ImageContainer>
          <Image src={review.image.url} width={"588"} height={"413"} />
        </Styled.ImageContainer>
      </Styled.ReviewContainer>
    )
  );
};

export default Review;
