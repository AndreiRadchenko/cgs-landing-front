import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio.types";
import AdminImage from "../Global/AdminImage";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import AdminBlackButton from "../Global/AdminBlackButton";
import AdminStars from "../FeedbackBlock/AdminStars";
import themes from "../../../utils/themes";
import { ProjectIndustry } from "../../../styles/PortfolioSlider.styled";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";

interface IReviewProps {
  review: IPortfolioReview;
  deleteFunc?: (e?: React.ChangeEvent<any>) => void;
  editTrigger?: React.Dispatch<React.SetStateAction<boolean>>;
  editFlag?: boolean;
  setCurrent?: (value: number) => void;
  idx?: number;
  onScroll: () => void;
}

const AdminReview = ({
  review,
  deleteFunc,
  editTrigger,
  editFlag,
  setCurrent,
  idx,
  onScroll,
}: IReviewProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IPortfolioReview[]>([
    queryKeys.getPortfolio,
  ]);
  const editTriggerFunc = () => {
    if (setCurrent && typeof idx === "number" && editTrigger && data) {
      setCurrent(data.findIndex((rev) => rev._id === review._id));
      editTrigger((prev) => !prev);
    }
    if (editFlag) onScroll();
  };

  const redirect = () => (window.location.href = review.button);

  if (!review) return <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>;

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
            {review.industry && (
              <ProjectIndustry>
                {"// "}
                {review.industry}
              </ProjectIndustry>
            )}
            <Styled.AdminParagraph>{review.text}</Styled.AdminParagraph>
          </Styled.ProjectInfo>
          <Styled.Separator />
          <Styled.ProjectInfo>
            <Styled.PortfolioReviewHeader>
              <Styled.AuthorName>{review.feedback.name}</Styled.AuthorName>
              <Styled.CompanyName>{review.feedback.company}</Styled.CompanyName>
              <Styled.AdminFeedbackStars>
                {review.feedback.rating && (
                  <AdminStars
                    value={Number(review.feedback.rating)}
                    size={26}
                    color2={themes.primary.colors.darkBlue}
                  />
                )}
              </Styled.AdminFeedbackStars>
            </Styled.PortfolioReviewHeader>
            <Styled.AdminParagraph>
              {review.feedback.feedbackText}
            </Styled.AdminParagraph>
          </Styled.ProjectInfo>
        </div>
        <AdminImage image={review.image} />
      </Styled.AdminPortfolioReviewLayout>
      <Styled.AdminDeleteTextThin onClick={deleteFunc}>
        delete
      </Styled.AdminDeleteTextThin>
      <Styled.AdminEditIcon onClick={editTriggerFunc}>
        <Image src={editFlag ? edit : close} alt="admin portfolio edit icon" />
      </Styled.AdminEditIcon>
    </Styled.AdminPortfolioReviewFrame>
  );
};

export default AdminReview;
