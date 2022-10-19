import { AdminMainHeader } from "../../../styles/AdminPage";
import { AdminAuthTeamLogo } from "../../../styles/AdminAuth";
import React from "react";
import Logo from "../../HeaderNavNew/Logo";

const AdminHeader = () => {
  return (
    <AdminMainHeader>
      <AdminAuthTeamLogo>
        <Logo />
      </AdminAuthTeamLogo>
    </AdminMainHeader>
  );
};

export default AdminHeader;
