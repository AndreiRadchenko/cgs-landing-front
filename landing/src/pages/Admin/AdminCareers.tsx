import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import CareersMainContent from "../../components/Admin/Global/CareersMainContent";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "react-query";
import * as Styled from "../../styles/AdminPage";

const AdminCareersPage = () => {
  const { data } = useQuery(queryKeys.validToken, () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <CareersMainContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Somethimg went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminCareersPage;
