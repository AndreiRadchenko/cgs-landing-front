import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import VacancyMainContent from "../../components/Admin/Global/VacancyMainContent";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "react-query";
import * as Styled from "../../styles/AdminPage";

const AdminVacancyPage = () => {
  const { data } = useQuery(queryKeys.validToken, () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <VacancyMainContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Somethimg went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminVacancyPage;
