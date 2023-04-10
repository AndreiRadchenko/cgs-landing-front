import React from "react";

import { IPortfolioReview } from "../../types/Admin/AdminPortfolio.types";

import * as Styled from "../../styles/Portfolio.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import Link from "next/link";
import Image from "next/image";

const PortfolioProjectComponent = ({
  project,
}: {
  project: IPortfolioReview;
}) => {
  return (
    <div>
      <Styled.ProjectsContainerHeader>
        <Styled.ProjectsContainerHeaderTitle>
          <h4>{project.title}</h4>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p>// {project.industry}</p>
        </Styled.ProjectsContainerHeaderTitle>
        <Styled.ProjectsContainerHeaderLink>
          project link
          <Styled.ProjectsContainerArrowContainer>
            <ButtonArrow />
          </Styled.ProjectsContainerArrowContainer>
        </Styled.ProjectsContainerHeaderLink>
      </Styled.ProjectsContainerHeader>
      <Styled.ProjectsContainerHeader>
        <Image
          src={project.image?.url}
          alt="project image"
          width={"100%"}
          height={"100%"}
        />
      </Styled.ProjectsContainerHeader>
    </div>
  );
};

export default PortfolioProjectComponent;
