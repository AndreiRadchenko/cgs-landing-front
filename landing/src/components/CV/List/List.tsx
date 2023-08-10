import React from "react";
// import Image from "next/image";

import * as Styled from "./List.styled";
import { ListItem } from "./ListItem/ListItem";

export const List = ({ data }: any) => {
  return (
    <Styled.ListWrapper>
      {data.map((elem: {}) => {
        <ListItem info={elem} />;
      })}
    </Styled.ListWrapper>
  );
};
