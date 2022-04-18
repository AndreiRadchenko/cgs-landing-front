import DownArrow from "../../../public/downArrowSidebar.svg";
import * as Styled from "../../styles/AdminPage";
import { useState } from "react";
import UpArrow from "../../../public/upArrowSidebar.svg";
import React from "react";
import Image from "next/image";

const DropDownElement = ({ value }: { value: string }) => {
  const [drop, setDrop] = useState(false);

  return (
    <Styled.AdminSidebarMenuElement onClick={() => setDrop(!drop)}>
      {value} {drop ? <Image src={UpArrow} /> : <Image src={DownArrow} />}
      <Styled.AdminSidebarHidenElement theme={drop ? "block" : "none"}>
        something
      </Styled.AdminSidebarHidenElement>
    </Styled.AdminSidebarMenuElement>
  );
};

export default DropDownElement;
