import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio";
import AdminButton from "../Global/AdminButton";
import AdminImage from "../Global/AdminImage";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import AdminBlackButton from "../Global/AdminBlackButton";
import AdminStars from "../FeedbackBlock/AdminStars";
import themes from "../../../utils/themes";
import AdminDropDown from "../Global/AdminDropDown";

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

  const redirect = () => (window.location.href = review.button);

  return (
    <Styled.AdminPortfolioReviewFrame>
      <Styled.AdminPortfolioReviewLayout>
        <div>
          <Styled.ProjectInfo>
            <Styled.ProjectHeader>
              <Styled.PortfolioProjectHeader>
                {review.title}
              </Styled.PortfolioProjectHeader>
              <AdminBlackButton text="project link" onClick={redirect} />
            </Styled.ProjectHeader>
            <Styled.AdminParagraph>{review.text}</Styled.AdminParagraph>
          </Styled.ProjectInfo>
          <Styled.Separator />
          <Styled.ProjectInfo>
            <Styled.PortfolioReviewHeader>
              <Styled.AuthorName>Josh M</Styled.AuthorName>
              <Styled.CompanyName>INHouse</Styled.CompanyName>
              <Styled.AdminFeedbackStars>
                <AdminStars value={5} color2={themes.primary.colors.darkBlue} />
              </Styled.AdminFeedbackStars>
            </Styled.PortfolioReviewHeader>
            <Styled.AdminParagraph>{review.text}</Styled.AdminParagraph>
          </Styled.ProjectInfo>
        </div>
        <AdminImage image={review.image} />
      </Styled.AdminPortfolioReviewLayout>

      <Styled.AdminDeleteTextThin onClick={deleteFunc}>
        delete
      </Styled.AdminDeleteTextThin>

      <Styled.AdminEditIcon onClick={editTriggerFunc}>
        <Image src={editFlag ? edit : close} />
      </Styled.AdminEditIcon>
    </Styled.AdminPortfolioReviewFrame>
  );
};

export default AdminReview;