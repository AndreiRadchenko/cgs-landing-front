import React, { useMemo } from "react";

import { ITechnology } from "types/components";

import { Slider } from "../Slider";

import Technology from "./technologies.component";

import * as Styled from "./SliderTechnologies.styles";

interface SliderProps {
  technologies: ITechnology[];
}

const SliderTechnologies: React.FC<SliderProps> = ({
  technologies: rawTechnologies,
}) => {
  const technologies = useMemo(
    () => (
      rawTechnologies.map((technology) => ({
        id: technology.type,

        ...technology,
      }))
    ),
    [rawTechnologies],
  );

  return (
    <Styled.Container>
      <Slider
        items={technologies}
        renderItem={(technology, index) => (
          <Technology
            technology={technology}
            number={index}
          />
        )}
      />
    </Styled.Container>
  );
};

export default SliderTechnologies;
