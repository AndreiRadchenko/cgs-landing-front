import React from "react";

import { IFact } from "types/components";

import { Slider } from "../Slider";

import Facts from "./Facts.component";

import * as Styled from "./SliderFacts.styles";

interface SliderProps {
  facts: IFact[];
}

const FactsSlider: React.FC<SliderProps> = ({ facts }) => {
  return (
    <Styled.Container>
      <Styled.DesktopContainer>
        {facts.map((fact, index) => (
          <Facts key={fact.id} fact={fact} number={index + 1} />
        ))}
      </Styled.DesktopContainer>
      <Styled.MobileContainer>
        <Slider
          items={facts}
          renderItem={(fact, index) => (
            <Facts fact={fact} number={index + 1} />
          )}
        />
      </Styled.MobileContainer>
    </Styled.Container>
  );
};

export default FactsSlider;
