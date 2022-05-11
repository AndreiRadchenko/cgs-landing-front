import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
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
        {reviews &&
          reviews.map(({ image, title, button, text, category }) => (
            <ModalCategoryAllWorkCard
              key={title}
              url={image && image.url}
              link={button}
              title={title}
              description={text}
              category={[category]}
            />
          ))}
      </StyledCategory.CategoryProjectsContainer>
    </StyledCategory.Container>
  );
};

export default ModalAllWorksCategory;
