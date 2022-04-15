import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import logo from "./../../../../public/logo.png";
import DropDownElement from "./DropDownElement";

const AdminSidebar = () => {
  return (
    <Styled.AdminPageSidebar>
      <Image src={logo} />
      <Styled.AdminPageSidebarMenu>
        {["home", "careers", "partners"].map((i) => (
          <DropDownElement value={i} key={Math.random()} />
        ))}
        <Styled.AdminSidebarMenuElement key={Math.random()}>
          settings
        </Styled.AdminSidebarMenuElement>
      </Styled.AdminPageSidebarMenu>
    </Styled.AdminPageSidebar>
  );
};

export default AdminSidebar;
