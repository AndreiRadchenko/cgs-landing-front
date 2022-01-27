import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import { IModalCategoryProps } from "../../types/ModalCategory.types";
import { projectsModalArr } from "../../utils/variables";
import ModalBlockSpecifyTechnology from "./ModalBlockSpecifyTechnology";

const ModalMobileCategory: FC<IModalCategoryProps> = ({ title }) => {
  return (
    <StyledCategory.Container>
      <StyledCategory.NavPanel>
        <StyledCategory.CategoryTitleWrapper>
          <StyledCategory.CategoryName>{title}</StyledCategory.CategoryName>
          <StyledCategory.DecorationTextMobileTitle />
          <StyledCategory.CategoryUnderline />
        </StyledCategory.CategoryTitleWrapper>
      </StyledCategory.NavPanel>
      <StyledCategory.CategoryProjectsContainer>
        {projectsModalArr.map(({ url, title, link, description }) => (
          <ModalBlockSpecifyTechnology
            key={title}
            url={url}
            link={link}
            title={title}
            description={description}
          />
        ))}
      </StyledCategory.CategoryProjectsContainer>
    </StyledCategory.Container>
  );
};

export default ModalMobileCategory;
