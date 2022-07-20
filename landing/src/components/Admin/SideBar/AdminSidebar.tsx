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

        <DropDownElement value="blog" route={ROUTE_KEYS.AdminBlog} />

        <DropDownElement value="FAQ" route={ROUTE_KEYS.AdminFaqPage} />

        <DropDownElement value="About Us" route={ROUTE_KEYS.AdminAboutUs} />
        <DropDownElement
          value="portfolio"
          route={ROUTE_KEYS.AdminPortfolioPage}
        />

        <DropDownElement value="careers" route={ROUTE_KEYS.AdminCareers}>
          <Link href={ROUTE_KEYS.AdminVacancy}>
            <a>vacancy info </a>
          </Link>
        </DropDownElement>

        <DropDownElement value="partners" route={ROUTE_KEYS.AdminPartners}>
          no page
        </DropDownElement>

        <Styled.AdminSidebarMenuElement
          onClick={pushSetting}
          itemProp="AdminPage"
          property={ROUTE_KEYS.AdminSettings}
        >
          settings
        </Styled.AdminSidebarMenuElement>
        <Styled.AdminSidebarMenuElement
          onClick={pushBlockchain}
          itemProp="AdminPage"
          property={ROUTE_KEYS.AdminBlockchain}
        >
          blockchain
        </Styled.AdminSidebarMenuElement>
      </Styled.AdminSidebarMenu>
    </Styled.AdminSidebar>
  );
};

export default AdminSidebar;
