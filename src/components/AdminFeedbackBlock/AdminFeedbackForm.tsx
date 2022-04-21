import React from "react";
import * as Styled from "../../styles/AdminPage";
import AdminStars from "./AdminStars";

const AdminFeedbackForm = () => {
  return (
    <div>
      <Styled.AdminStarsGrid>
        <Styled.AdminInput rows={1} placeholder="Name" />
        <AdminStars value={1} size={38} />
      </Styled.AdminStarsGrid>
      <div>
      <Styled.AdminInput rows={1} placeholder="Company" />
      <Styled.AdminInput rows={1} placeholder="Position" />
      <Styled.AdminInput rows={3} placeholder="Text" />
      <Styled.AdminSubTitle>Button</Styled.AdminSubTitle>
      <Styled.AdminInput placeholder="Text" rows={1} />
      <Styled.AdminBigButton>Add Review</Styled.AdminBigButton>
      </div>
    </div>
  );
};

export default AdminFeedbackForm;
