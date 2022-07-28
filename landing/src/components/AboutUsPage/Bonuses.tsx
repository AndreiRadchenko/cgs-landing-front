import React from "react";
import * as Styled from "./AboutUs.styled";

interface IBonuses {
  subtitle: string;
  firstBonuses: string[];
  secondBonuses: string[];
}

const Bonuses = ({ subtitle, firstBonuses, secondBonuses }: IBonuses) => {
  return (
    <Styled.OurBonuses>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      <Styled.BonusesContainer>
        <div>
          {firstBonuses.map((el, idx) => (
            <Styled.BonusContainer key={idx}>
              <Styled.BonusPoint />
              <Styled.BonusText>{el}</Styled.BonusText>
            </Styled.BonusContainer>
          ))}
        </div>
        <div>
          {secondBonuses.map((el, idx) => (
            <Styled.BonusContainer key={idx}>
              <Styled.BonusPoint />
              <Styled.BonusText>{el}</Styled.BonusText>
            </Styled.BonusContainer>
          ))}
        </div>
      </Styled.BonusesContainer>
    </Styled.OurBonuses>
  );
};

export default Bonuses;
