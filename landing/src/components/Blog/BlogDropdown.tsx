import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/Blog.styled";
import Arrow from "../../../public/upArrowSidebar.svg";
import Image from "next/image";

interface IBlogDropdown {
  setFilter: (tag: string) => void;
  filter: string | null;
  tags: string[];
  dropdownName: string;
  isHeader?: boolean;
  isTag?: boolean;
}

const BlogDropdown = ({
  setFilter,
  filter,
  tags,
  dropdownName,
  isTag = false,
  isHeader = false,
}: IBlogDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(false);
  }, [filter]);

  return (
    <Styled.Dropdown onBlur={() => setIsOpen(false)}>
      <Styled.DropdownButton
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
        isHeader={isHeader}
      >
        {dropdownName}
        <img width={12} height={12} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? "open" : ""}>
        {tags.map((tag) => (
          <div
            onClick={() => setFilter(tag)}
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
