import React from "react";

import { IStep } from "types/components";

import { Slider } from "../Slider";

import Step from "./Steps.component";

import * as Styled from "./SliderSteps.styles";

interface SliderProps {
  steps: IStep[];
}

const StepsSlider: React.FC<SliderProps> = ({ steps }) => {
  return (
    <Styled.Container>
      <Styled.DesktopContainer>
        {steps.map((step, index) => (
          <Step key={step.id} step={step} number={index + 1} />
        ))}
      </Styled.DesktopContainer>
      <Styled.MobileContainer>
        {steps.map((step, index) => (
          <Step key={step.id} step={step} number={index + 1} />
        ))}
        {/* <Slider
          items={steps}
          renderItem={(step, index) => <Step step={step} number={index + 1} />}
        /> */}
      </Styled.MobileContainer>
    </Styled.Container>
  );
};

export default StepsSlider;
