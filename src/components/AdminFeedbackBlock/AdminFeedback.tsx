import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IFeedback } from "../../types/Admin/Response.types";
import AdminButton from "../AdminPageGlobal/AdminButton";
import AdminStars from "./AdminStars";

const AdminFeedback = ({ feedback }: { feedback: IFeedback }) => {
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
      <Styled.AdminDeleteTextThin>delete review</Styled.AdminDeleteTextThin>
    </Styled.AdminFeedbackFrame>
  );
};

export default AdminFeedback;
