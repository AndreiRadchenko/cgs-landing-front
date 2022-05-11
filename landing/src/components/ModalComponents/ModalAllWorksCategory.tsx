import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import {
  modalNavigationRoutesNames,
  projectsModalArr,
} from "../../utils/variables";
import ModalCategoryAllWorkCard from "./ModalCategoryAllWorkCard";
import { IAllCategoriesModalProps } from "../../types/ModalCategory.types";

const ModalAllWorksCategory: FC<IAllCategoriesModalProps> = ({
  title,
  onSetNewCategory,
}) => {
  const setNewCategoryHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.currentTarget.textContent &&
      onSetNewCategory(event.currentTarget.textContent);
  };

  return (
    <StyledCategory.Container>
      <StyledCategory.NavPanel>
        <StyledCategory.CategoryTitleWrapper>
          <StyledCategory.CategoryName>{title}</StyledCategory.CategoryName>
          <StyledCategory.DecorationTextAllTitle />
          <StyledCategory.CategoryUnderline />
        </StyledCategory.CategoryTitleWrapper>
        <StyledCategory.NavigationWrapper>
          {modalNavigationRoutesNames.map((item) => (
            <StyledCategory.CategoryRouteName
              key={item}
              onClick={setNewCategoryHandler}
            >
              {item}
            </StyledCategory.CategoryRouteName>
          ))}
        </StyledCategory.NavigationWrapper>
      </StyledCategory.NavPanel>
      <StyledCategory.CategoryProjectsContainer>
        {projectsModalArr.map(({ url, title, link, description, category }) => (
          <ModalCategoryAllWorkCard
            key={title}
            url={url}
            link={link}
            title={title}
            description={description}
            category={category}
          />
        ))}
      </StyledCategory.CategoryProjectsContainer>
    </StyledCategory.Container>
  );
};

export default ModalAllWorksCategory;
