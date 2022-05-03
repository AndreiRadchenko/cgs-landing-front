import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import VacancyMainContent from "../../components/Admin/Global/VacancyMainContent";
import * as Styled from "../../styles/AdminPage";

const AdminVacancyPage = () => {
  return (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <VacancyMainContent />
    </Styled.AdminWrapper>
  );
};

export default AdminVacancyPage;
