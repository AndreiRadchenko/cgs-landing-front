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

  const { data }: IPortfolioResponse = useQuery(
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
        <Styled.TitleWrapp>
          <Styled.Title>{projectName}</Styled.Title>
          <Styled.Date>{date}</Styled.Date>
        </Styled.TitleWrapp>
      </Styled.NumberTitleWrapp>
      <Styled.Role>Role: {role}</Styled.Role>
      <Styled.About>
        <Styled.AboutTitle>ABOUT PROJECT:</Styled.AboutTitle>
        <Styled.AboutText>{summary}</Styled.AboutText>
      </Styled.About>
      <Styled.Achievemts>
        <Styled.AchievemtsTitle>Achievements:</Styled.AchievemtsTitle>
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
      </Styled.Achievemts>
      <Styled.Technologies>
        <Styled.AchievemtsTitle>Technologies:</Styled.AchievemtsTitle>
        <Styled.PortfolioPageIconContainer firstSet>
          {technology &&
            technology.map((techname, idx) => {
              const technology = technologies?.find((e) => e.name === techname);
              return (
                <Image
                  key={idx}
                  src={technology?.image.url ? technology.image.url : ""}
                  alt="tech"
                  className="image"
                  layout="fill"
                />
              );
            })}
        </Styled.PortfolioPageIconContainer>
      </Styled.Technologies>
    </Styled.InfoCard>
  );
};
