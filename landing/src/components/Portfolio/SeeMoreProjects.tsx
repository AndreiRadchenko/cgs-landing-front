import React from "react";

import PortfolioProjectComponent from "./PortfolioProjectComponent";
import ArrowTitleSeeMoreProject from "./svg/ArrowTitlSeeMoreProject";

import { IPortfolioReview } from "../../types/Admin/AdminPortfolio.types";

import * as Styled from "../../styles/PortfolioPage.styled";
import { PortfolioProjectsContainer } from "../../styles/Portfolio.styled";
import { SeeMoreProjectsArrowFirst } from "../../styles/PortfolioPage.styled";

const SeeMoreProjects = ({
  title,
  projects,
}: {
  title: string;
  projects: IPortfolioReview[];
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
        {projects.map((project) => (
          <PortfolioProjectComponent key={project._id} project={project} />
        ))}
      </PortfolioProjectsContainer>
    </>
  );
};

export default SeeMoreProjects;
