import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio.types";
import ButtonArrow from "../../../utils/ButtonArrow";

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

  if (!review) return <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>;

  return (
    <Styled.AdminPortfolioReviewFrame>
      <Styled.AdminPortfolioReviewHeader>
        <Styled.AdminPortfolioReviewHeaderTitle>
          <h4>{review.title}</h4>
          <p>// {review.industry}</p>
        </Styled.AdminPortfolioReviewHeaderTitle>
        <Styled.AdminPortfolioReviewHeaderLink>
          {review.button ? (
            <a href={review.button} target="_blank" rel="noreferrer">
              project link
            </a>
          ) : (
            <span>NDA</span>
          )}
          <Styled.AdminPortfolioReviewArrowContainer
            isProjectLink={!!review.button}
          >
            <ButtonArrow />
          </Styled.AdminPortfolioReviewArrowContainer>
        </Styled.AdminPortfolioReviewHeaderLink>
      </Styled.AdminPortfolioReviewHeader>
      <Styled.AdminPortfolioReviewImage>
        <Image
          src={
            review.imageBanner?.image
              ? review.imageBanner.image!.url
              : review.image?.url
          }
          className="image"
          alt="review image"
          height={341}
          width={652}
        />
      </Styled.AdminPortfolioReviewImage>
      <Styled.AdminPortfolioReviewTools>
        <Styled.AdminEditIcon onClick={editTriggerFunc}>
          <Image
            src={editFlag ? edit : close}
            alt="admin portfolio edit icon"
          />
        </Styled.AdminEditIcon>
        <Styled.AdminDeleteReview onClick={deleteFunc}>
          delete
        </Styled.AdminDeleteReview>
      </Styled.AdminPortfolioReviewTools>
    </Styled.AdminPortfolioReviewFrame>
  );
};

export default AdminReview;
