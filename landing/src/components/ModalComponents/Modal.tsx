import React, { FC } from "react";
import * as StyledCategory from "../../styles/ModalCategory.styled";
import { IModalCategoryProps } from "../../types/ModalCategory.types";
import ModalBlockSpecifyTechnology from "./ModalBlockSpecifyTechnology";
import { useQueryClient } from "react-query";
import { IPortfolioResponse } from "../../types/Admin/AdminPortfolio";
import { queryKeys } from "../../consts/queryKeys";

const Modal: FC<IModalCategoryProps> = ({ title }) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IPortfolioResponse>(
    queryKeys.getPortfolio
  );
  const { reviews } = { ...data };

  return (
    <StyledCategory.Container>
      <StyledCategory.NavPanel>
        <StyledCategory.CategoryTitleWrapper>
          <div style={{ position: "relative", width: "fit-content" }}>
            <StyledCategory.CategoryName>{title}</StyledCategory.CategoryName>
            <StyledCategory.DecorationTextBlockChainTitle />
          </div>
          <StyledCategory.CategoryUnderline />
        </StyledCategory.CategoryTitleWrapper>
      </StyledCategory.NavPanel>
      <StyledCategory.CategoryProjectsContainer>
        {reviews &&
          reviews
            .filter(({ category }) => category.includes(title))
            .map(({ image, title, button, text, category }) => (
              <ModalBlockSpecifyTechnology
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

export default Modal;
