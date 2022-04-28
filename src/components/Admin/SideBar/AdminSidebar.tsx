import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ROUTE_KEYS } from "../../../consts";
import * as Styled from "../../../styles/AdminPage";
import logo from "./../../../../public/logo.png";
import DropDownElement from "./DropDownElement";

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <Styled.AdminSidebar>
      <Styled.AdminSidebarLogo>
        <Image src={logo} />
      </Styled.AdminSidebarLogo>
      <Styled.AdminSidebarMenu>
        <DropDownElement
          value="home"
          onClick={() => router.push(ROUTE_KEYS.AdminPage)}
          route={ROUTE_KEYS.AdminPage}
        />
        <DropDownElement
          value="careers"
          onClick={() => router.push(ROUTE_KEYS.AdminCareers)}
          route={ROUTE_KEYS.AdminCareers}
        />
        <DropDownElement
          value="partners"
          onClick={() => router.push(ROUTE_KEYS.AdminPartners)}
          route={ROUTE_KEYS.AdminPartners}
        />
        <Styled.AdminSidebarMenuElement
          onClick={() => router.push(ROUTE_KEYS.AdminSettings)}
          itemProp="AdminPage"
          property={ROUTE_KEYS.AdminSettings}
          children="settings"
        />
      </Styled.AdminSidebarMenu>
    </Styled.AdminSidebar>
  );
};

export default AdminSidebar;
