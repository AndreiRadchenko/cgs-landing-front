import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { Loader, LoaderStub } from "../../components/Loader";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";

import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { PortfolioContainer } from "../../styles/Portfolio.styled";
import * as Styled from "../../styles/PortfolioPage.styled";
import * as Styles from "../../styles/Portfolio.styled";

import { IPortfolioProjectResponse } from "../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../consts/queryKeys";
import ButtonArrow from "../../utils/ButtonArrow";

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
              <h2>{project?.title}</h2>
              <Styled.HeaderBottomSection>
                <Styled.HeaderBottomSectionFlag>
                  <svg
                    width="32"
                    height="17"
                    viewBox="0 0 32 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_10088_37060)">
                      <path
                        d="M1 1H8.5L8.80938 1.30938H23.1906L23.5 1H31V16H23.5L23.1906 15.6906H8.80938L8.5 16H1V1Z"
                        fill="#FF0000"
                      />
                      <path
                        d="M8.5 1H23.5V16H8.5V1ZM16.2812 14.8438L16.1406 12.1469C16.1386 12.1025 16.1465 12.0583 16.1638 12.0174C16.1811 11.9765 16.2074 11.94 16.2407 11.9107C16.274 11.8813 16.3134 11.8597 16.3561 11.8476C16.3989 11.8355 16.4437 11.8331 16.4875 11.8406L19.1719 12.3125L18.8094 11.3125C18.7947 11.2727 18.7928 11.2293 18.804 11.1884C18.8152 11.1475 18.8389 11.1111 18.8719 11.0844L21.8125 8.70312L21.15 8.39375C21.1053 8.37261 21.0698 8.33586 21.0502 8.2904C21.0306 8.24494 21.0283 8.19391 21.0437 8.14687L21.625 6.35938L19.9313 6.71875C19.8854 6.72832 19.8376 6.72172 19.796 6.70008C19.7544 6.67843 19.7216 6.64308 19.7031 6.6L19.375 5.82812L18.0531 7.24688C18.0229 7.27876 17.9832 7.29998 17.9398 7.30736C17.8965 7.31474 17.852 7.30788 17.8129 7.28782C17.7738 7.26775 17.7423 7.23555 17.7231 7.19605C17.7039 7.15656 17.698 7.11189 17.7063 7.06875L18.3438 3.78125L17.3219 4.37188C17.2979 4.38594 17.2713 4.39492 17.2437 4.39827C17.216 4.40163 17.188 4.39927 17.1614 4.39136C17.1347 4.38345 17.11 4.37015 17.0887 4.35229C17.0674 4.33442 17.0499 4.31237 17.0375 4.2875L16 2.25L14.9625 4.2875C14.9501 4.31237 14.9326 4.33442 14.9113 4.35229C14.89 4.37015 14.8653 4.38345 14.8386 4.39136C14.812 4.39927 14.784 4.40163 14.7563 4.39827C14.7287 4.39492 14.7021 4.38594 14.6781 4.37188L13.6562 3.78125L14.2938 7.06875C14.302 7.11189 14.2961 7.15656 14.2769 7.19605C14.2577 7.23555 14.2262 7.26775 14.1871 7.28782C14.148 7.30788 14.1035 7.31474 14.0602 7.30736C14.0168 7.29998 13.9771 7.27876 13.9469 7.24688L12.625 5.82812L12.2969 6.6C12.2784 6.64308 12.2456 6.67843 12.204 6.70008C12.1624 6.72172 12.1146 6.72832 12.0688 6.71875L10.375 6.35938L10.9562 8.14687C10.9717 8.19391 10.9694 8.24494 10.9498 8.2904C10.9302 8.33586 10.8947 8.37261 10.85 8.39375L10.1875 8.70312L13.1281 11.0844C13.1611 11.1111 13.1848 11.1475 13.196 11.1884C13.2072 11.2293 13.2053 11.2727 13.1906 11.3125L12.8281 12.3125L15.5125 11.8406C15.5563 11.8331 15.6011 11.8355 15.6439 11.8476C15.6866 11.8597 15.726 11.8813 15.7593 11.9107C15.7926 11.94 15.8189 11.9765 15.8362 12.0174C15.8535 12.0583 15.8614 12.1025 15.8594 12.1469L15.7188 14.8438H16.2812Z"
                        fill="white"
                      />
                    </g>
                    <rect x="1" y="1" width="30" height="15" stroke="black" />
                    <defs>
                      <clipPath id="clip0_10088_37060">
                        <rect x="1" y="1" width="30" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Canada</p>
                </Styled.HeaderBottomSectionFlag>
                <Styles.ProjectsContainerHeaderLink>
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
            </Styled.PortfolioPageInfoContainer>
          </Styled.PortfolioPageWrapper>
          <FooterNew />
        </PortfolioContainer>
      )}
    </Loader>
  );
};

export default PortfolioProjectPage;
