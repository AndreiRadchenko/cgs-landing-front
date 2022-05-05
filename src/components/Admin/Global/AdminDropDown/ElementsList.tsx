import React from "react";
import * as Styled from "../../../../styles/AdminPage";
import { IMenuProps } from "./dropDownTypes";

const MenuElementsRender = ({ menu, setValue, setIsDropped }: IMenuProps) => {
  const select = () => (i: string) => {
    setValue!(i);
    setIsDropped!(false);
  };

  return (
    <Styled.AdminDropDownMenuList>
      {menu!.map((i, ind) => (
        <Styled.AdminDropDownMenuElement
          onClick={select}
          children={i}
          key={`dropElement${ind}`}
        />
      ))}
    </Styled.AdminDropDownMenuList>
  );
};

export default MenuElementsRender;
