import React, { FC, useMemo } from "react";
import * as StyledThisComp from "../../styles/Modal.styled";
import ModalAllWorksCategory from "../ModalComponents/ModalAllWorksCategory";
import ModalWebCategory from "../ModalComponents/ModalWebCategory";
import ModalMobileCategory from "../ModalComponents/ModalMobileCategory";
import ModalBlockChainCategory from "../ModalComponents/ModalBlockChainCategory";
import ModalServerCategory from "../ModalComponents/ModalServerCategory";

interface IModalProjectsProps {
  isOpen: boolean;
  selectedCategory: string;
  onToggleModalHandler: () => void;
  onSetNewCategory: (category: string) => void;
}

export enum ProjectsListType {
  seeAllWorks = "all work",
  web = "web",
  mobile = "mobile",
  server = "server",
  blockchain = "blockchain",
}

const ModalProjects: FC<IModalProjectsProps> = ({
  isOpen,
  onToggleModalHandler,
  selectedCategory,
  onSetNewCategory,
}) => {
  const CurrentCategoryComponent = useMemo(() => {
    switch (selectedCategory) {
      case ProjectsListType.seeAllWorks:
        return (
          <ModalAllWorksCategory
            title={"all work"}
            onSetNewCategory={onSetNewCategory}
          />
        );
      case ProjectsListType.web:
        return <ModalWebCategory title={ProjectsListType.web} />;
      case ProjectsListType.mobile:
        return <ModalMobileCategory title={ProjectsListType.mobile} />;
      case ProjectsListType.blockchain:
        return <ModalBlockChainCategory title={ProjectsListType.blockchain} />;
      case ProjectsListType.server:
        return <ModalServerCategory title={ProjectsListType.server} />;
      default:
        return (
          <ModalAllWorksCategory
            title={"all work"}
            onSetNewCategory={onSetNewCategory}
          />
        );
    }
  }, [selectedCategory]);

  return (
    <StyledThisComp.ModalContainer open={isOpen} onClose={onToggleModalHandler}>
      <StyledThisComp.ModalWrapper>
        <StyledThisComp.ModalCloseButton onClick={onToggleModalHandler}>
          &#x2715;
        </StyledThisComp.ModalCloseButton>
        {CurrentCategoryComponent}
      </StyledThisComp.ModalWrapper>
    </StyledThisComp.ModalContainer>
  );
};

export default ModalProjects;
