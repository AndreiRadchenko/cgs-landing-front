import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import * as Styled from "../../styles/AdminPage";
import logo from "./../../../public/logo.png";
import DropDownElement from "./DropDownElement";

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <Styled.AdminSidebar>
      <Image src={logo} />
      <Styled.AdminSidebarMenu>
        <DropDownElement value="home" onClick={() => router.push("AdminPage")} route="AdminPage" />
        <DropDownElement value="careers" onClick={() => router.push("AdminCareers")} route="AdminCareers" />
        <DropDownElement value="partners" onClick={() => router.push("AdminPartners")} route="AdminPartners" />
        <Styled.AdminSidebarMenuElement onClick={() => router.push("AdminSettings")} itemProp="AdminPage" property="AdminSettings">
          settings
        </Styled.AdminSidebarMenuElement>
      </Styled.AdminSidebarMenu>
    </Styled.AdminSidebar>
  );
};

export default AdminSidebar;
