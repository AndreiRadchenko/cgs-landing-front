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
  const is410px = window.matchMedia("(max-width: 410px)").matches;

  const onClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  const onOpen = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const svgPaths = [
    "M1 49.4453C1 45.027 4.58172 41.4453 9 41.4453H14.2538C17.9247 41.4453 21.1246 38.9469 22.0149 35.3856L28.9851 7.50503C29.8754 3.94369 33.0753 1.44531 36.7462 1.44531H214.048C217.581 1.44531 220.695 3.76266 221.71 7.14653L230.29 35.7441C231.305 39.128 234.419 41.4453 237.952 41.4453H338C342.418 41.4453 346 45.027 346 49.4453V133.445C346 137.864 342.418 141.445 338 141.445H9C4.58172 141.445 1 137.864 1 133.445V49.4453Z",
    "M1 49.4453C1 45.027 4.58172 41.4453 9 41.4453H36.2538C39.9247 41.4453 43.1246 38.9469 44.0149 35.3856L50.9851 7.50503C51.8754 3.94369 55.0753 1.44531 58.7462 1.44531H147.048C150.581 1.44531 153.695 3.76266 154.71 7.14653L163.29 35.7441C164.305 39.128 167.419 41.4453 170.952 41.4453H338C342.418 41.4453 346 45.027 346 49.4453V133.445C346 137.864 342.418 141.445 338 141.445H9C4.58172 141.445 1 137.864 1 133.445V49.4453Z",
    "M1 49.4453C1 45.027 4.58172 41.4453 9 41.4453H56.2538C59.9247 41.4453 63.1246 38.9469 64.0149 35.3856L70.9851 7.50503C71.8754 3.94369 75.0753 1.44531 78.7462 1.44531H198.048C201.581 1.44531 204.695 3.76266 205.71 7.14653L214.29 35.7441C215.305 39.128 218.419 41.4453 221.952 41.4453H338C342.418 41.4453 346 45.027 346 49.4453V133.445C346 137.864 342.418 141.445 338 141.445H9C4.58172 141.445 1 137.864 1 133.445V49.4453Z",
    "M1 49C1 44.5817 4.58172 41 9 41H56.2538C59.9247 41 63.1246 38.5016 64.0149 34.9403L70.9851 7.05971C71.8754 3.49838 75.0753 1 78.7462 1H199.048C202.581 1 205.695 3.31734 206.71 6.70122L215.29 35.2988C216.305 38.6827 219.419 41 222.952 41H338C342.418 41 346 44.5817 346 49V113C346 117.418 342.418 121 338 121H9C4.58172 121 1 117.418 1 113V49Z",
  ];

  const svgPath = svgPaths[idx];

  return (
    <div style={{ margin: is410px ? 0 : "0 auto" }}>
      <StyledThisComp.CategoryContainer
        className={`${isOpen ? "open-catrgory" : ""}`}
        onMouseOver={width && width >= 768 ? onOpen : undefined}
        onMouseLeave={width && width >= 768 ? onClose : undefined}
      >
        <StyledThisComp.BorderSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 347 143"
          fill="none"
        >
          <path d={svgPath} fill="#F1EFED" stroke="black" strokeWidth="2" />
        </StyledThisComp.BorderSvg>
        <StyledThisComp.CategoryTitleWrapper
          idx={idx}
          onClick={width && width < 767 ? () => setIsOpen(!isOpen) : undefined}
          className={className}
        >
          <StyledThisComp.InvisibleTitle
            onClick={
              width && width < 767 ? () => setIsOpen(!isOpen) : undefined
            }
            className={className}
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
        ${className}`}
        >
          <StyledThisComp.CategoryTitle
            className={idx === 3 ? "mobile" : idx === 2 ? "server" : undefined}
          >
            {title}
          </StyledThisComp.CategoryTitle>
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
        <StyledThisComp.CategorySubtitle className={className}>
          <SplitBrackets text={text} />
        </StyledThisComp.CategorySubtitle>
        <div style={{ marginTop: idx === 3 ? "-1.5em" : "-1em" }}>
          <TechModal data={stack} isOpen={isOpen} idx={idx} />
        </div>
      </StyledThisComp.CategoryContainer>
    </div>
  );
};

export default MobileTechnologyCategory;
