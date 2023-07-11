import React from "react";
import { SplitBrackets } from "../../utils/splitBrackets";
import * as Styled from "../../styles/HomePage/CardsBlock.styled";
import BigNumber from "./BigNumber";
import secondImg from "../../../public/HomePageDecoration/secondCardImg.svg";
import thirdImg from "../../../public/HomePageDecoration/thirdCardImg.svg";
import fourthImg from "../../../public/HomePageDecoration/fourthCardImg.svg";
import secondImgMobile from "../../../public/HomePageDecoration/secondCardImgMobile.svg";
import thirdImgMobile from "../../../public/HomePageDecoration/thirdCardImgMobile.svg";
import fourthImgMobile from "../../../public/HomePageDecoration/fourthCardImgMobile.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { ICard } from "../../types/Admin/Response.types";

interface ICardItemProps {
  idx: number;
  item: [string, ICard];
}

const CardItem = ({ item, idx }: ICardItemProps) => {
  const { width } = useWindowDimension();

  const arrOfImages =
    width && width <= 475
      ? [null, secondImgMobile, thirdImgMobile, fourthImgMobile]
      : [null, secondImg, thirdImg, fourthImg];

  return (
    <Styled.CardContainer>
      {width && arrOfImages[idx] !== null && (
        <Styled.CardImage
          src={arrOfImages[idx].src}
          alt="card img"
          loading="lazy"
        />
      )}
      <Styled.CardTitle className={idx === 3 ? "last" : undefined}>
        <BigNumber idx={idx} />
        <Styled.CardSubtitle>{item[1].subtitle}</Styled.CardSubtitle>
      </Styled.CardTitle>
      <Styled.CardContent>
        <SplitBrackets text={item[1].text} />
      </Styled.CardContent>
    </Styled.CardContainer>
  );
};

export default CardItem;
