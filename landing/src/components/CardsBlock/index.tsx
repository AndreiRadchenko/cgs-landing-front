import React from "react";
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

  return (
    <>
      <Styled.Title>FOLLOWING SUCH A FLOW:</Styled.Title>
      <MobileInfiniteText title={"FOLLOWING SUCH A FLOW:"} />
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
