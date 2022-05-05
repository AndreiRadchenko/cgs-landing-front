import React from "react";
import Portfolio from "../../components/Admin/Portfolio";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";

const AdminPortfolio = () => {
  return (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <Portfolio />
    </Styled.AdminWrapper>
  );
};

export default AdminPortfolio;
