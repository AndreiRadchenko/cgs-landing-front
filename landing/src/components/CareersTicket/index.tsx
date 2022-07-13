import React, { FC } from "react";
import * as Styled from "./CareersTicket.styled";
import Link from "next/link";
import Outer from "./outer.svg";
import Inner from "./inner.svg";

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
            <Styled.TicketDataPosition>INTERN</Styled.TicketDataPosition>
            <Styled.Divider />
            <Styled.TicketPositionContainer>
              <Styled.TicketPositionTitle>
                BACK-END DEVELOPER
              </Styled.TicketPositionTitle>
              <Styled.TicketPositionStack>NODEJS</Styled.TicketPositionStack>
            </Styled.TicketPositionContainer>
          </Styled.TicketDataContainer>
        </Styled.TicketInnerSvgWrapper>
      </Styled.TicketContainer>
    </>
  );
  // <Styled.TicketWrapper>
  //   <Styled.ImageWrapper>
  //     <Styled.BarcodeImg>
  //       <Styled.BarcodeText>InSight CGS to Stratosphere</Styled.BarcodeText>
  //     </Styled.BarcodeImg>
  //     <Styled.RocketImg imgUrl={imgUrl}>
  //       {route ? (
  //         <Link href="/lets-go">
  //           <a onClick={handleClick}>
  //             <Styled.Button />
  //           </a>
  //         </Link>
  //       ) : (
  //         <Styled.Button />
  //       )}
  //     </Styled.RocketImg>
  //   </Styled.ImageWrapper>
  //   <Styled.CareersWrapper>
  //     <Styled.CareersHeader>
  //       <Styled.Logo src="/logo.svg" />
  //       <Styled.HeaderText>M2M142989575714</Styled.HeaderText>
  //     </Styled.CareersHeader>
  //     <Styled.TicketText>BOARDING PASS: CGS 2022</Styled.TicketText>
  //     <Styled.BottomContainer>
  //       <Styled.BottomTitle>{vacancy}</Styled.BottomTitle>
  //       <Styled.BottomList>
  //         <Styled.ListWrapper>
  //           <Styled.BottomText>LAUNCH SITE</Styled.BottomText>
  //           <Styled.SubTitle>CGS SLACK WORKSPACE</Styled.SubTitle>
  //         </Styled.ListWrapper>
  //         <Styled.ListWrapper>
  //           <Styled.BottomText>ARRIVAL SITE</Styled.BottomText>
  //           <Styled.SubTitle>THE STRATOSPHERE</Styled.SubTitle>
  //         </Styled.ListWrapper>
  //         <Styled.ListWrapper>
  //           <Styled.BottomText>ROCKET</Styled.BottomText>
  //           <Styled.SubTitle>ATLAS V-541</Styled.SubTitle>
  //         </Styled.ListWrapper>
  //       </Styled.BottomList>
  //     </Styled.BottomContainer>
  //   </Styled.CareersWrapper>
  // </Styled.TicketWrapper>
};

export default CareersTicket;
