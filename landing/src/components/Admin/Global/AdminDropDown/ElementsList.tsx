import React from "react";
import * as Styled from "../../../../styles/AdminPage";
import { IMenuProps } from "./dropDownTypes";

const MenuElementsRender = ({
  menu,
  optionsMenu,
  setValue,
  setIsDropped,
  className,
}: IMenuProps) => {
  const select = (i: string) => () => {
    setValue!(i);
    setIsDropped!(false);
  };

  return (
    <Styled.AdminDropDownMenuList className={className}>
      {menu
        ? menu!.map((i, ind) => (
            <Styled.AdminDropDownMenuElement
              onClick={select(i)}
              key={`dropElement${ind}`}
            >
              {i}
            </Styled.AdminDropDownMenuElement>
          ))
        : optionsMenu!.map((i, ind) => (
            <Styled.AdminDropDownMenuElement
              onClick={select(i.optionType)}
              key={`dropElement${ind}`}
            >
              {i.optionText}
            </Styled.AdminDropDownMenuElement>
          ))}
    </Styled.AdminDropDownMenuList>
  );
};

export default MenuElementsRender;
