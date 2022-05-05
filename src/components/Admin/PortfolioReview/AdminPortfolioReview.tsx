import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio";
import AdminButton from "../Global/AdminButton";
import AdminImage from "../Global/AdminImage";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";

interface IReviewProps {
  review: IPortfolioReview;
  deleteFunc: (e?: React.ChangeEvent<any>) => void;
  editTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  editFlag: boolean;
}

const AdminReview = ({
  review,
  deleteFunc,
  editTrigger,
  editFlag,
}: IReviewProps) => {
  const editTriggerFunc = () => {
    editTrigger((prev) => !prev);
  };

  const redirect = () => (window.location.href = review.button)

  return (
    <Styled.AdminPortfolioReviewFrame>
      <Styled.AdminPortfolioReviewContent>
        <AdminImage image={review.image} />
        <Styled.AdminSubTitle>{review.title}</Styled.AdminSubTitle>
        <Styled.AdminParagraph>{review.text}</Styled.AdminParagraph>
        <AdminButton
          text="project link"
          onClick={redirect}
        />
      </Styled.AdminPortfolioReviewContent>

      <Styled.AdminDeleteTextThin onClick={deleteFunc}>
        delete review
      </Styled.AdminDeleteTextThin>

      <Styled.AdminEditIcon onClick={editTriggerFunc}>
        <Image src={editFlag ? edit : close} />
      </Styled.AdminEditIcon>
    </Styled.AdminPortfolioReviewFrame>
  );
};

export default AdminReview;
