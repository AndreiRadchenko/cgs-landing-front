import React, { FC } from "react";
import * as Styled from "./CareersTicket.styled";
import Link from "next/link";

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
    <Styled.TicketWrapper>
      <Styled.ImageWrapper>
        <Styled.BarcodeImg>
          <Styled.BarcodeText>InSight CGS to Stratosphere</Styled.BarcodeText>
        </Styled.BarcodeImg>
        <Styled.RocketImg imgUrl={imgUrl}>
          {route ? (
            <Link href="/lets-go">
              <a onClick={handleClick}>
                <Styled.Button content="Lets go!" />
              </a>
            </Link>
          ) : (
            <Styled.Button content="Lets go!" />
          )}
        </Styled.RocketImg>
      </Styled.ImageWrapper>
      <Styled.CareersWrapper>
        <Styled.CareersHeader>
          <Styled.Logo src="/logo.svg" />
          <Styled.HeaderText>M2M142989575714</Styled.HeaderText>
        </Styled.CareersHeader>
        <Styled.TicketText>BOARDING PASS: CGS 2022</Styled.TicketText>
        <Styled.BottomContainer>
          <Styled.BottomTitle>{vacancy}</Styled.BottomTitle>
          <Styled.BottomList>
            <Styled.ListWrapper>
              <Styled.BottomText>LAUNCH SITE</Styled.BottomText>
              <Styled.SubTitle>CGS SLACK WORKSPACE</Styled.SubTitle>
            </Styled.ListWrapper>
            <Styled.ListWrapper>
              <Styled.BottomText>ARRIVAL SITE</Styled.BottomText>
              <Styled.SubTitle>THE STRATOSPHERE</Styled.SubTitle>
            </Styled.ListWrapper>
            <Styled.ListWrapper>
              <Styled.BottomText>ROCKET</Styled.BottomText>
              <Styled.SubTitle>ATLAS V-541</Styled.SubTitle>
            </Styled.ListWrapper>
          </Styled.BottomList>
        </Styled.BottomContainer>
      </Styled.CareersWrapper>
    </Styled.TicketWrapper>
  );
};

export default CareersTicket;
