import DownArrow from "../../../../public/downArrowSidebar.svg";
import * as Styled from "../../../styles/AdminPage";
import { useState } from "react";
import React from "react";
import { IBlockDropDownProps } from "../../../types/Admin/Admin.types";

const AdminBlockDropDown = ({
  title,
  style,
  children,
  nextBtn = false,
  onNextClick,
  defaultOpen = false,
}: IBlockDropDownProps) => {
  const [isShown, setIsShown] = useState(defaultOpen);

  const onClick = () => {
    setIsShown(!isShown);
  };

  return (
    <Styled.AdminDropDownWrapper style={style}>
      <Styled.NextButtonWrapper>
        <Styled.AdminTitleImageWrap onClick={onClick}>
          <Styled.AdminBlockTitle>{title}</Styled.AdminBlockTitle>
          <Styled.Image
            className={isShown ? "open" : undefined}
            onClick={onClick}
            src={DownArrow.src}
            alt="sidebar arrow img"
          />
        </Styled.AdminTitleImageWrap>
        {nextBtn && (
          <Styled.NextButton onClick={onNextClick}>
            [ +add next ]
          </Styled.NextButton>
        )}
      </Styled.NextButtonWrapper>
      <Styled.AdminBlockHiddenContent
        className={isShown ? undefined : "hidden"}
      >
        {children}
      </Styled.AdminBlockHiddenContent>
    </Styled.AdminDropDownWrapper>
  );
};

export default AdminBlockDropDown;
