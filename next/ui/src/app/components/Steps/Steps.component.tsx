import React from "react";
import Hyphenated from "react-hyphen";
import { Parser as HtmlToReactParser } from "html-to-react";

import * as Styled from "./Steps.styles";

const Step = ({ step, number }) => {
  const parser = new HtmlToReactParser();

  return (
    <Styled.Container>
      <Styled.Header>
        <h2>Benefit #{number}</h2>
        <img src={step.iconUrl} alt={step.title} width="30" loading="lazy" />
      </Styled.Header>
      <Styled.Title>{step.title}</Styled.Title>
      <Styled.Text>
        <Hyphenated>{parser.parse(step.text)}</Hyphenated>
      </Styled.Text>
    </Styled.Container>
  );
};

export default Step;
