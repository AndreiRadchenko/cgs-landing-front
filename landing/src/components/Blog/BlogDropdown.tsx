import React, { useEffect, useState } from "react";
import * as Styled from "../../styles/Blog.styled";
import { blogTags } from "../../utils/variables";

interface IBlogDropdown {
  setFilter: (tag: string) => void;
  filter: string | null;
  tags: string[];
}

const BlogDropdown = ({ setFilter, filter, tags }: IBlogDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(false);
  }, [filter]);

  return (
    <Styled.Dropdown>
      <Styled.DropdownButton
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        #TAGS
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? "open" : ""}>
        {tags.map((tag) => (
          <div onClick={() => setFilter(tag)} key={tag}>
            {`#${tag}`}
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default BlogDropdown;
