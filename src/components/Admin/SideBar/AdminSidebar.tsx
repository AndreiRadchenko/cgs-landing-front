import Image from "next/image";
import Link from "next/link";
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
        <DropDownElement value="home" route={ROUTE_KEYS.AdminPage}>
          <Link href={ROUTE_KEYS.AdminPortfolio}>
            <a>portfolio</a>
          </Link>
        </DropDownElement>

        <DropDownElement value="careers" route={ROUTE_KEYS.AdminCareers} />
        <DropDownElement value="partners" route={ROUTE_KEYS.AdminPartners} />

        <Styled.AdminSidebarMenuElement
          onClick={() => router.push(ROUTE_KEYS.AdminSettings)}
          itemProp="AdminPage"
          property={ROUTE_KEYS.AdminSettings}
        >
          settings
        </Styled.AdminSidebarMenuElement>
      </Styled.AdminSidebarMenu>
    </Styled.AdminSidebar>
  );
};

export default AdminSidebar;
