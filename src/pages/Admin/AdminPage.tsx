import React from "react";
import AdminMainContent from "../../components/Admin/Global";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
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
