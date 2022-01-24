import React from "react";
import * as StyledThisComp from "../../styles/Projects.styled";
import { categoryThemesVars } from "../../utils/variables";
import Category from "../Category/Category";

const Projects = () => {
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
    </StyledThisComp.ProjectsContainer>
  );
};

export default Projects;
