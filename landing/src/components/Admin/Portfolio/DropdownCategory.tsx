import React, { useEffect, useState } from "react";
import * as Styled from "../../../styles/AdminPortfolio";
import Image from "next/image";
import Arrow from "../../../../public/upArrowSidebar.svg";

import * as Styles from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio.types";

const DropdownCategory = ({ categories }: { categories: string[] }) => {
  const { values, errors, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [catArr, setCatArr] = useState<string[]>(values.categories || []);

  const changeTechHandler = (category: string) => {
    setIsOpen(false);
    setCatArr((prevState) => [category, ...prevState]);
  };
  const removeTagHandler = (idx: number) => {
    const temp = [...catArr];
    temp.splice(idx, 1);

    setCatArr(temp);
  };

  useEffect(() => {
    setFieldValue("categories", catArr);
  }, [catArr]);

  return (
    <>
      <Styled.DropdownWrapperTechnology>
        <Styled.DropdownBanner
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "open" : undefined}
        >
          {"CATEGORY"}
          <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
        </Styled.DropdownBanner>
        <Styled.Content className={isOpen ? "open" : undefined}>
          {categories?.map((cat, idx) => (
            <div key={`${cat}${idx}`} onMouseDown={(e) => e.preventDefault()}>
              <span onClick={() => changeTechHandler(cat)}>{cat}</span>
            </div>
          ))}
        </Styled.Content>
      </Styled.DropdownWrapperTechnology>
      <Styles.AdminFourthBlockFlexTag>
        {values.categories.map((cat, idx) => (
          <Styles.AdminPageFourthTechTagWrapper key={`${cat}${idx}`}>
            <Styles.AdminPageFourthTechTag>
              <span>{cat}</span>
              <span onClick={() => removeTagHandler(idx)}>x</span>
            </Styles.AdminPageFourthTechTag>
          </Styles.AdminPageFourthTechTagWrapper>
        ))}
      </Styles.AdminFourthBlockFlexTag>
    </>
  );
};

export default DropdownCategory;
