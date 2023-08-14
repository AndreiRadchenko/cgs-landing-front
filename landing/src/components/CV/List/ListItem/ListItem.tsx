import React, { useState } from "react";

import ButtonArrow from "../../../../utils/ButtonArrow";

import * as Styled from "./ListItem.styled";

import { CvData } from "../../../../types/Admin/AdminCv.types";

interface ListItemProps {
  item: CvData;
  i: number
}

export const ListItem = ({ item, i }: ListItemProps) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Styled.ListItemWrapper
      key={i}
      onMouseMove={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Styled.ListItemTitle>
        <Styled.ListItemName onHover={onHover}>{item.personal.name}</Styled.ListItemName>
        <Styled.ListItemPosition>{item.personal.role}</Styled.ListItemPosition>
      </Styled.ListItemTitle>
      <Styled.ListItemLink>
        {item ? (
          <a href={`/cv/${item.personal.name.toLowerCase().replace(/\s+/g, '-')}-${item._id}`}
            target="_blank"
            rel="noreferrer">
            link
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
