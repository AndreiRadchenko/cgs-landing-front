import React, { FC, useState } from "react";
import * as Styled from "./CareersTicket.styled";
import Outer from "../../../public/CareerDecorations/outer.svg";
import Star from "../../../public/CareerDecorations/star.svg";
import Background from "../../../public/CareerDecorations/background.svg";
import lightBackground from "../../../public/CareerDecorations/lightBackground.svg";
import Arrow from "../../../public/BlogDecorations/MainPage/Arrow.svg";
import TicketModal from "../Careers/TicketModal";
import { ITicket } from "../../types/Admin/Response.types";

interface ITicketProps {
  ticket: ITicket;
  scrollTo?: () => void;
}
const CareersTicket: FC<ITicketProps> = ({
  ticket: { fromUs, fromYou, position, vacancy, stack, stars },
  scrollTo,
}: ITicketProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const starsArr = new Array(stars).fill(0);

  const onTicketView = () => setIsOpen(true);

  const uuid = (Math.random() + 1).toString(36).substring(7);

  !fromUs.length && fromUs.push("Nothing yet");
  !fromYou.length && fromYou.push("Nothing yet");

  return (
    <>
      <Styled.TicketContainer onClick={onTicketView}>
        <Styled.TicketInner>
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
          </Styled.TicketInnerSvgWrapper>
          <Styled.TicketPosition>{position}</Styled.TicketPosition>
          <Styled.LeftDivider />
          <Styled.TicketPositionContainer>
            <Styled.TicketPositionTitle>{vacancy}</Styled.TicketPositionTitle>
            <Styled.TicketPositionStack>
              {stack.join(", ")}
            </Styled.TicketPositionStack>
            <Styled.TicketPositionStarsContainer>
              {starsArr.map((_, idx) => (
                <Styled.TicketPositionStars
                  src={Star.src}
                  key={`${idx + uuid}`}
                />
              ))}
            </Styled.TicketPositionStarsContainer>
          </Styled.TicketPositionContainer>
          <Styled.RightDivider />
        </Styled.TicketInner>

        <Styled.TicketDataBackground src={Background.src} />
        <Styled.TicketArrow src={Arrow.src} />
        <TicketModal
          isOpen={isOpen}
          setIsOpen={(arg) => setIsOpen(arg)}
          fromUs={fromUs}
          fromYou={fromYou}
          scrollTo={scrollTo}
        />
      </Styled.TicketContainer>
    </>
  );
};

export default CareersTicket;
