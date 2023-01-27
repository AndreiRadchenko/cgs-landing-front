import React, { useState } from "react";
import {
  AdminDropDownMenu,
  AdminDropDownMenuElement,
  AdminDropDownMenuList,
} from "../../../styles/AdminPage";
import { IMenuOption } from "../../../types/Admin/AdminEstimationForm.types";
import ChooseElementBanner from "../Global/AdminDropDown/chooseElementBanner";

interface IEstimationDropdownProps {
  size?: string;
  menu: IMenuOption[];
  setValue: (i: IMenuOption) => void;
  value: IMenuOption;
}

const EstimationDropdown = ({
  size = "",
  menu,
  setValue,
  value,
}: IEstimationDropdownProps) => {
  const [isDropped, setIsDropped] = useState(false);
  const selectHandler = (i: IMenuOption) => () => {
    setValue!(i);
    setIsDropped!(false);
  };
  return (
    <AdminDropDownMenu zIndex={100} size={size}>
      <ChooseElementBanner
        value={value.title!}
        isDropped={isDropped}
        setIsDropped={setIsDropped}
      />
      {isDropped && (
        <AdminDropDownMenuList>
          {menu &&
            menu!.map((i, ind) => (
              <AdminDropDownMenuElement
                onClick={selectHandler(i)}
                key={`dropElement${ind}`}
              >
                {i.title}
              </AdminDropDownMenuElement>
            ))}
        </AdminDropDownMenuList>
      )}
    </AdminDropDownMenu>
  );
};

export default EstimationDropdown;
