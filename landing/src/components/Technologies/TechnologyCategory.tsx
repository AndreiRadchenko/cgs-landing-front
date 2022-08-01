import React, { FC, MouseEvent, useState } from "react";
import * as StyledThisComp from "../../styles/HomePage/Technologies.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import TechModal from "./TechModal";

interface ITechnologyCategoryProps {
  img: string;
  title: string;
  text: string;
  stack: string[];
  className?: string;
}

const TechnologyCategory: FC<ITechnologyCategoryProps> = ({
  img,
  title,
  text,
  stack,
  className,
}) => {
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
      onMouseOver={onOpen}
      onMouseLeave={onClose}
    >
      <StyledThisComp.CategoryTitle>{title}&nbsp;</StyledThisComp.CategoryTitle>
      <StyledThisComp.CategorySubtitle className={className}>
        <SplitBrackets text={text} />
      </StyledThisComp.CategorySubtitle>
      <StyledThisComp.CategoryImage src={img} alt="tech category img" />
      <TechModal data={stack} isOpen={isOpen} />
    </StyledThisComp.CategoryContainer>
  );
};

export default TechnologyCategory;
