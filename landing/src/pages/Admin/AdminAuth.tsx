import React from "react";
import AuthAdminHeader from "../../components/AdminAuth/AuthHeader";
import AdminAuthForm from "../../components/AdminAuth/AuthForm";
import * as Styled from "../../styles/AdminAuth";

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
