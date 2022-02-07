import React, { useState } from "react";
import * as StyledThisComp from "../../styles/Projects.styled";
import { categoryThemesVars } from "../../utils/variables";
import Category from "../Category/Category";
import ButtonSeeAllWorks from "../../utils/Buttons/ButtonSeeAllWorks";
import ButtonTextWrapper from "../ButtonText/ButtonTextWrapper";
import themes from "../../utils/themes";
import ModalProjects from "../Modal/ModalProjects";

const Projects = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const setNewCategoryHandler = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const openModalHandler = (categoryName: string) => {
    setIsOpen(!isOpen);
    setSelectedCategory(categoryName);
  };

  const seeAllWorksHandler = () => {
    setSelectedCategory("all work");
    setIsOpen(!isOpen);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
    setSelectedCategory("");
  };

  return (
    <StyledThisComp.ProjectsContainer>
      <StyledThisComp.ProjectsCategoryRow>
        <StyledThisComp.ProjectTitleWrapper>
          <StyledThisComp.ProjectsTitle>
            We provide end-to-end{" "}
            <StyledThisComp.ProjectsTitleDecoration>
              development
              <StyledThisComp.DecorationTitle />
            </StyledThisComp.ProjectsTitleDecoration>{" "}
            using the MERN stack, which means our team adores Javascript.
            Furthermore, innovative ideas and new challenges are our passion.
          </StyledThisComp.ProjectsTitle>
          <ButtonSeeAllWorks onClick={seeAllWorksHandler}>
            <ButtonTextWrapper fontSize={themes.primary.font.size.linkText}>
              see all work
            </ButtonTextWrapper>
          </ButtonSeeAllWorks>
        </StyledThisComp.ProjectTitleWrapper>
        {categoryThemesVars.map(({ title, description, url }, idx) => (
          <Category
            key={idx}
            title={title}
            description={description}
            onOpenModalHandler={openModalHandler}
            url={url}
          />
        ))}
      </StyledThisComp.ProjectsCategoryRow>
      <ModalProjects
        isOpen={isOpen}
        onSetNewCategory={setNewCategoryHandler}
        selectedCategory={selectedCategory}
        onToggleModalHandler={closeModalHandler}
      />
    </StyledThisComp.ProjectsContainer>
  );
};

export default Projects;
