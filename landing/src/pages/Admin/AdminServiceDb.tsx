import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";
import AdminServiceDbContent from "../../components/Admin/Services/Db/AdminServiceDbContent";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

const AdminServiceDb = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminServiceDbContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceDb;
