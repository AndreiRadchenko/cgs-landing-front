import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { Loader, LoaderStub } from "../../components/Loader";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import TimeIcon from "../../components/Portfolio/svg/TimeIcon";
import TeamIcon from "../../components/Portfolio/svg/TeamIcon";
import CircleProjectPage from "../../components/Portfolio/svg/CircleProjectPage";

import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { PortfolioContainer } from "../../styles/Portfolio.styled";

import * as Styled from "../../styles/PortfolioPage.styled";
import * as Styles from "../../styles/Portfolio.styled";

import { IPortfolioProjectResponse } from "../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../consts/queryKeys";
import ButtonArrow from "../../utils/ButtonArrow";
import ReactCountryFlag from "react-country-flag";
import CanadaFlag from "../../components/Portfolio/svg/CanadaFlag";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const PortfolioProjectPage = () => {
  const [projectId, setProjectId] = useState<string>("");

  const router = useRouter();

  const { data: project, isLoading }: IPortfolioProjectResponse = useQuery(
    [queryKeys.getPortfolioProjectPage],
    () =>
      adminPortfolioService.getProjectData(
        (router.query.projectId as string) || projectId
      )
  );

  useEffect(() => {
    setProjectId(router.query.projectId as string);
  }, [router.query, projectId]);

  return (
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
      ) : (
        <PortfolioContainer>
          <HeaderNavNew />
          <Styled.PortfolioPageWrapper>
            <Styled.PortfolioPageHeaderContainer>
              <Styled.HeaderContainerBlock>
                <h2>{project?.title}</h2>
                <Styled.HeaderBottomSection>
                  <Styled.HeaderBottomSectionFlag>
                    {project?.flag ? (
                      <ReactCountryFlag
                        countryCode={project.flag}
                        svg
                        style={{
                          width: "2em",
                          height: "2em",
                        }}
                      />
                    ) : (
                      <CanadaFlag />
                    )}
                    <p>{project?.country ? project.country : "Canada"}</p>
                  </Styled.HeaderBottomSectionFlag>
                  <Styles.ProjectsContainerHeaderLink
                    isProjectLink={!!project?.button}
                  >
                    {project?.button ? (
                      <a href={project.button} target="_blank" rel="noreferrer">
                        project link
                      </a>
                    ) : (
                      <span>NDA</span>
                    )}
                    <Styles.ProjectsContainerArrowContainer
                      isProjectLink={!!project?.button}
                    >
                      <ButtonArrow />
                    </Styles.ProjectsContainerArrowContainer>
                  </Styles.ProjectsContainerHeaderLink>
                </Styled.HeaderBottomSection>
              </Styled.HeaderContainerBlock>
              <Styled.HeaderImageContainer>
                <CircleProjectPage />
                <Image
                  alt="project image"
                  src={
                    project?.imageProjectBanner?.image
                      ? project.imageProjectBanner.image!.url
                      : project!.image.url
                  }
                  height={470}
                  width={460}
                  objectFit="contain"
                />
              </Styled.HeaderImageContainer>
            </Styled.PortfolioPageHeaderContainer>
            <Styled.PortfolioPageInfoContainer>
              <h3>About project:</h3>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <Styled.InfoContainerIndustry>
                // {project?.industry}
              </Styled.InfoContainerIndustry>
              <Styled.InfoContainerText>
                {project?.text}
              </Styled.InfoContainerText>
              <Styled.InfoWrapperTimeTeam>
                <Styled.InfoContainerTimeTeam>
                  <TimeIcon />
                  <p>{project?.projectDuration} month</p>
                </Styled.InfoContainerTimeTeam>
                <Styled.InfoContainerTimeTeam>
                  <TeamIcon />
                  <p>{project?.projectTeam} team members</p>
                </Styled.InfoContainerTimeTeam>
              </Styled.InfoWrapperTimeTeam>
            </Styled.PortfolioPageInfoContainer>
            <Styled.PortfolioPageIconContainer>
              {project?.technologies &&
                project?.technologies.map((item) => (
                  <Image
                    key={item.image.url}
                    src={item.image.url}
                    alt="tech"
                    className="image"
                    layout="fill"
                  />
                ))}
            </Styled.PortfolioPageIconContainer>
          </Styled.PortfolioPageWrapper>
          <FooterNew />
        </PortfolioContainer>
      )}
    </Loader>
  );
};

export default PortfolioProjectPage;
