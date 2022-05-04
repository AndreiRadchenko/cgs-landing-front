import React, { useState } from "react";
import * as Styled from "../../../../styles/AdminPage";
import ChooseElementBanner from "./chooseElementBanner";
import { IMenuProps } from "./dropDownTypes";
import MenuElementsRender from "./ElementsList";

const AdminDropDown = ({ menu, setValue, value }: IMenuProps) => {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <div>
      <Styled.AdminSubTitle>Add a new case</Styled.AdminSubTitle>
      <Styled.AdminDropDownMenu>
        <ChooseElementBanner
          value={value!}
          isDropped={isDropped}
          setIsDropped={setIsDropped}
        />
        {isDropped ? (
          <MenuElementsRender
            menu={menu}
            setValue={setValue}
            setIsDropped={setIsDropped}
          />
        ) : null}
      </Styled.AdminDropDownMenu>
    </div>
  );
};

export default AdminDropDown;
