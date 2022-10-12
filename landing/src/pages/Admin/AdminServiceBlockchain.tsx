import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminServiceBlockchainContent from "../../components/Admin/Services/Blockchain/AdminServiceBlockchainContent";
import * as Styled from "../../styles/AdminPage";

const AdminServiceBlockchain = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <AdminServiceBlockchainContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceBlockchain;
