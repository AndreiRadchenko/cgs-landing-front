import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Modal.styled";
import useModalNavigation from "../../hooks/useModalNavigation";
import ModalBackButton from "./ModalBackButton";

interface IModalProjectsProps {
  subtitle: string;
  isOpen: boolean;
  selectedCategory: string;
  onToggleModalHandler: () => void;
  onSetNewCategory: (category: string) => void;
  closeModalHandler: () => void;
}

const ModalProjects: FC<IModalProjectsProps> = ({
  subtitle,
  isOpen,
  onToggleModalHandler,
  selectedCategory,
  onSetNewCategory,
  closeModalHandler,
}) => {
  const currentCategoryComponent = useModalNavigation(
    selectedCategory,
    onSetNewCategory
  );

  return (
    <StyledThisComp.ModalContainer open={isOpen} onClose={onToggleModalHandler}>
      <StyledThisComp.ModalWrapper>
        <StyledThisComp.ModalRow>
          <ModalBackButton
            subtitle={subtitle}
            onToggleModalHandler={onToggleModalHandler}
            selectedCategory={selectedCategory}
            closeModalHandler={closeModalHandler}
          />
          {currentCategoryComponent}
        </StyledThisComp.ModalRow>
      </StyledThisComp.ModalWrapper>
    </StyledThisComp.ModalContainer>
  );
};

export default ModalProjects;
