import React from "react";

import PortfolioProjectComponent from "./PortfolioProjectComponent";
import ArrowTitleSeeMoreProject from "./svg/ArrowTitlSeeMoreProject";

import { IPortfolioReview } from "../../types/Admin/AdminPortfolio.types";

import * as Styled from "../../styles/PortfolioPage.styled";
import { PortfolioProjectsContainer } from "../../styles/Portfolio.styled";

const SeeMoreProjects = ({
  title,
  projects,
  mainProjectTitle,
}: {
  title: string;
  projects: IPortfolioReview[];
  mainProjectTitle: string;
}) => {
  return (
    <>
      <Styled.SeeMoreProjectsTitleContainer>
        <Styled.SeeMoreProjectsArrowFirst>
          <ArrowTitleSeeMoreProject />
        </Styled.SeeMoreProjectsArrowFirst>
        <Styled.SeeMoreProjectsTitle>{title}</Styled.SeeMoreProjectsTitle>
        <Styled.SeeMoreProjectsArrowSecond>
          <ArrowTitleSeeMoreProject />
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
