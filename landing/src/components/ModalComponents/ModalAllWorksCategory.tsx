import React, { FC } from "react";
import { useQueryClient } from "react-query";
import { IPortfolioResponse } from "../../types/Admin/AdminPortfolio";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import ModalCategoryAllWorkCard from "./ModalCategoryAllWorkCard";
import { IAllCategoriesModalProps } from "../../types/ModalCategory.types";

const ModalAllWorksCategory: FC<IAllCategoriesModalProps> = ({
  title,
  onSetNewCategory,
}) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IPortfolioResponse>(
    queryKeys.getPortfolio
  );

  const { reviews, categories } = { ...data };
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
          <div style={{ position: "relative", width: "fit-content" }}>
            <StyledCategory.CategoryName>{title}</StyledCategory.CategoryName>
            <StyledCategory.DecorationTextAllTitle />
          </div>
          <StyledCategory.CategoryUnderline />
        </StyledCategory.CategoryTitleWrapper>
        <StyledCategory.NavigationWrapper>
          {categories &&
            categories.map((item) => (
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
              key={`${category}.${title}`}
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
