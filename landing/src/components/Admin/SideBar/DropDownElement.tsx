import * as Styled from "../../../styles/AdminPage";
import { useState } from "react";
import React from "react";
import { DropdownPropsInterface } from "../../../types/Admin/Admin.types";
import { useRouter } from "next/router";
import { DownArrow } from "./ListItemImages";

const DropDownElement = ({
  Icon,
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

  const handleBlur = () => setIsShown(false);

  return (
    <Styled.AdminSidebarMenuElement
      itemProp={route}
      property={currentPath}
      className="isDropDown"
    >
      <Styled.ListItemName
        className={isShown ? "open" : undefined}
        onClick={route ? push : onClick}
        tabIndex={0}
        onBlur={handleBlur}
      >
        <Icon open={isShown} />
        {value + " "}
      </Styled.ListItemName>
      <DownArrow onClick={onClick} open={isShown} />
      <Styled.AdminSidebarHidenElement
        className={isShown ? undefined : "hidden"}
      >
        {children}
      </Styled.AdminSidebarHidenElement>
    </Styled.AdminSidebarMenuElement>
  );
};

export default DropDownElement;
