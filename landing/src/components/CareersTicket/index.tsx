import React, { FC } from "react";
import * as Styled from "./CareersTicket.styled";
import Link from "next/link";
import Outer from "../../../public/CareerDecorations/outer.svg";
import Inner from "../../../public/CareerDecorations/inner.svg";
import Star from "../../../public/CareerDecorations/star.svg";
import Background from "../../../public/CareerDecorations/background.svg";
import Arrow from "../../../public/BlogDecorations/MainPage/Arrow.svg";

interface ITicketProps {
  id?: string;
  vacancy: string;
  imgUrl: string;
  route: boolean;
}
const CareersTicket: FC<ITicketProps> = ({
  id,
  vacancy,
  imgUrl,
  route,
}: ITicketProps) => {
  const handleClick = () => {
    localStorage.setItem("vacancyId", `${id}`);
  };
  const stars = new Array(5).fill(0);

  return (
    <>
      <Styled.TicketContainer>
        <Styled.TicketOuter src={Outer.src} />
        <Styled.TicketInnerSvgWrapper>
          <svg
            width="589"
            height="236"
            viewBox="0 0 589 236"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M542.489 234H46.5109C46.5109 223.123 41.8214 212.692 33.4739 205.001C25.1265 197.311 13.805 192.99 2 192.99V43.0101C13.805 43.0101 25.1265 38.6894 33.4739 30.9985C41.8214 23.3076 46.5109 12.8766 46.5109 2H542.489C542.489 12.8766 547.179 23.3076 555.526 30.9985C563.873 38.6894 575.195 43.0101 587 43.0101V192.99C575.195 192.99 563.873 197.311 555.526 205.001C547.179 212.692 542.489 223.123 542.489 234Z"
              stroke="#1D1D1B"
              strokeWidth="2.81576"
              strokeMiterlimit="10"
              fill="#F1EFED"
            />
          </svg>
          <Styled.TicketDataContainer>
            <Styled.TicketPosition>INTERN</Styled.TicketPosition>
            <Styled.LeftDivider />
            <Styled.TicketPositionContainer>
              <Styled.TicketPositionTitle>
                BACK-END DEVELOPER
              </Styled.TicketPositionTitle>
              <Styled.TicketPositionStack>NODEJS</Styled.TicketPositionStack>
              <Styled.TicketPositionStarsContainer>
                {stars.map((_, idx) => (
                  <Styled.TicketPositionStars src={Star.src} key={idx} />
                ))}
              </Styled.TicketPositionStarsContainer>
            </Styled.TicketPositionContainer>
            <Styled.TicketDataBackground src={Background.src} />
            <Styled.RightDivider />
          </Styled.TicketDataContainer>
        </Styled.TicketInnerSvgWrapper>
        <Styled.TicketArrow src={Arrow.src} />
      </Styled.TicketContainer>
    </>
  );
};

export default CareersTicket;
