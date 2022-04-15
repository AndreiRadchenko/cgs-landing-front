import DownArrow from "./downArrow";
import * as Styled from "../../../styles/AdminPage";
import { useState } from "react";
import UpArrow from "./upArrow";
import React from "react";

const DropDownElement = ({ value }: { value: string }) => {
  const [drop, setDrop] = useState(false);

  return (
    <Styled.AdminSidebarMenuElement onClick={() => setDrop(!drop)}>
      {value} {drop ? <UpArrow /> : <DownArrow />}
      <Styled.AdminSidebarHidenElement theme={drop ? "block" : "none"}>
        something
      </Styled.AdminSidebarHidenElement>
    </Styled.AdminSidebarMenuElement>
  );
};

export default DropDownElement;
