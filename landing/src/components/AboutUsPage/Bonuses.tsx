import React from "react";
import * as Styled from "./AboutUs.styled";

interface IBonuses {
  subtitle: string;
  bonuses: string[];
}

const Bonuses = ({ subtitle, bonuses }: IBonuses) => {
  return (
    <Styled.OurBonuses>
      <Styled.BonusWrapper>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        {bonuses.map((el, idx) => {
          return (
            <Styled.BonusContainer key={idx}>
              <Styled.BonusText>{el}</Styled.BonusText>
            </Styled.BonusContainer>
          );
        })}
      </Styled.BonusWrapper>
    </Styled.OurBonuses>
  );
};

export default Bonuses;
