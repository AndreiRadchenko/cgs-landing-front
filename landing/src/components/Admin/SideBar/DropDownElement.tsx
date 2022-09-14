import DownArrow from "../../../../public/downArrowSidebar.svg";
import * as Styled from "../../../styles/AdminPage";
import { useState } from "react";
import React from "react";
import { DropdownPropsInterface } from "../../../types/Admin/Admin.types";
import { useRouter } from "next/router";

const DropDownElement = ({
  value,
  route,
  children,
}: DropdownPropsInterface) => {
  const [isShown, setIsShown] = useState(false);

  const router = useRouter();
  const currentPath =
    router.pathname.split("/")[router.pathname.split("/").length - 1];

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsShown(!isShown);
  };

  const push = () => route && router.push(route);

  return (
    <Styled.AdminSidebarMenuElement itemProp={route} property={currentPath}>
      <span onClick={route ? push : onClick}>{value + " "}</span>
      <Styled.Image
        className={isShown ? "open" : undefined}
        onClick={onClick}
        src={DownArrow.src}
        alt="sidebar arrow img"
      />
      <Styled.AdminSidebarHidenElement className={isShown ? "flex" : undefined}>
        {children}
      </Styled.AdminSidebarHidenElement>
    </Styled.AdminSidebarMenuElement>
  );
};

export default DropDownElement;
