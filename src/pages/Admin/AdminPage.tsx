import React from "react";
import AdminMainContent from "../../components/AdminPageGlobal";
import AdminSidebar from "../../components/AdminSideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";

const AdminHomePage = () => {
  return (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <AdminMainContent />
    </Styled.AdminWrapper>
  );
};

export default AdminHomePage;
