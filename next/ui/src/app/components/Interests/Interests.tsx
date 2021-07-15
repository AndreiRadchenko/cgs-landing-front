import React from "react";

import * as Styled from "./Interests.styles";

const Interest = ({ step, number }) => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Number>{number}1</Styled.Number>
        <Styled.Text>
          You share our contacts with the right client, who dreams of a perfect own product.
        </Styled.Text>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Number>{number}1</Styled.Number>
        <Styled.Text>
          You share our contacts with the right client, who dreams of a perfect own product.
        </Styled.Text>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Interest;
