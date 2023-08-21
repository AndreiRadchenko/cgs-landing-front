import React, { useState } from "react";
import Image from "next/image";

import * as Styled from "../../../../styles/BlogTags.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";

interface IDropdownProps {
  chosenTags: string[];
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Dropdown = ({ tags, setTags, chosenTags }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
  };
  const handleTagClick = (tag: string) => {
    if (!chosenTags.includes(tag)) setTags((old) => [...old, tag]);
  };

  return (
    <Styled.DropdownWrapper onBlur={onBlur}>
      <Styled.DropdownBanner
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "open" : undefined}
      >
        #TAGS
        <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownBanner>
      <Styled.Content className={isOpen ? "open" : undefined}>
        {tags.map((tag) => (
          <div
            onClick={() => {
              setIsOpen(false);

              handleTagClick(tag);
            }}
            key={tag}
            onMouseDown={(e) => e.preventDefault()}
          >
            {tag}
          </div>
        ))}
      </Styled.Content>
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;
