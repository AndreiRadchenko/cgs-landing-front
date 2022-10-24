import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";
import AdminServiceMobileAuditContent from "../../components/Admin/Services/MobileAudit/AdminServiceMobileAuditContent";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

const AdminServiceMobileAudit = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminServiceMobileAuditContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceMobileAudit;
