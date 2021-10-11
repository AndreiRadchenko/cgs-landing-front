import React from "react";
import Hyphenated from "react-hyphen";
import { Parser as HtmlToReactParser } from "html-to-react";
import Image from "next/image";
import * as Styled from "./Steps.styles";

const Step = ({ step, number }) => {
  const parser = new HtmlToReactParser();

  return (
    <Styled.Container>
      <Styled.Header>
        <h2>Benefit #{number}</h2>
        <Image
          src={step.iconUrl}
          alt={step.title}
          width="30"
          height ="30"
        />
      </Styled.Header>
      <Styled.Title>{step.title}</Styled.Title>
      <Styled.Text>
        <Hyphenated>{parser.parse(step.text)}</Hyphenated>
      </Styled.Text>
    </Styled.Container>
  );
};

export default Step;
