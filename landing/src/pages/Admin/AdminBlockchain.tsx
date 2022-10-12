import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminBlockchainMainContent from "../../components/Admin/Global/AdminBlockchainMainContent";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "@tanstack/react-query";

import * as Styled from "../../styles/AdminPage";

const AdminBlockchain = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );
  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <AdminBlockchainMainContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Somethimg went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlockchain;
