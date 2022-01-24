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

  const toggleModalHandler = () => setIsOpen(false);

  return (
    <StyledThisComp.ProjectsContainer>
      <StyledThisComp.ProjectsCategoryRow>
        <StyledThisComp.ProjectTitleWrapper>
          <StyledThisComp.ProjectsTitle>
            We provide end-to-end <br /> development using the MERN <br />{" "}
            stack, which means our team <br /> adores Javascript.
            <br /> Furthermore, innovative ideas <br /> and new challenges are
            our passion.
          </StyledThisComp.ProjectsTitle>
          <StyledThisComp.DecorationTitle />

          <ButtonSeeAllWorks onClick={toggleModalHandler}>
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
            url={url}
          />
        ))}
      </StyledThisComp.ProjectsCategoryRow>

      <ModalProjects
        isOpen={isOpen}
        onToggleModalHandler={toggleModalHandler}
      />
    </StyledThisComp.ProjectsContainer>
  );
};

export default Projects;
