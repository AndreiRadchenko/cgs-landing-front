import Image from "next/image";
import logo from "../../../public/logo.svg";
import * as Styled from "../../styles/AdminAuth";
import React from "react";

const AuthAdminHeader = () => {
  return (
    <Styled.AdminAuthHeader>
      <Styled.AdminAuthTeamLogo>
        <Image alt="logo" src={logo} />
      </Styled.AdminAuthTeamLogo>
    </Styled.AdminAuthHeader>
  );
};

export default AuthAdminHeader;
