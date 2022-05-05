import Image from "next/image";
import React from "react";
import * as Styled from "../../../../styles/AdminPage";
import UpArrow from "../../../../../public/upArrowSidebar.svg";
import DownArrow from "../../../../../public/downArrowSidebar.svg";
import { IMenuProps } from "./dropDownTypes";

const ChooseElementBanner = ({
  text = "category",
  isDropped,
  setIsDropped,
  value,
}: IMenuProps) => {
  const trigger = () => setIsDropped!((prev) => !prev);

  return (
    <Styled.AdminDropDownMenuBanner>
      {value ? (
        <span>{value}</span>
      ) : (
        <Styled.AdminComment>{text}</Styled.AdminComment>
      )}
      <Styled.AdminPointer onClick={trigger}>
        <Image src={isDropped ? UpArrow : DownArrow} />
      </Styled.AdminPointer>
    </Styled.AdminDropDownMenuBanner>
  );
};

export default ChooseElementBanner;
