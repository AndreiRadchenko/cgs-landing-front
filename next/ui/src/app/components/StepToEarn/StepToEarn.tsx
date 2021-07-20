import React from "react";

import * as Styled from "./StepToEarn.styles";

const arrayOfImages = ["1step.svg", "2step.svg", "3step.svg"];

const StepToEarn = ({ stepToEarn, number }) => {
  return (
    <Styled.Container number={number}>
      <Styled.Wrapper>
        <Styled.Number>{number}</Styled.Number>
        <Styled.Text dangerouslySetInnerHTML={{ __html: stepToEarn.text }} />
        <img className="image" src={arrayOfImages[number - 1]} />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default StepToEarn;
