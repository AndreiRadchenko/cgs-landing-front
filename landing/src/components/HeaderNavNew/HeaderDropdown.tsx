import React, { useState } from "react";
import * as Styled from "../../styles/HeaderDropdown.styled";
import Arrow from "../../../public/upArrowSidebar.svg";

interface IBlogDropdown {
  setFilter: (tag: string) => void;
  filter: string | null;
  tags: string[];
  dropdownName: string;
  className?: string;
}

const HeaderDropdown = ({
  setFilter,
  tags,
  dropdownName,
  className,
}: IBlogDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
  };

  return (
    <Styled.Dropdown onBlur={onBlur} className={className}>
      <Styled.DropdownButton
        className={isOpen ? `open ${className}` : className}
        onClick={
          className === "disabled" ? undefined : () => setIsOpen(!isOpen)
        }
      >
        <span>{dropdownName}</span>
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? "open" : ""}>
        {tags.map((option) => (
          <div
            onClick={() => {
              setFilter(option);
              setIsOpen(false);
            }}
            key={option}
            onMouseDown={(e) => e.preventDefault()}
          >
            {option}
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default HeaderDropdown;
