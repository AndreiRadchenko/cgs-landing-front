import React, { useState } from "react";
import Image from "next/image";

import Arrow from "../../../../public/upArrowSidebar.svg";

import * as Styles from "../../../styles/AdminCvPage";

interface CategoryDropdownProps {
  iserror?: boolean;
  category: string[] | undefined;
  cvCategory: string;
  handleSelectCategory: (category: string) => void;
}

const CategoryDropdown = ({
  category,
  cvCategory,
  handleSelectCategory,
  iserror,
}: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeCategory = (category: string) => {
    setIsOpen(false);
    handleSelectCategory(category);
  };

  return (
    <Styles.DropdownWrapper>
      <Styles.DropdownButton
        iserror={iserror}
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "open" : cvCategory ? "categoryText" : undefined}
      >
        {cvCategory ? <>{cvCategory}</> : <div>Category</div>}
        <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
      </Styles.DropdownButton>
      <Styles.DropdownContent className={isOpen ? "open" : undefined}>
        {category?.map((cat, idx) => (
          <div
            key={`${cat}${idx}`}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => changeCategory(cat)}
          >
            <span>{cat}</span>
          </div>
        ))}
      </Styles.DropdownContent>
    </Styles.DropdownWrapper>
  );
};

export default CategoryDropdown;
