import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/HomePage/CardsBlock.styled";
import CardItem from "./CardItem";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const CardsBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.CardsBlock;

  const title = "Our Process";
  
  return (
    <>
      <Styled.Title>{title}</Styled.Title>
      <MobileInfiniteText title={title} />
      <Styled.CardsWrapper>
        {data &&
          Object.entries(data).map((item, idx) => (
            <CardItem item={item} idx={idx} key={idx} />
          ))}
      </Styled.CardsWrapper>
    </>
  );
};

export default CardsBlock;
