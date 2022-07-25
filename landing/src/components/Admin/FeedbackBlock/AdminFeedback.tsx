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
        <Styled.AdminFrameSubTitle>{feedback.name}</Styled.AdminFrameSubTitle>
        <Styled.AdminFeedbackStars>
          <AdminStars value={feedback.stars} />
        </Styled.AdminFeedbackStars>
      </Styled.AdminFeedbackStarsBlock>
      <Styled.AdminCompanyName className="namu">
        {feedback.companyName}
      </Styled.AdminCompanyName>
      <Styled.AdminFeedbackText className="namu">
        {feedback.text}
      </Styled.AdminFeedbackText>
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
