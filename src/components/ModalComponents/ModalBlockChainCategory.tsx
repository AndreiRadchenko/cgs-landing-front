import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import { IModalCategoryProps } from "../../types/ModalCategory.types";
import { projectsModalArr } from "../../utils/variables";
import ModalBlockSpecifyTechnology from "./ModalBlockSpecifyTechnology";

const ModalBlockChainCategory: FC<IModalCategoryProps> = ({ title }) => {
  return (
    <StyledCategory.Container>
      <StyledCategory.NavPanel>
        <StyledCategory.CategoryTitleWrapper>
          <StyledCategory.CategoryName>{title}</StyledCategory.CategoryName>
          <StyledCategory.DecorationTextBlockChainTitle />
          <StyledCategory.CategoryUnderline />
        </StyledCategory.CategoryTitleWrapper>
      </StyledCategory.NavPanel>
      <StyledCategory.CategoryProjectsContainer>
        {projectsModalArr
          .filter(({ category }) => category.includes("blockchain"))
          .map(({ url, title, link, description, category }) => (
            <ModalBlockSpecifyTechnology
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

export default ModalBlockChainCategory;
