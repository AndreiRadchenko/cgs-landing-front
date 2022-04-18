import React, { useMemo } from "react";
import { ProjectsListType } from "../types/ModalCategory.types";
import ModalAllWorksCategory from "../components/ModalComponents/ModalAllWorksCategory";
import ModalWebCategory from "../components/ModalComponents/ModalWebCategory";
import ModalMobileCategory from "../components/ModalComponents/ModalMobileCategory";
import ModalBlockChainCategory from "../components/ModalComponents/ModalBlockChainCategory";
import ModalServerCategory from "../components/ModalComponents/ModalServerCategory";

const useModalNavigation = (
  currentNavigation: string,
  onSetNewCategory: (categoryName: string) => void
) => {
  return useMemo(() => {
    switch (currentNavigation) {
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
  }, [currentNavigation]);
};

export default useModalNavigation;
