import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/Blog.styled";
import Arrow from "../../../public/upArrowSidebar.svg";

interface IBlogDropdown {
  setFilters: (tags: string[]) => void;
  filters: string[];
  tags: string[];
  dropdownName: string;
  isHeader?: boolean;
  isTag?: boolean;
  type?: "button" | "submit";
  setEnable?: (val: boolean) => void;
  className?: string;
}

const BlogDropdown = ({
  setFilters,
  filters,
  tags,
  dropdownName,
  isTag = false,
  isHeader = false,
  type = "button",
  setEnable,
  className,
}: IBlogDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
    if (setEnable) setEnable(false);
  };

  return (
    <Styled.Dropdown onBlur={onBlur}>
      <Styled.DropdownButton
        className={isOpen ? `open ${className}` : className}
        onClick={() => setIsOpen(!isOpen)}
        isHeader={isHeader}
        type={type}
      >
        <span>{dropdownName}</span>
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? `open ` : undefined}>
        {tags.map((tag) => (
          <div
            className={filters.includes(tag) ? "checked" : ""}
            onClick={() => {
              !filters.includes(tag) && setFilters([...filters, tag]);
              setIsOpen(false);
            }}
            key={tag}
            onMouseDown={(e) => e.preventDefault()}
          >
            {isTag ? `#${tag}` : tag}
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default BlogDropdown;
