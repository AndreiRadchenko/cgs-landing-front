import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import secondImg from "../../../public/HomePageDecoration/secondCardImg.svg";
import thirdImg from "../../../public/HomePageDecoration/thirdCardImg.svg";
import fourthImg from "../../../public/HomePageDecoration/fourthCardImg.svg";
import secondImgMobile from "../../../public/HomePageDecoration/secondCardImgMobile.svg";
import thirdImgMobile from "../../../public/HomePageDecoration/thirdCardImgMobile.svg";
import fourthImgMobile from "../../../public/HomePageDecoration/fourthCardImgMobile.svg";
import * as Styled from "../../styles/HomePage/CardsBlock.styled";
import { SplitBrackets } from "../../utils/splitBrackets";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import BigNumber from "./BigNumber";

const CardsBlock = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.CardsBlock;

  const arrOfImages =
    width && width <= 475
      ? [null, secondImgMobile, thirdImgMobile, fourthImgMobile]
      : [null, secondImg, thirdImg, fourthImg];

  return (
    <Styled.CardsWrapper>
      {data &&
        Object.entries(data).map((item, idx) => (
          <Styled.CardContainer key={idx}>
            {width && arrOfImages[idx] !== null && (
              <Styled.CardImage
                src={arrOfImages[idx].src}
                alt="card img"
                loading="lazy"
              />
            )}
            <Styled.CardTitle>
              <BigNumber idx={idx} />
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
