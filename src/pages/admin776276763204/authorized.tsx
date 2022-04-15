import React from "react";
import AdminMainContent from "../../components/AdminPage/AdminMainContent";
import AdminSidebar from "../../components/AdminPage/SideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";

const AdminAuthorized = () => {
  return (
    <Styled.AdminPageWrapper>
      <AdminSidebar />
      <AdminMainContent />
    </Styled.AdminPageWrapper>
  );
};

export default AdminAuthorized;
