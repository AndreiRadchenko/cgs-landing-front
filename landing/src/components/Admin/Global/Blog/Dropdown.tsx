import React, { useState } from "react";
import Image from "next/image";

import * as Styled from "../../../../styles/BlogTags.styled";
import Arrow from "../../../../../public/upArrowSidebar.svg";
import Basket from "../../../../../public/basket.svg";

interface IDropdownProps {
  dropdownTags: string[];
  handleRemoveTag: (tag: string) => void;
  handleChooseTag: (tag: string) => void;
}

const Dropdown = ({
  dropdownTags,
  handleRemoveTag,
  handleChooseTag,
}: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
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
        {dropdownTags.map((tag) => (
          <Styled.TagItemDropdown
            key={tag}
            onMouseDown={(e) => e.preventDefault()}
          >
            <span
              onClick={() => {
                setIsOpen(false);

                handleChooseTag(tag);
              }}
            >
              {tag}
            </span>
            <div onClick={() => handleRemoveTag(tag)}>
              <Image width={11} height={14} src={Basket.src} alt="Basket" />
            </div>
          </Styled.TagItemDropdown>
        ))}
      </Styled.Content>
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;
