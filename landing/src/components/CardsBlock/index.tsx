﻿import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import secondImg from "../../../public/HomePageDecoration/secondCardImg.svg";
import thirdImg from "../../../public/HomePageDecoration/thirdCardImg.svg";
import fourthImg from "../../../public/HomePageDecoration/fourthCardImg.svg";
import * as Styled from "../../styles/HomePage/CardsBlock.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

const CardsBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.CardsBlock;

  const arrOfImages = [null, secondImg, thirdImg, fourthImg];

  return (
    <Styled.CardsWrapper>
      {data &&
        Object.entries(data).map((item, idx) => (
          <Styled.CardContainer key={idx}>
            {arrOfImages[idx] !== null && (
              <Styled.CardImage src={arrOfImages[idx].src} alt="card img" />
            )}
            <Styled.CardTitle>
              <Styled.BigDigit>{idx + 1}</Styled.BigDigit>
              <Styled.CardSubtitle>{item[1].subtitle}</Styled.CardSubtitle>
            </Styled.CardTitle>
            <Styled.CardContent>
              <SplitBrackets text={item[1].text} />
            </Styled.CardContent>
          </Styled.CardContainer>
        ))}
    </Styled.CardsWrapper>
  );
};

export default CardsBlock;