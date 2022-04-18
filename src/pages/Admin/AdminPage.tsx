import React from "react";
import AdminMainContent from "../../components/AdminPageGlobal/AdminMainContent";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";
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
