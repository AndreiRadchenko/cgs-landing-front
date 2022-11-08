import DownArrow from "../../../../public/downArrowSidebar.svg";
import * as Styled from "../../../styles/AdminPage";
import { useState } from "react";
import React from "react";
import { IBlockDropDown } from "../../../types/Admin/Admin.types";

const AdminBlockDropDown = ({ title, children }: IBlockDropDown) => {
  const [isShown, setIsShown] = useState(false);

  const onClick = () => {
    setIsShown(!isShown);
  };

  return (
    <Styled.AdminDropDownWrapper>
      <Styled.AdminTitleImageWrap onClick={onClick}>
        <Styled.AdminBlockTitle>{title}</Styled.AdminBlockTitle>
        <Styled.Image
          className={isShown ? "open" : undefined}
          onClick={onClick}
          src={DownArrow.src}
          alt="sidebar arrow img"
        />
      </Styled.AdminTitleImageWrap>
      <Styled.AdminBlockHiddenContent
        className={isShown ? undefined : "hidden"}
      >
        {children}
      </Styled.AdminBlockHiddenContent>
    </Styled.AdminDropDownWrapper>
  );
};

export default AdminBlockDropDown;
