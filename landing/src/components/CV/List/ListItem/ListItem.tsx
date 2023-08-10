import React from "react";
// import Image from "next/image";

import * as Styled from "./ListItem.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";

export const ListItem = ({ info }: any) => {
  return (
    <Styled.ListItemWrapper>
      <Styled.ListItemTitle>
        <Styled.ListItemName></Styled.ListItemName>
        <Styled.ListItemPosition></Styled.ListItemPosition>
      </Styled.ListItemTitle>
      <Styled.ListItemLink>
        {info ? (
          <a href={info} target="_blank" rel="noreferrer">
            project link
          </a>
        ) : (
          <span>NDA</span>
        )}
        <Styled.ListItemArrowContainer>
          <ButtonArrow />
        </Styled.ListItemArrowContainer>
      </Styled.ListItemLink>
    </Styled.ListItemWrapper>
  );
};
