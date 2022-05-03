import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio";
import AdminButton from "../Global/AdminButton";
import AdminImage from "../Global/AdminImage";

interface IReviewProps {
  review: IPortfolioReview;
  deleteFunc: (e?: React.ChangeEvent<any>) => void;
}

const AdminReview = ({ review, deleteFunc }: IReviewProps) => {
  return (
    <Styled.AdminPortfolioReviewFrame>
      <Styled.AdminPortfolioReviewContent>
        <AdminImage image={review.image} />
        <Styled.AdminSubTitle>{review.title}</Styled.AdminSubTitle>
        <Styled.AdminParagraph>{review.text}</Styled.AdminParagraph>
        <AdminButton text="project link" />
      </Styled.AdminPortfolioReviewContent>

      <Styled.AdminDeleteTextThin onClick={deleteFunc}>
        delete review
      </Styled.AdminDeleteTextThin>
    </Styled.AdminPortfolioReviewFrame>
  );
};

export default AdminReview;
