import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IFeedback } from "../../../types/Admin/Response.types";
import AdminButton from "../Global/AdminButton";
import star from "../../../../public/HomePageDecoration/feedbackStar.svg";

import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import { StarImage } from "../../FeedbackCard/FeedbackCard.styled";

interface IFeedbackProps {
  feedback: IFeedback;
  deleteFunc: (e?: React.ChangeEvent<any>) => void;
  isNewFeedback: boolean;
  setIsNewFeedback: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminFeedback = ({
  feedback,
  deleteFunc,
  isNewFeedback,
  setIsNewFeedback,
}: IFeedbackProps) => {
  const trigger = () => setIsNewFeedback((prev) => !prev);
  const starsLength = new Array(Math.ceil(feedback.stars)).fill(0);

  return (
    <Styled.AdminFeedbackFrame>
      <Styled.AdminFeedbackStarsBlock>
        <Styled.AdminFrameSubTitle>{feedback.name}</Styled.AdminFrameSubTitle>
        <Styled.AdminFeedbackStars>
          {starsLength.map((_, idx) => (
            <StarImage key={idx} src={star.src} />
          ))}
        </Styled.AdminFeedbackStars>
      </Styled.AdminFeedbackStarsBlock>
      <Styled.AdminCompanyName>{feedback.companyName}</Styled.AdminCompanyName>
      <Styled.AdminFeedbackText>{feedback.text}</Styled.AdminFeedbackText>
      <AdminButton text="View More" />
      <Styled.AdminDeleteTextThin onClick={deleteFunc}>
        delete review
      </Styled.AdminDeleteTextThin>

      <Styled.AdminEditIcon onClick={trigger}>
        <Image src={isNewFeedback ? edit : close} alt={"new feedback"} />
      </Styled.AdminEditIcon>
    </Styled.AdminFeedbackFrame>
  );
};

export default AdminFeedback;
