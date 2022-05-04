import React from "react";
import * as Styled from "../../../../styles/AdminPage";
import { IMenuProps } from "./dropDownTypes";

const MenuElementsRender = ({ menu, setValue, setIsDropped }: IMenuProps) => {
  const choose = (ell: string) => {
    setValue!(ell);
    setIsDropped!(false);
  };

  return (
    <Styled.AdminDropDownMenuList>
      {menu.map((i, ind) => (
        <Styled.AdminDropDownMenuElement
          onClick={() => choose(i)}
          children={i}
          key={`dropElement${ind}`}
        />
      ))}
    </Styled.AdminDropDownMenuList>
  );
};

export default MenuElementsRender;
