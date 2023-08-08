import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import * as Styled from "./Project.styled";
import { IPortfolioResponse } from "../../../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminPortfolioService } from "../../../../services/adminPortfolioPage";

import achievement from "../../../../../public/CV/achievement.svg";

interface IProps {
  projectName: string;
  role: string;
  date: string;
  summary: string;
  achievements: string[];
  technology: string[];
  idx: number;
}

export const Project = ({
  projectName,
  role,
  date,
  summary,
  achievements,
  technology,
  idx,
}: IProps) => {
  const refElement = useRef<HTMLUListElement>(null);
  const [afterHeight, setAfterHeight] = useState("0px");

  const { data, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const technologies = data?.technologies;

  const parentHeight = refElement.current?.clientHeight || 0;

  useEffect(() => {
    setAfterHeight(`${parentHeight - 12}px`);
  }, [parentHeight]);

  return (
    <Styled.InfoCard>
      <Styled.NumberTitleWrapp>
        <Styled.Number>{idx + 1}</Styled.Number>
        <Styled.DesktopTitle>
          <Styled.TitleWrapp>
            <Styled.Title>{projectName}</Styled.Title>
            <Styled.Date>{date}</Styled.Date>
          </Styled.TitleWrapp>
          <Styled.Role className="desktop">Role: {role}</Styled.Role>
        </Styled.DesktopTitle>
      </Styled.NumberTitleWrapp>
      <Styled.Role className="mobile">Role: {role}</Styled.Role>
      <Styled.About>
        <Styled.AboutTitle>ABOUT PROJECT:</Styled.AboutTitle>
        <Styled.AboutText>{summary}</Styled.AboutText>
      </Styled.About>
      <Styled.AchievementsTechnologyWrapp>
        <Styled.Achievements>
          <Styled.AchievementsTitle>Achievements:</Styled.AchievementsTitle>
          <Styled.AchievementsListWrapper afterHeight={afterHeight}>
            <Styled.AchievementsList ref={refElement} afterHeight={afterHeight}>
              {achievements.map((e, idx) => (
                <Styled.AchievementsListItem key={idx}>
                  <Styled.AchievementIcon
                    src={achievement.src}
                    alt="checkbox done"
                  />
                  <Styled.AchievementText>{e}</Styled.AchievementText>
                </Styled.AchievementsListItem>
              ))}
            </Styled.AchievementsList>
          </Styled.AchievementsListWrapper>
        </Styled.Achievements>
        <Styled.Technologies>
          <Styled.AchievementsTitle>Technologies:</Styled.AchievementsTitle>
          <Styled.PortfolioPageIconContainer firstSet>
            {!isLoading &&
              technology.map((techname, idx) => {
                const technology = technologies?.find(
                  (e) => e.name === techname
                );
                return (
                  <div key={idx} className="image">
                    <Image
                      src={technology?.image.url ? technology.image.url : ""}
                      alt="tech"
                      layout="fill"
                    />
                  </div>
                );
              })}
          </Styled.PortfolioPageIconContainer>
        </Styled.Technologies>
      </Styled.AchievementsTechnologyWrapp>
    </Styled.InfoCard>
  );
};
