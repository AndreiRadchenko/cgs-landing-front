import React from "react";

import PortfolioProjectComponent from "./PortfolioProjectComponent";
import ArrowTitleSeeMoreProject from "./svg/ArrowTitlSeeMoreProject";
import ArrowTitleSeeMoreProjectMobile from "./svg/ArrowTitleSeeMoreProjectMobile";

import { IPortfolioReview } from "../../types/Admin/AdminPortfolio.types";

import * as Styled from "../../styles/PortfolioPage.styled";
import { PortfolioProjectsContainer } from "../../styles/Portfolio.styled";

import { useWindowDimension } from "../../hooks/useWindowDimension";

const SeeMoreProjects = ({
  title,
  projectsIndustry,
  projectsCategory,
  mainProjectTitle,
}: {
  title: string;
  projectsIndustry: IPortfolioReview[];
  projectsCategory: IPortfolioReview[];
  mainProjectTitle: string;
}) => {
  const { width } = useWindowDimension();

  const slicedIndustry = projectsIndustry
    .filter((project) => project.title !== mainProjectTitle)
    .splice(0, 2);

  const slicedCategory = projectsCategory.filter(
    (project) => project.title !== mainProjectTitle
  );

  return (
    <>
      <Styled.SeeMoreProjectsTitleContainer>
        <Styled.SeeMoreProjectsArrowFirst>
          {width && width > 425 ? (
            <ArrowTitleSeeMoreProject />
          ) : (
            <ArrowTitleSeeMoreProjectMobile />
          )}
        </Styled.SeeMoreProjectsArrowFirst>
        <Styled.SeeMoreProjectsTitle>{title}</Styled.SeeMoreProjectsTitle>
        <Styled.SeeMoreProjectsArrowSecond>
          {width && width > 425 ? (
            <ArrowTitleSeeMoreProject />
          ) : (
            <ArrowTitleSeeMoreProjectMobile />
          )}
        </Styled.SeeMoreProjectsArrowSecond>
      </Styled.SeeMoreProjectsTitleContainer>
      <PortfolioProjectsContainer isSeeMore>
        {slicedIndustry.length === 2
          ? slicedIndustry
              .filter((project) => project.title !== mainProjectTitle)
              .map((project) => (
                <PortfolioProjectComponent
                  key={project._id}
                  project={project}
                />
              ))
          : [...slicedIndustry, ...slicedCategory]
              .filter((project) => project.title !== mainProjectTitle)
              .splice(0, 2)
              .map((project) => (
                <PortfolioProjectComponent
                  key={project._id}
                  project={project}
                />
              ))}
      </PortfolioProjectsContainer>
    </>
  );
};

export default SeeMoreProjects;
