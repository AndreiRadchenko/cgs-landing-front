import React, { useState } from "react";
import * as Styled from "../../styles/HeaderDropdown.styled";
import Arrow from "../../../public/upArrowSidebar.svg";
import Link from "next/link";
import { navigationRoutesLinks } from "../../utils/variables";

interface IBlogDropdown {
  tags: string[];
  dropdownName: string;
  className?: string;
}

const HeaderDropdown = ({ tags, dropdownName, className }: IBlogDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onBlur = () => {
    setIsOpen(false);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
    e.currentTarget.focus();
  };

  const handleContentClick = () => setIsOpen(false);

  return (
    <Styled.Dropdown onBlur={onBlur}>
      <Styled.DropdownButton
        className={isOpen ? `open ${className}` : className}
        onClick={onClick}
      >
        <span>{dropdownName}</span>
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? "open" : ""}>
        {tags.map((option) => (
          <div
            onClick={handleContentClick}
            key={option}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Link
              href={
                navigationRoutesLinks[
                  option as keyof typeof navigationRoutesLinks
                ]
              }
              passHref
            >
              <Styled.Link>{option}</Styled.Link>
            </Link>
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default HeaderDropdown;
