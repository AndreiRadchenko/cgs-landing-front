import Image from "next/image";
import React, { FC, MouseEvent, useState } from "react";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import * as StyledThisComp from "../../styles/HomePage/Technologies.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import TechModal from "./TechModal";

interface ITechnologyCategoryProps {
  img: string;
  title: string;
  link: string;
  text: string;
  stack: string[];
  idx: number;
  className?: string;
}

const TechnologyCategory: FC<ITechnologyCategoryProps> = ({
  img,
  title,
  link,
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
      onMouseOver={width && width >= 768 ? onOpen : undefined}
      onMouseLeave={width && width >= 768 ? onClose : undefined}
    >
      <StyledThisComp.CategoryTitle
        idx={idx}
        className={`${isOpen ? "open-title" : ""} 
        ${className === "blockchain" ? "blockchain-title" : ""}`}
        onClick={width && width < 767 ? () => setIsOpen(!isOpen) : undefined}
      >
        <StyledThisComp.TitleWrapper idx={idx}>
          <StyledThisComp.TitleRef
            rel="noreferrer noopener"
            href={link}
            target="blank"
          >
            {title}&nbsp;
          </StyledThisComp.TitleRef>

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
        </StyledThisComp.TitleWrapper>
      </StyledThisComp.CategoryTitle>
      <StyledThisComp.CategorySubtitle className={className}>
        <SplitBrackets text={text} />
      </StyledThisComp.CategorySubtitle>
      <TechModal data={stack} isOpen={isOpen} idx={idx} />
      <StyledThisComp.CategoryImgWrapper
        className={width && width < 767 && isOpen ? "open" : undefined}
      >
        <Image
          src={img}
          alt="tech category img"
          layout="fill"
          objectFit="contain"
        />
      </StyledThisComp.CategoryImgWrapper>
    </StyledThisComp.CategoryContainer>
  );
};

export default TechnologyCategory;
