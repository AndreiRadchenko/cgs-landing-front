import React, { useState } from "react";
import * as StyledThisComp from "../../styles/Projects.styled";
import Category from "../Category/Category";
import ButtonSeeAllWorks from "../../utils/Buttons/ButtonSeeAllWorks";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import themes from "../../utils/themes";
import ModalProjects from "../Modal/ModalProjects";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { IPortfolioResponse } from "../../types/Admin/AdminPortfolio";
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();

  const categoryParams =
    typeof router.query.category === "string"
      ? router.query?.category || ""
      : "";

  const portfolioParams = router.query.portfolio === "true" || !!categoryParams;

  const [isOpen, setIsOpen] = useState<boolean>(portfolioParams);
  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryParams);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.CardsBlock;
  const portfolioData = queryClient.getQueryData<IPortfolioResponse>(
    queryKeys.getPortfolio
  );

  const setNewCategoryHandler = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const openModalHandler = (categoryName: string) => {
    setIsOpen(!isOpen);
    setSelectedCategory(categoryName);
  };

  const seeAllWorksHandler = () => {
    setSelectedCategory(portfolioData?.subtitle || "");
    setIsOpen(!isOpen);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
    if (portfolioParams) {
      router.push("/");
    }
    setSelectedCategory("");
  };

  const backModalHandler = () => {
    if (selectedCategory === portfolioData?.subtitle) {
      setIsOpen(false);
      setSelectedCategory("");
    } else {
      setSelectedCategory(portfolioData?.subtitle || "");
    }
  };
  // const text = data?.text4.split("development");
  return (
    <StyledThisComp.ProjectsContainer>
      {/* <StyledThisComp.ProjectsCategoryRow>
        <StyledThisComp.ProjectTitleWrapper>
          <StyledThisComp.ProjectsTitle>
            {text && text[0]}
            <StyledThisComp.ProjectsTitleDecoration>
              development
              <StyledThisComp.DecorationTitle />
            </StyledThisComp.ProjectsTitleDecoration>{" "}
            {text && text[1]}
          </StyledThisComp.ProjectsTitle>
          <ButtonSeeAllWorks onClick={seeAllWorksHandler}>
            <ButtonTextWrapper fontSize={themes.primary.font.size.linkText}>
              {data?.button}
            </ButtonTextWrapper>
          </ButtonSeeAllWorks>
        </StyledThisComp.ProjectTitleWrapper>
        {data?.cards.map(({ subtitle, text, image }, idx) => {
          return (
            <Category
              key={idx}
              title={subtitle}
              description={text}
              onOpenModalHandler={openModalHandler}
              url={image.url}
            />
          );
        })}
      </StyledThisComp.ProjectsCategoryRow> */}
      <ModalProjects
        subtitle={portfolioData?.subtitle || "All work"}
        isOpen={isOpen}
        onSetNewCategory={setNewCategoryHandler}
        selectedCategory={selectedCategory}
        onToggleModalHandler={backModalHandler}
        closeModalHandler={closeModalHandler}
      />
    </StyledThisComp.ProjectsContainer>
  );
};

export default Projects;
