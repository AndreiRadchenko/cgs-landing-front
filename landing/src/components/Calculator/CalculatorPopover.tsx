import React from "react";
import {
  PopoverContent,
  PopoverTriangle,
  PopoverWrapper,
} from "../../styles/Calculator/CalculatorComponent.styled";

const CalculatorPopover = () => {
  return (
    <PopoverWrapper>
      <PopoverContent>
        Seems like you missed some fields. Let us know more about your project.
      </PopoverContent>
      <PopoverTriangle />
    </PopoverWrapper>
  );
};

export default CalculatorPopover;
