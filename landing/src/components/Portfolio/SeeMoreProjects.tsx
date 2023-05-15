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
  projects,
  mainProjectTitle,
}: {
  title: string;
  projects: IPortfolioReview[];
  mainProjectTitle: string;
}) => {
  const { width } = useWindowDimension();

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
      <PortfolioProjectsContainer>
        {projects
          .filter((project) => project.title !== mainProjectTitle)
          .splice(0, 2)
          .map((project) => (
            <PortfolioProjectComponent key={project._id} project={project} />
          ))}
      </PortfolioProjectsContainer>
    </>
  );
};

export default SeeMoreProjects;
