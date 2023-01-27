import React from "react";
import {
  PopoverContent,
  PopoverTriangle,
  PopoverWrapper,
} from "./index.styled";

interface IPopoverProps {
  isShow: boolean;
}

const Popover = ({ isShow }: IPopoverProps) => {
  return (
    <PopoverWrapper isShow={isShow}>
      <PopoverContent>
        Seems like you missed some fields. Let us know more about your project.
      </PopoverContent>
      <PopoverTriangle />
    </PopoverWrapper>
  );
};

export default Popover;
