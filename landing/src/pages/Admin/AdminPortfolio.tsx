import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "@tanstack/react-query";
import * as Styled from "../../styles/AdminPage";
import PortfolioPage from "../../components/Admin/Portfolio";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

const AdminPortfolio = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <PortfolioPage />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Somethimg went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminPortfolio;
