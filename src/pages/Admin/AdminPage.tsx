import React from "react";
import AdminMainContent from "../../components/AdminPageGlobal/AdminMainContent";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";

const AdminAuthorized = () => {
  return (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <AdminMainContent />
    </Styled.AdminWrapper>
  );
};

export default AdminAuthorized;
