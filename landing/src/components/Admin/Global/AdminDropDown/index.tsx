import React, { useState } from "react";
import * as Styled from "../../../../styles/AdminPage";
import ChooseElementBanner from "./chooseElementBanner";
import { IMenuProps } from "./dropDownTypes";
import MenuElementsRender from "./ElementsList";

const AdminDropDown = ({
  size = "",
  menu,
  optionsMenu,
  setValue,
  value,
  className,
}: IMenuProps) => {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <Styled.AdminDropDownMenu size={size}>
      <ChooseElementBanner
        value={value!}
        isDropped={isDropped}
        setIsDropped={setIsDropped}
      />
      {isDropped && (
        <MenuElementsRender
          className={className}
          menu={menu}
          optionsMenu={optionsMenu}
          setValue={setValue}
          setIsDropped={setIsDropped}
        />
      )}
    </Styled.AdminDropDownMenu>
  );
};

export default AdminDropDown;
