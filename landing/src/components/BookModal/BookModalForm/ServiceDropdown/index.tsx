import React, { useState } from "react";
import * as Styled from "../../../../styles/BookModalForm/ServiceDropDown.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";
import { SplitBrackets } from "../../../../utils/splitBrackets";

interface IServiceDropdown {
  setFilter: (tag: string) => void;
  filter: string | null;
  services?: string[] | void;
  dropdownName: string;
  isHeader?: boolean;
  isTag?: boolean;
  type?: "button" | "submit";
  setEnable?: (val: boolean) => void;
  className?: string;
}

const ServiceDropdown = ({
  setFilter,
  services,
  dropdownName,
  setEnable,
}: IServiceDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
    if (setEnable) setEnable(false);
  };

  return (
    <Styled.Dropdown onBlur={onBlur}>
      <Styled.DropdownButton
        className={isOpen ? "open" : "className"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{dropdownName}</span>
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? `open ` : undefined}>
        {services?.map((option) => (
          <div
            onClick={() => {
              setFilter(option);
              setIsOpen(false);
            }}
            key={option}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SplitBrackets text={option} />
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default ServiceDropdown;
