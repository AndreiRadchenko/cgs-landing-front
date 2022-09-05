import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "react-query";
import AdminServiceUxUiContent from "../../components/Admin/Services/UxUi/AdminServiceUxUiContext";
import * as Styled from "../../styles/AdminPage";

const AdminUxUi = () => {
  const { data } = useQuery(queryKeys.validToken, () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <AdminServiceUxUiContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong...
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminUxUi;