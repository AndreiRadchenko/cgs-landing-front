import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IFeedback } from "../../../types/Admin/Response.types";
import AdminButton from "../Global/AdminButton";
import AdminStars from "./AdminStars";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";

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
  return (
    <Styled.AdminFeedbackFrame>
      <Styled.AdminFeedbackStarsBlock>
        <Styled.AdminSubTitle>{feedback.name}</Styled.AdminSubTitle>
        <Styled.AdminFeedbackStars>
          <AdminStars value={feedback.stars} />
        </Styled.AdminFeedbackStars>
      </Styled.AdminFeedbackStarsBlock>
      <Styled.AdminParagraph>{feedback.companyName}</Styled.AdminParagraph>
      <Styled.AdminFeedbackRole>{feedback.role}</Styled.AdminFeedbackRole>
      <Styled.AdminParagraph>{feedback.text}</Styled.AdminParagraph>
      <AdminButton />
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
