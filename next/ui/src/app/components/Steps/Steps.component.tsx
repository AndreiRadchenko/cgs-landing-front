import React from "react";
import Hyphenated from "react-hyphen";
import { Parser as HtmlToReactParser } from "html-to-react";

import * as Styled from "./Steps.styles";

const Step = ({ step, number }) => {
  const parser = new HtmlToReactParser();

  return (
    <Styled.Container>
      <Styled.Header>
        <h2>Step #{number}</h2>
        <img src={step.iconUrl} alt="fact_image" width="30" />
      </Styled.Header>
      <Styled.Title>{step.title}</Styled.Title>
      <Styled.Text>
        <Hyphenated>{parser.parse(step.text)}</Hyphenated>
      </Styled.Text>
    </Styled.Container>
  );
};

export default Step;
