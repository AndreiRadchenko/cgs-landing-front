import React from "react";

import { ITechnology } from "types/components";

import { Slider } from "../Slider";

import Technology from "./technologies.component";

import * as Styled from "./technologies.styles";

interface SliderProps {
  technologies: ITechnology[];
}


const SliderTechnologies: React.FC<{ technologies: ITechnology[] }> = ({
  technologies: rawTechnologies,
}) => {
  const technologies = rawTechnologies.map((technology) => {
    return {
      id: technology.type,
      ...technology,
    };
  });

  return (
    <Styled.Container>
      <Styled.DesktopContainer>
        {technologies.map((technology, index) => (
          <Technology key={technology.type} technology={technology} number={index} />
        ))}
      </Styled.DesktopContainer>
      <Styled.MobileContainer>
        <Slider
          items={technologies}
          renderItem={(technology, index) => (
            <Technology technology={technology}  number={-1} />
          )}
        />
      </Styled.MobileContainer>
    </Styled.Container>
  );
};

export default SliderTechnologies;
