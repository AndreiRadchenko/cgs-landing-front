import AuthAdminHeader from "../../components/Admin/AuthHeader";
import AdminAuthForm from "../../components/Admin/AuthForm";
import * as Styled from "../../styles/AdminAuth";
import React from "react";

const AdminPage = () => {
  return (
    <>
      <AuthAdminHeader />
      <Styled.AdminAuthPassWrapper>
        <Styled.AdminAuthPassBlock>
          <Styled.AdminAuthSubHeader>Authorization</Styled.AdminAuthSubHeader>
          <AdminAuthForm />
        </Styled.AdminAuthPassBlock>
      </Styled.AdminAuthPassWrapper>
    </>
  );
};

export default AdminPage;
