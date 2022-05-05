import DownArrow from "../../../../public/downArrowSidebar.svg";
import * as Styled from "../../../styles/AdminPage";
import { useState } from "react";
import UpArrow from "../../../../public/upArrowSidebar.svg";
import React from "react";
import Image from "next/image";
import { DropdownPropsInterface } from "../../../types/Admin/Admin.types";
import { useRouter } from "next/router";

const DropDownElement = ({
  value,
  route,
  children,
}: DropdownPropsInterface) => {
  const [isShown, setIsShown] = useState(false);

  const router = useRouter();
  const currentPath = router.pathname.split("/")[
    router.pathname.split("/").length - 1
  ];

  const onArrowClick = (e: any) => {
    e.stopPropagation();
    setIsShown(!isShown);
  };

  const push = () => router.push(route);

  return (
    <Styled.AdminSidebarMenuElement itemProp={route} property={currentPath}>
      <span onClick={push}>{value + " "}</span>
      {isShown ? (
        <span onClick={onArrowClick}>
          <Image src={UpArrow} />
        </span>
      ) : (
        <span onClick={onArrowClick}>
          <Image src={DownArrow} />
        </span>
      )}
      <Styled.AdminSidebarHidenElement theme={isShown ? "block" : "none"}>
        {children}
      </Styled.AdminSidebarHidenElement>
    </Styled.AdminSidebarMenuElement>
  );
};

export default DropDownElement;
