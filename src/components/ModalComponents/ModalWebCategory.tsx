import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import { IModalCategoryProps } from "../../types/ModalCategory.types";
import { projectsModalArr } from "../../utils/variables";
import ModalCategoryAllWorkCard from "./ModalCategoryAllWorkCard";

const ModalWebCategory: FC<IModalCategoryProps> = ({ title }) => {
  return (
    <StyledCategory.Container>
      <StyledCategory.NavPanel>
        <StyledCategory.CategoryTitleWrapper>
          <StyledCategory.CategoryName>{title}</StyledCategory.CategoryName>
          <StyledCategory.DecorationTextWebTitle />
          <StyledCategory.CategoryUnderline />
        </StyledCategory.CategoryTitleWrapper>
      </StyledCategory.NavPanel>
      <StyledCategory.CategoryProjectsContainer>
        {projectsModalArr.map(({ url, title, description }) => (
          <ModalCategoryAllWorkCard
            key={title}
            url={url}
            title={title}
            description={description}
          />
        ))}
      </StyledCategory.CategoryProjectsContainer>
    </StyledCategory.Container>
  );
};

export default ModalWebCategory;
