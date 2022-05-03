import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio";
import AdminButton from "../Global/AdminButton";
import AdminImage from "../Global/AdminImage";
import edit from "../../../../public/editIcon.svg";

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
        <AdminButton text="project link" onClick={() => window.location.href = review.button} />
      </Styled.AdminPortfolioReviewContent>

      <Styled.AdminDeleteTextThin onClick={deleteFunc}>
        delete review
      </Styled.AdminDeleteTextThin>

      <Styled.AdminEditIcon>
        <Image src={edit} />
      </Styled.AdminEditIcon>
    </Styled.AdminPortfolioReviewFrame>
  );
};

export default AdminReview;
