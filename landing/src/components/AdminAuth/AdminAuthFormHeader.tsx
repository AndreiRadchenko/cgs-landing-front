import Image from "next/image";
import logo from "../../../public/logo.svg";
import * as Styled from "../../styles/AdminAuth";
import React from "react";

const AdminAuthFormHeader = () => {
  return (
    <Styled.AdminFormHeader>
      <Styled.AdminAuthTeamLogo>
        <Image alt="logo" src={logo} />
      </Styled.AdminAuthTeamLogo>
    </Styled.AdminFormHeader>
  );
};

export default AdminAuthFormHeader;
