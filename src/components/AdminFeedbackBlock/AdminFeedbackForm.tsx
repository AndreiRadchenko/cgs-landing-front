import React from "react";
import * as Styled from "../../styles/AdminPage";
import AdminStars from "./AdminStars";

const AdminFeedbackForm = () => {
  return (
    <div>
      <Styled.AdminStarsGrid>
        <Styled.AdminInput placeholder="Name" />
        <Styled.AdminStarsFlex>
        <AdminStars value={1} size={38} />
        </Styled.AdminStarsFlex>
      </Styled.AdminStarsGrid>
      <div>
        <Styled.AdminInput placeholder="Company" />
        <Styled.AdminInput placeholder="Position" />
        <Styled.AdminInput placeholder="Text" />
        <Styled.AdminSubTitle>Button</Styled.AdminSubTitle>
        <Styled.AdminInput placeholder="Text" />
        <Styled.AdminBigButton>Add Review</Styled.AdminBigButton>
      </div>
    </div>
  );
};

export default AdminFeedbackForm;
