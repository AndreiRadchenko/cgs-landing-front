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
          <Link href={ROUTE_KEYS.AdminServiceWeb}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceWeb}
            >
              Web // Desktop Development
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceMobile}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceMobile}
            >
              Mobile Development
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceCloud}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceCloud}
            >
              Cloud Solutions
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceSupport}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceSupport}
            >
              Ongoing Support // Maintenance
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceDb}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceDb}
            >
              Server & Databases
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceBlockchain}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceBlockchain}
            >
              Crypto // Blockchain Development
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminServiceUxUi}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminServiceUxUi}
            >
              UX/UI Design
            </Styled.AdminListSubItem>
          </Link>
        </DropDownElement>
        <DropDownElement value="company" Icon={CompanyIcon}>
          <Link href={ROUTE_KEYS.AdminAboutUs}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminAboutUs}
            >
              About us
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminCareers}>
            <Styled.AdminListSubItem
              itemProp={currentPath}
              property={ROUTE_KEYS.AdminCareers}
            >
              Careers
            </Styled.AdminListSubItem>
          </Link>
          <Link href={ROUTE_KEYS.AdminFaqPage}>
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
