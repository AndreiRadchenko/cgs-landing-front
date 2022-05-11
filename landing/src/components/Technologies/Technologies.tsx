import React from "react";
import * as StyledAboutUs from "../../styles/AboutUs.styled";
import * as StyledThisComp from "../../styles/Technologies.styled";
import { technologiesArr } from "../../utils/variables";
import TechnologyCategory from "./TechnologyCategory";

const Technologies = () => {
  return (
    <StyledThisComp.TechnologyContainer>
      <StyledAboutUs.AboutUsTitle>technologies</StyledAboutUs.AboutUsTitle>

      <StyledThisComp.TechnologyRow>
        {technologiesArr.map(({ url, title, technologies }) => (
          <TechnologyCategory
            key={title}
            url={url}
            title={title}
            technologies={technologies}
          />
        ))}
      </StyledThisComp.TechnologyRow>
    </StyledThisComp.TechnologyContainer>
  );
};

export default Technologies;
