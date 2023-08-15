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
  const [linkHover, setLinkHover] = useState(false);

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
      <Styled.ListItemLink
        onMouseMove={() => setLinkHover(true)}
        onMouseLeave={() => setLinkHover(false)}
        href={`/cv/${item.personal.name.toLowerCase().replace(/\s+/g, '-')}-${item._id}`}
        rel="noreferrer"
        linkHover={linkHover}
      >
        {item ? <p>link</p> : <p>NDA</p>}
        <Styled.ListItemArrowContainer>
          <ButtonArrow />
        </Styled.ListItemArrowContainer>
      </Styled.ListItemLink>
    </Styled.ListItemWrapper>
  );
};
