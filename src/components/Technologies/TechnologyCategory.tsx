import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Technologies.styled";
import Image from "next/image";

interface ITechnologyCategoryProps {
  url: any;
  title: string;
  technologies: string[];
}

const TechnologyCategory: FC<ITechnologyCategoryProps> = ({
  url,
  title,
  technologies,
}) => {
  return (
    <StyledThisComp.CategoryContainer>
      <Image src={url} alt={`technologies description ${title}`} />
      <StyledThisComp.CategoryDescriptionWrapper className="descriptionWrapper">
        <StyledThisComp.CategoryTitle>{title}</StyledThisComp.CategoryTitle>
        <StyledThisComp.DecorationTitle className={title} />

        <StyledThisComp.CategoryLine />
        <StyledThisComp.CategoryTechnologiesWrapper>
          {technologies.map((technology, idx) => (
            <StyledThisComp.CategoryTechnology key={idx}>
              {technology}
            </StyledThisComp.CategoryTechnology>
          ))}
        </StyledThisComp.CategoryTechnologiesWrapper>
      </StyledThisComp.CategoryDescriptionWrapper>
    </StyledThisComp.CategoryContainer>
  );
};

export default TechnologyCategory;
