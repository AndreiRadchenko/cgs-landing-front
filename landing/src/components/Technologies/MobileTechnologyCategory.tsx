import React, { FC, MouseEvent, useState } from "react";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import * as StyledThisComp from "../../styles/HomePage/MobileTechnologies.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import TechModal from "./TechModal";

interface ITechnologyCategoryProps {
  img: string;
  title: string;
  text: string;
  stack: string[];
  idx: number;
  className?: string;
}

const MobileTechnologyCategory: FC<ITechnologyCategoryProps> = ({
  title,
  text,
  stack,
  className,
  idx,
}) => {
  const { width } = useWindowDimension();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  const onOpen = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <StyledThisComp.CategoryContainer
      className={`${isOpen ? "open-catrgory" : ""}`}
      onMouseOver={width && width >= 768 ? onOpen : undefined}
      onMouseLeave={width && width >= 768 ? onClose : undefined}
    >
      <StyledThisComp.CategoryTitleWrapper
        idx={idx}
        onClick={width && width < 767 ? () => setIsOpen(!isOpen) : undefined}
        className={`${isOpen ? "open-title" : ""} 
        ${idx === 3 ? "blockchain" : ""}`}
      >
        <StyledThisComp.InvisibleTitle
          onClick={width && width < 767 ? () => setIsOpen(!isOpen) : undefined}
          className={`${isOpen ? "open-title" : ""} 
        ${idx === 3 ? "blockchain" : ""}`}
        >
          <h2>{title}</h2>

          <StyledThisComp.Arrow
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isOpen ? "open" : undefined}
          >
            <path
              d="M7.5 7.99994L0.138784 0.499939L14.8612 0.499939L7.5 7.99994Z"
              fill="black"
            />
          </StyledThisComp.Arrow>
        </StyledThisComp.InvisibleTitle>
      </StyledThisComp.CategoryTitleWrapper>
      <StyledThisComp.TitleInnerWrapper
        idx={idx}
        onClick={width && width < 767 ? () => setIsOpen(!isOpen) : undefined}
        className={`${isOpen ? "open-title" : ""} 
        ${idx === 3 ? "blockchain" : ""}`}
      >
        <StyledThisComp.CategoryTitle>{title}</StyledThisComp.CategoryTitle>

        <StyledThisComp.Arrow
          width="15"
          height="8"
          viewBox="0 0 15 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isOpen ? "open" : undefined}
        >
          <path
            d="M7.5 7.99994L0.138784 0.499939L14.8612 0.499939L7.5 7.99994Z"
            fill="black"
          />
        </StyledThisComp.Arrow>
      </StyledThisComp.TitleInnerWrapper>
      <StyledThisComp.FolderBody
        style={{ display: !isOpen ? "flex" : "none" }}
      ></StyledThisComp.FolderBody>

      <StyledThisComp.CategorySubtitle className={className}>
        <SplitBrackets text={text} />
      </StyledThisComp.CategorySubtitle>
      <TechModal data={stack} isOpen={isOpen} />
    </StyledThisComp.CategoryContainer>
  );
};

export default MobileTechnologyCategory;
