import React, { FC } from "react";
import * as StyledThisComp from "../../styles/Technologies.styled";
import Image from "next/image";

interface ITechnologyCategoryProps {
  url: string;
  title: string;
  technologies: string[];
}

const TechnologyCategory: FC<ITechnologyCategoryProps> = ({
  url,
  title,
  technologies,
}) => {
  return (
    <StyledThisComp.CategoryContainer className={title}>
      <StyledThisComp.CategoryImgWrapper>
        <Image
          src={url}
          alt={`technologies description ${title}`}
          layout="fill"
          objectFit="contain"
        />
      </StyledThisComp.CategoryImgWrapper>

      <StyledThisComp.CategoryDescriptionWrapper className="descriptionWrapper">
        <StyledThisComp.CategoryTitle
          className={title === "server" ? "serverTitle" : undefined}
        >
          {title}
          <StyledThisComp.DecorationTitle className={title} />
        </StyledThisComp.CategoryTitle>

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
