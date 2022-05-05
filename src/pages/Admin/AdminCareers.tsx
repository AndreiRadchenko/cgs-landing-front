import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import CareersMainContent from "../../components/Admin/Global/CareersMainContent";
import * as Styled from "../../styles/AdminPage";

const AdminCareersPage = () => {
  return (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <CareersMainContent />
    </Styled.AdminWrapper>
  );
};

export default AdminCareersPage;
