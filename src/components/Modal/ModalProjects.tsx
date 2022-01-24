import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Modal.styles";

interface IModalProjectsProps {
  isOpen: boolean;
  onToggleModalHandler: () => void;
}

const ModalProjects: FC<IModalProjectsProps> = ({
  isOpen,
  onToggleModalHandler,
}) => {
  return (
    <StyledThisComp.ModalContainer
      hideBackdrop
      open={isOpen}
      onClose={onToggleModalHandler}
    >
      <button onClick={onToggleModalHandler}>&#215;</button>
    </StyledThisComp.ModalContainer>
  );
};

export default ModalProjects;
