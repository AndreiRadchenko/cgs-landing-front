import React, { FC } from "react";
import * as Styled from "./CareersTicket.styled";

interface ITicketProps {
  vacancy: string;
  imgUrl: string;
}
const CareersTicket: FC<ITicketProps> = ({ vacancy, imgUrl }: ITicketProps) => {
  
  return (
    <Styled.TicketWrapper>
      <Styled.ImageWrapper>
        <Styled.BarcodeImg>
          <Styled.BarcodeText>InSight CGS to Stratosphere</Styled.BarcodeText>
        </Styled.BarcodeImg>
        <Styled.RocketImg imgUrl={imgUrl}>
          <Styled.Button content='Lets go!' />
        </Styled.RocketImg>
      </Styled.ImageWrapper>
      <Styled.CareersWrapper>
        <Styled.CareersHeader>
          <Styled.Logo src='/logo.png' />
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
