import React, { useEffect, useRef, useState } from "react";
import * as Styled from "../../styles/CareersDropdown.styled";
import Arrow from "../../../public/upArrowSidebar.svg";

interface ICareersDropdown {
  setFilter: (tag: string) => void;
  filter: string | null;
  positions: string[];
  dropdownName: string;
  isHeader?: boolean;
  isTag?: boolean;
  type?: "button" | "submit";
  setEnable?: (val: boolean) => void;
  className?: string;
  toFormError: boolean;
}

const CareersDropdown = ({
  setFilter,
  positions,
  dropdownName,
  setEnable,
  toFormError
}: ICareersDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ScrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (setEnable) setEnable(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ScrollRef.current) {
        const scrollTop = ScrollRef.current.scrollTop;
        const maxScrollHeight =
          ScrollRef.current.scrollHeight - ScrollRef.current.clientHeight;
        const scrollPercentage = (scrollTop / maxScrollHeight) * 100;
        const maxTop = 250;
        const calculatedTop = Math.min(
          scrollPercentage * (maxTop / 100),
          maxTop
        );
        setScrollPosition(calculatedTop);
      }
    };
  
    if (ScrollRef.current) {
      ScrollRef.current.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (ScrollRef.current) {
        ScrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Styled.Dropdown ref={dropdownRef}>
      <div style={{borderLeft: '1.5px solid black'}}>
      <Styled.DropdownButton
        type="button"
        className={isOpen ? "open" : "className"}
        onClick={() => setIsOpen(!isOpen)}
        toFormError={toFormError && dropdownName === "Position"}
        toSelectPosition={dropdownName !== "Position"}
      >
        <span>{dropdownName}</span>
        <img width={13} height={7} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      </div>
      <Styled.DropdownContent className={isOpen ? `open ` : undefined} ref={ScrollRef}>
        {positions.map((option) => (
          <div
            onClick={() => {
              setFilter(option);
              setIsOpen(false);
            }}
            key={option}
            onMouseDown={(e) => e.preventDefault()}
          >
            {option}
          </div>
        ))}
        <Styled.DropdownScrollbarContainer>
          <Styled.DropdownScrollbar top={scrollPosition}/>
        </Styled.DropdownScrollbarContainer>
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default CareersDropdown;
