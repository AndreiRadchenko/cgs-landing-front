import React, { useMemo } from "react";
import { useQueryClient } from "react-query";
// import { ProjectsListType } from "../types/ModalCategory.types";
import ModalAllWorksCategory from "../components/ModalComponents/ModalAllWorksCategory";
import Modal from "../components/ModalComponents/Modal";
import { IPortfolioResponse } from "../types/Admin/AdminPortfolio";
import { queryKeys } from "../consts/queryKeys";

const useModalNavigation = (
  currentNavigation: string,
  onSetNewCategory: (categoryName: string) => void
) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IPortfolioResponse>(
    queryKeys.getPortfolio
  );
  const { subtitle, categories, reviews } = { ...data };

  return useMemo(() => {
    let currentCategory = subtitle || "All work";
    categories?.map((category) => {
      if (currentNavigation === category) {
        currentCategory = category;
      }
    });

    return currentCategory === subtitle && reviews ? (
      <ModalAllWorksCategory
        title={subtitle || ""}
        onSetNewCategory={onSetNewCategory}
      />
    ) : (
      <Modal title={currentCategory} />
    );
  }, [currentNavigation, categories, subtitle, onSetNewCategory, reviews]);
};

export default useModalNavigation;
