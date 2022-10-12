import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";
import AdminServiceMobileContent from "../../components/Admin/Services/Mobile/AdminServiceMobileContent";

const AdminServiceMobile = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <AdminServiceMobileContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceMobile;
