import React from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import { Loader, LoaderStub } from "../../components/Loader";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import TimeIcon from "../../components/Portfolio/svg/TimeIcon";
import TeamIcon from "../../components/Portfolio/svg/TeamIcon";
import CircleProjectPage from "../../components/Portfolio/svg/CircleProjectPage";
import CanadaFlag from "../../components/Portfolio/svg/CanadaFlag";
import SeeMoreProjects from "../../components/Portfolio/SeeMoreProjects";
import ProjectCta from "../../components/Portfolio/ProjectCta";

import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { PortfolioContainer } from "../../styles/Portfolio.styled";

import * as Styled from "../../styles/PortfolioPage.styled";
import * as Styles from "../../styles/Portfolio.styled";

import {
  IPortfolioProjectResponse,
  IPortfolioResponse,
  IPortfolioReview,
} from "../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../consts/queryKeys";

import ButtonArrow from "../../utils/ButtonArrow";
import ProjectFeedback from "../../components/Portfolio/ProjectFeedback";
import { openInNewTab } from "../../utils/OpenInNewTab";

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
  const router = useRouter();

  const { data: project, isLoading }: IPortfolioProjectResponse = useQuery(
    [queryKeys.getPortfolioProjectPage, router.query.url],
    () => adminPortfolioService.getProjectData(router.query.url as string)
  );
  const { data }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );
  const { data: seeMoreProj }: { data?: IPortfolioReview[] } = useQuery(
    [queryKeys.getSeeMoreProjects, project?.title],
    () => adminPortfolioService.getByIndustry(project!.industry),
    {
      refetchOnWindowFocus: false,
    }
  );

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
                    onClick={() =>
                      !!project?.button && openInNewTab(project.button)
                    }
                    isProjectLink={!!project?.button}
                  >
                    {project?.button ? <p>project link</p> : <span>NDA</span>}
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
                  height={600}
                  width={600}
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
          {data?.individualProjectPage.cta && (
            <ProjectCta projectInfo={data.individualProjectPage} />
          )}
          {project?.feedback && <ProjectFeedback feedback={project.feedback} />}
          {data && seeMoreProj && project && (
            <SeeMoreProjects
              title={data.individualProjectPage.additionalProjects}
              mainProjectTitle={project.title}
              projects={seeMoreProj}
            />
          )}
          <FooterNew />
        </PortfolioContainer>
      )}
    </Loader>
  );
};

export default PortfolioProjectPage;
