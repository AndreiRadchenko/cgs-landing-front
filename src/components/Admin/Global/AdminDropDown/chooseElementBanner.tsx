import Image from "next/image";
import React from "react";
import * as Styled from "../../../../styles/AdminPage";
import UpArrow from "../../../../../public/upArrowSidebar.svg";
import DownArrow from "../../../../../public/downArrowSidebar.svg";

const ChooseElementBanner = ({
  text = "category",
  isDropped,
  setIsDropped,
  value,
}: {
  text?: string;
  isDropped: boolean;
  setIsDropped: (value: boolean) => void;
  value: string;
}) => {
  return (
    <Styled.AdminDropDownMenuBanner>
      {value ? (
        <span>{value}</span>
      ) : (
        <Styled.AdminComment>{text}</Styled.AdminComment>
      )}
      {isDropped ? (
        <Styled.AdminPointer onClick={() => setIsDropped(false)}>
          <Image src={UpArrow} />
        </Styled.AdminPointer>
      ) : (
        <Styled.AdminPointer onClick={() => setIsDropped(true)}>
          <Image src={DownArrow} />
        </Styled.AdminPointer>
      )}
    </Styled.AdminDropDownMenuBanner>
  );
};

export default ChooseElementBanner;
