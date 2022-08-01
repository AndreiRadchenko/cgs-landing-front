import React, { useState } from "react";
import * as Styled from "../../../../styles/AdminPage";
import ChooseElementBanner from "./chooseElementBanner";
import { IMenuProps } from "./dropDownTypes";
import MenuElementsRender from "./ElementsList";

const AdminDropDown = ({ menu, setValue, value, className }: IMenuProps) => {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <div>
      <Styled.AdminDropDownMenu>
        <ChooseElementBanner
          value={value!}
          isDropped={isDropped}
          setIsDropped={setIsDropped}
        />
        {isDropped && (
          <MenuElementsRender
            className={className}
            menu={menu}
            setValue={setValue}
            setIsDropped={setIsDropped}
          />
        )}
      </Styled.AdminDropDownMenu>
    </div>
  );
};

export default AdminDropDown;
