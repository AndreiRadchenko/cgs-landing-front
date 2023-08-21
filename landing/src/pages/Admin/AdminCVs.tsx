import React from "react";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import * as Styled from "../../styles/AdminPage";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminCVsContent from "../../components/Admin/CVs/AdminCVsContent";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";

const AdminCVsPage = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminCVsContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminCVsPage;
