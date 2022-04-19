import DownArrow from "../../../public/downArrowSidebar.svg";
import * as Styled from "../../styles/AdminPage";
import { useState } from "react";
import UpArrow from "../../../public/upArrowSidebar.svg";
import React from "react";
import Image from "next/image";
import { DropdownPropsInterface } from "../../types/Admin/Admin.types";
import { useRouter } from "next/router";

const DropDownElement = ({ value, onClick, route }: DropdownPropsInterface) => {
  const [drop, setDrop] = useState(false);

  const router = useRouter();
  const currentPath = router.pathname.split("/")[router.pathname.split("/").length-1]

  const onArrowClick = (e: any) => {
    e.stopPropagation();
    setDrop(!drop);
  };

  return (
    <Styled.AdminSidebarMenuElement onClick={onClick} itemProp={route} property={currentPath}>
      {value}{" "}
      {drop ? (
        <span onClick={onArrowClick}>
          <Image src={UpArrow} />
        </span>
      ) : (
        <span onClick={onArrowClick}>
          <Image src={DownArrow} />
        </span>
      )}
      <Styled.AdminSidebarHidenElement theme={drop ? "block" : "none"}>
        something
      </Styled.AdminSidebarHidenElement>
    </Styled.AdminSidebarMenuElement>
  );
};

export default DropDownElement;
