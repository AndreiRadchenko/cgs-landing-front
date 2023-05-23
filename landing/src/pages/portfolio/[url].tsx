import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

import { Loader, LoaderStub } from "../../components/Loader";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import TimeIcon from "../../components/Portfolio/svg/TimeIcon";
import TeamIcon from "../../components/Portfolio/svg/TeamIcon";
import CircleProjectPage from "../../components/Portfolio/svg/CircleProjectPage";
import CanadaFlag from "../../components/Portfolio/svg/CanadaFlag";
import SeeMoreProjects from "../../components/Portfolio/SeeMoreProjects";
import ProjectCta from "../../components/Portfolio/ProjectCta";
import CircleProjectPageMobile from "../../components/Portfolio/svg/CircleProjectPageMobile";
import ProjectFeedback from "../../components/Portfolio/ProjectFeedback";

import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { PortfolioContainer } from "../../styles/Portfolio.styled";

import * as Styled from "../../styles/PortfolioPage.styled";
import * as Styles from "../../styles/Portfolio.styled";

import {
  IPortfolioProjectResponse,
  IPortfolioResponse,
  IPortfolioReview,
  ITechnology,
} from "../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../consts/queryKeys";

import ButtonArrow from "../../utils/ButtonArrow";
import { openInNewTab } from "../../utils/OpenInNewTab";

import { useWindowDimension } from "../../hooks/useWindowDimension";

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
  const breadcrumbs: any[] = [];

  const [customId, setCustomId] = useState<null | string>(null);
  const url = router.asPath;
  const parts = url.split("-");
  const extractedId = parts[parts.length - 1];

  const [iconFirstSet, setIconFirstSet] = useState<ITechnology[]>([]);
  const [iconSecondSet, setIconSecondSet] = useState<ITechnology[]>([]);

  const { width } = useWindowDimension();

  const { data: project, isLoading }: IPortfolioProjectResponse = useQuery(
    [queryKeys.getPortfolioProjectPage, customId],
    () => adminPortfolioService.getProjectData(customId as string),
    { enabled: !!customId }
  );
  const { data }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );
  const { data: seeMoreProjIndustry }: { data?: IPortfolioReview[] } = useQuery(
    [queryKeys.getSeeMoreProjects, project?.title],
    () => adminPortfolioService.getByIndustry(project!.industry),
    {
      enabled: !!project?.industry,
      refetchOnWindowFocus: false,
    }
  );
  const { data: seeMoreProjCategory }: { data?: IPortfolioReview[] } = useQuery(
    [queryKeys.getSeeMoreProjectsCategory, project?.title],
    () => adminPortfolioService.getByCategory(project!.categories[0]),
    {
      enabled: !!project?.categories,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (project && project?.text.length <= 350) {
      setIconFirstSet(project?.technologies.slice(0, 6));
      setIconSecondSet(
        project?.technologies.slice(6, project.technologies.length)
      );
    } else {
      project && setIconFirstSet(project?.technologies);
    }
  }, [project]);

  useEffect(() => {
    setCustomId(extractedId);
  }, [extractedId]);

  breadcrumbs.push(
    <Link key="home" href="/">
      <a>Homepage</a>
    </Link>
  );

  breadcrumbs.push(
    <Link key="portfolio" href="/portfolio">
      <a>Portfolio</a>
    </Link>
  );

  breadcrumbs.push(<span key="project">{project?.title}</span>);

  return (
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
      ) : (
        <PortfolioContainer>
          <HeaderNavNew />
          <Styled.Breadcrumbs>
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                {breadcrumb}
                {index < breadcrumbs.length - 1 && (
                  <Styled.BreadcrumbSeparator>&gt;</Styled.BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </Styled.Breadcrumbs>
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
                {width && width > 769 ? (
                  <CircleProjectPage />
                ) : (
                  <CircleProjectPageMobile />
                )}
                {project?.imageProjectBanner?.image?.url !== "" && (
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
                )}
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
                  <p>{project?.projectDuration} months</p>
                </Styled.InfoContainerTimeTeam>
                <Styled.InfoContainerTimeTeam>
                  <TeamIcon />
                  <p>{project?.projectTeam} team members</p>
                </Styled.InfoContainerTimeTeam>
              </Styled.InfoWrapperTimeTeam>
            </Styled.PortfolioPageInfoContainer>
            {width && width > 768 ? (
              project && project?.text.length > 350 ? (
                <Styled.PortfolioPageIconContainer firstSet>
                  {iconFirstSet.map((item) => (
                    <Image
                      key={item.image.url}
                      src={item.image.url}
                      alt="tech"
                      className="image"
                      layout="fill"
                    />
                  ))}
                </Styled.PortfolioPageIconContainer>
              ) : (
                <>
                  <Styled.PortfolioPageIconContainer firstSet>
                    {iconFirstSet.map((item) => (
                      <Image
                        key={item.image.url}
                        src={item.image.url}
                        alt="tech"
                        className="image"
                        layout="fill"
                      />
                    ))}
                  </Styled.PortfolioPageIconContainer>
                  <Styled.PortfolioPageIconContainer>
                    {iconSecondSet.map((item) => (
                      <Image
                        key={item.image.url}
                        src={item.image.url}
                        alt="tech"
                        className="image"
                        layout="fill"
                      />
                    ))}
                  </Styled.PortfolioPageIconContainer>
                </>
              )
            ) : (
              project &&
              project?.technologies && (
                <Styled.PortfolioPageIconContainer firstSet>
                  {project?.technologies.map((item) => (
                    <Image
                      key={item.image.url}
                      src={item.image.url}
                      alt="tech"
                      className="image"
                      layout="fill"
                    />
                  ))}
                </Styled.PortfolioPageIconContainer>
              )
            )}
          </Styled.PortfolioPageWrapper>
          {data?.individualProjectPage.cta && (
            <ProjectCta projectInfo={data.individualProjectPage} />
          )}
          {data && project?.feedback && (
            <ProjectFeedback
              feedback={project.feedback}
              title={data.individualProjectPage.feedback}
            />
          )}
          {data && seeMoreProjIndustry && seeMoreProjCategory && project && (
            <SeeMoreProjects
              title={data.individualProjectPage.additionalProjects}
              mainProjectTitle={project.title}
              projectsIndustry={seeMoreProjIndustry}
              projectsCategory={seeMoreProjCategory}
            />
          )}
          <FooterNew />
        </PortfolioContainer>
      )}
    </Loader>
  );
};

export default PortfolioProjectPage;
