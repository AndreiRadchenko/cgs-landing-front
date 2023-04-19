import React from "react";
import Image from "next/image";

import { IPortfolioReview } from "../../types/Admin/AdminPortfolio.types";

import * as Styled from "../../styles/Portfolio.styled";

import ButtonArrow from "../../utils/ButtonArrow";

const PortfolioProjectComponent = ({
  project,
}: {
  project: IPortfolioReview;
}) => {
  return (
    <Styled.ProjectsContainer>
      <Styled.ProjectsContainerHeader isInfoCont={false}>
        <Styled.ProjectsContainerHeaderTitle>
          <h4>{project.title}</h4>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p>// {project.industry}</p>
        </Styled.ProjectsContainerHeaderTitle>
        <Styled.ProjectsContainerHeaderLink isInfoCont={false}>
          project link
          <Styled.ProjectsContainerArrowContainer>
            <ButtonArrow />
          </Styled.ProjectsContainerArrowContainer>
        </Styled.ProjectsContainerHeaderLink>
      </Styled.ProjectsContainerHeader>
      <Styled.ProjectsContainerImage>
        <Image
          src={project.image!.url}
          className={"image"}
          alt="project image"
          height={341}
          width={652}
        />
      </Styled.ProjectsContainerImage>
      <Styled.ProjectsContainerInfo>
        <Styled.ProjectsContainerHeader isInfoCont={true}>
          <Styled.ProjectsContainerInfoHeaderTitle>
            <h4>{project.title}</h4>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p>// {project.industry}</p>
          </Styled.ProjectsContainerInfoHeaderTitle>
          <Styled.ProjectsContainerHeaderLink isInfoCont={true}>
            project link
            <Styled.ProjectsContainerArrowContainer>
              <ButtonArrow />
            </Styled.ProjectsContainerArrowContainer>
          </Styled.ProjectsContainerHeaderLink>
        </Styled.ProjectsContainerHeader>
        <Styled.ProjectsContainerInfoText>
          <p>{project.text}</p>
        </Styled.ProjectsContainerInfoText>
      </Styled.ProjectsContainerInfo>
    </Styled.ProjectsContainer>
  );
};

export default PortfolioProjectComponent;
