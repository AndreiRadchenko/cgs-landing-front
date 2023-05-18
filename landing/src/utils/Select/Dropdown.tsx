import React, { useState } from "react";
import Image from "next/image";

import Arrow from "../../../public/upArrowSidebar.svg";
import * as Styled from "../../styles/HomePage/General.styled";

interface IDropdown {
  setFilters: (tags: string[]) => void;
  filters: string[];
  tags: string[];
  dropdownName: string;
  isHeader?: boolean;
  isTag?: boolean;
  type?: "button" | "submit";
  setEnable?: (val: boolean) => void;
  className?: string;
  prefix?: string;
  additionalLogic?: () => void;
}

const Dropdown = ({
  setFilters,
  filters,
  tags,
  dropdownName,
  isTag = false,
  isHeader = false,
  type = "button",
  setEnable,
  className,
  prefix = "",
  additionalLogic,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
    if (setEnable) setEnable(false);
  };

  return (
    <Styled.DropdownWrapper onBlur={onBlur}>
      <Styled.DropdownButton
        className={isOpen ? `open ${className}` : className}
        onClick={() => setIsOpen(!isOpen)}
        isHeader={isHeader}
        type={type}
      >
        <span>{dropdownName}</span>
        <Image width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? `open ` : undefined}>
        {tags.map((tag) => (
          <div
            className={filters.includes(tag) ? "checked" : ""}
            onClick={() => {
              !filters.includes(tag) && setFilters([...filters, tag]);
              additionalLogic && additionalLogic();
              setIsOpen(false);
            }}
            key={tag}
            onMouseDown={(e) => e.preventDefault()}
          >
            {isTag ? `${prefix}${tag}` : tag}
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;