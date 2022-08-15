import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ROUTE_KEYS } from "../../../consts";
import * as Styled from "../../../styles/AdminPage";
import logo from "./../../../../public/logo.svg";
import DropDownElement from "./DropDownElement";

const AdminSidebar = () => {
  const router = useRouter();
  const pushSetting = () => router.push(ROUTE_KEYS.AdminSettings);
  const pushBlockchain = () => router.push(ROUTE_KEYS.AdminBlockchain);
  const pushBlog = () => router.push(ROUTE_KEYS.AdminBlog);
  const pushPortfolio = () => router.push(ROUTE_KEYS.AdminPortfolioPage);

  const currentPath =
    router.pathname.split("/")[router.pathname.split("/").length - 1];

  return (
    <Styled.AdminSidebar>
      <Styled.AdminSidebarLogo>
        <Image src={logo} alt={"logo"} />
      </Styled.AdminSidebarLogo>
      <Styled.AdminSidebarMenu>
        <DropDownElement value="home" route={ROUTE_KEYS.AdminPage}>
          <Link href={ROUTE_KEYS.AdminPortfolio}>
            <a>portfolio</a>
          </Link>
        </DropDownElement>
        <Styled.AdminSidebarMenuElement
          onClick={pushPortfolio}
          itemProp={currentPath}
          property={ROUTE_KEYS.AdminPortfolioPage}
        >
          portfolio
        </Styled.AdminSidebarMenuElement>
        <DropDownElement value="service">
          <Link href={ROUTE_KEYS.AdminServiceMobile}>
            <a>Mobile Development</a>
          </Link>
        </DropDownElement>
        <DropDownElement value="service">
          <Link href={ROUTE_KEYS.AdminServiceDb}>
            <a>db solutions</a>
          </Link>
        </DropDownElement>
        <DropDownElement value="company">
          <Link href={ROUTE_KEYS.AdminAboutUs}>
            <a>about us</a>
          </Link>
          <Link href={ROUTE_KEYS.AdminCareers}>
            <a>careers</a>
          </Link>
          <Link href={ROUTE_KEYS.AdminFaqPage}>
            <a>FAQ</a>
          </Link>
        </DropDownElement>
        <Styled.AdminSidebarMenuElement
          onClick={pushBlog}
          itemProp={currentPath}
          property={ROUTE_KEYS.AdminBlog}
        >
          blog
        </Styled.AdminSidebarMenuElement>

        <Styled.AdminSidebarMenuElement
          onClick={pushSetting}
          itemProp={currentPath}
          property={ROUTE_KEYS.AdminSettings}
        >
          settings
        </Styled.AdminSidebarMenuElement>
        <Styled.AdminSidebarMenuElement
          onClick={pushBlockchain}
          itemProp={currentPath}
          property={ROUTE_KEYS.AdminBlockchain}
        >
          blockchain
        </Styled.AdminSidebarMenuElement>
      </Styled.AdminSidebarMenu>
    </Styled.AdminSidebar>
  );
};

export default AdminSidebar;
