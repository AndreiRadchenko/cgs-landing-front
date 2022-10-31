import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ROUTE_KEYS } from "../../../consts";
import * as Styled from "../../../styles/AdminPage";
import DropDownElement from "./DropDownElement";
import {
  BlogIcon,
  CompanyIcon,
  HomeIcon,
  PortfolioIcon,
  ServiceIcon,
} from "./ListItemImages";

const AdminSidebar = () => {
  const router = useRouter();
  const pushBlog = () => router.push(ROUTE_KEYS.AdminBlog);
  const pushPortfolio = () => router.push(ROUTE_KEYS.AdminPortfolio);
  const pushHome = () => router.push(ROUTE_KEYS.AdminPage);

  const currentPath =
    router.pathname.split("/")[router.pathname.split("/").length - 1];

  return (
    <Styled.AdminSidebar>
      <Styled.AdminSidebarMenu>
        <Styled.AdminSidebarMenuElement
          onClick={pushHome}
          itemProp={currentPath}
          property={ROUTE_KEYS.AdminPage}
        >
          <HomeIcon />
          homepage
        </Styled.AdminSidebarMenuElement>
        <Styled.AdminSidebarMenuElement
          onClick={pushPortfolio}
          itemProp={currentPath}
          property={ROUTE_KEYS.AdminPortfolio}
        >
          <PortfolioIcon />
          portfolio
        </Styled.AdminSidebarMenuElement>
        <DropDownElement value="service" Icon={ServiceIcon}>
          <Link href={ROUTE_KEYS.AdminServiceWeb} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceWeb}
            >
              Web // Desktop Development
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceMobile} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceMobile}
            >
              Mobile Development
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceCloud} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceCloud}
            >
              Cloud Solutions
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceSupport} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceSupport}
            >
              Ongoing Support // Maintenance
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceDb} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceDb}
            >
              Server & Databases
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceBlockchain} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceBlockchain}
            >
              Crypto // Blockchain Development
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceUxUi} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceUxUi}
            >
              UX/UI Design
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceMobileAudit} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceMobileAudit}
            >
              Mobile app audit
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceWebAudit} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceWebAudit}
            >
              Web audit
            </Styled.AdminListSubItem>
          </Link>
        </DropDownElement>
        <DropDownElement value="company" Icon={CompanyIcon}>
          <Link href={ROUTE_KEYS.AdminAboutUs} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminAboutUs}
            >
              About us
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminCareers} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminCareers}
            >
              Careers
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminFaqPage} passHref>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminFaqPage}
            >
              FAQ
            </Styled.AdminListSubItem>
          </Link>
        </DropDownElement>
        <Styled.AdminSidebarMenuElement
          onClick={pushBlog}
          itemProp={currentPath}
          property={ROUTE_KEYS.AdminBlog}
        >
          <BlogIcon />
          blog
        </Styled.AdminSidebarMenuElement>
      </Styled.AdminSidebarMenu>
    </Styled.AdminSidebar>
  );
};

export default AdminSidebar;
