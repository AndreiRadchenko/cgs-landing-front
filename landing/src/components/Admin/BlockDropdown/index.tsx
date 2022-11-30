import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import ArrowDown from "../../../../public/arrowWhiteDown.svg";
import Image from "next/image";

interface IDropdownProps {
  title: string;
  children: JSX.Element;
  styles?: any;
}

const BlockDropdown = ({ title, children, styles }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const changeModalState = () => setIsOpen((prevState) => !prevState);

  return (
    <Styled.BlockDropdown {...styles}>
      <Styled.BlockDropdownHeader onClick={changeModalState}>
        <Styled.BlockDropdownHeaderTitle>
          {title}
        </Styled.BlockDropdownHeaderTitle>
        <Styled.BlockDropdownHeaderIcon rotate={!isOpen}>
          <Image width={13} height={7} src={ArrowDown.src} alt="Arrow" />
        </Styled.BlockDropdownHeaderIcon>
      </Styled.BlockDropdownHeader>
      {isOpen && (
        <Styled.BlockDropdownContent>{children}</Styled.BlockDropdownContent>
      )}
    </Styled.BlockDropdown>
  );
};

export default BlockDropdown;
