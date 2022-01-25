import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Modal.styled";
import useModalNavigation from "../../hooks/useModalNavigation";

interface IModalProjectsProps {
  isOpen: boolean;
  selectedCategory: string;
  onToggleModalHandler: () => void;
  onSetNewCategory: (category: string) => void;
}

const ModalProjects: FC<IModalProjectsProps> = ({
  isOpen,
  onToggleModalHandler,
  selectedCategory,
  onSetNewCategory,
}) => {
  const currentCategoryComponent = useModalNavigation(
    selectedCategory,
    onSetNewCategory
  );

  return (
    <StyledThisComp.ModalContainer open={isOpen} onClose={onToggleModalHandler}>
      <StyledThisComp.ModalWrapper>
        <StyledThisComp.ModalCloseButton onClick={onToggleModalHandler}>
          &#x2715;
        </StyledThisComp.ModalCloseButton>
        {currentCategoryComponent}
      </StyledThisComp.ModalWrapper>
    </StyledThisComp.ModalContainer>
  );
};

export default ModalProjects;
