﻿import React from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import * as Styled from "../../styles/AdminPage";
import AdminAboutUsContent from "../../components/Admin/AboutUs/AdminAboutUsContent";

const AdminAboutUs = () => {
  const { data } = useQuery(queryKeys.validToken, () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <Styled.AdminWrapper>
      <AdminSidebar />
      <AdminAboutUsContent />
    </Styled.AdminWrapper>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminAboutUs;