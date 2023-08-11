import React, { useRef } from "react";
import Image from "next/image";

import { AchievementsList } from "./AchievementsList";

import * as Styled from "./Project.styled";

import { ITechnology } from "../../../../types/Admin/technologies.types";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import { SplitBrackets } from "../../../../utils/splitBrackets";

interface IProps {
  projectName: string;
  role: string;
  date: string;
  summary: string;
  achievements: string[];
  technology: ITechnology[];
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
  const refProjectCard = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(refProjectCard, { threshold: 0.6 });

  return (
    <Styled.InfoCard
      ref={refProjectCard}
      className={entry?.isIntersecting ? "intersecting" : ""}
    >
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
        <Styled.AboutText>
          <SplitBrackets text={summary} />
        </Styled.AboutText>
      </Styled.About>
      <Styled.AchievementsTechnologyWrapp>
        <AchievementsList achievements={achievements} />
        <Styled.Technologies>
          <Styled.TechnologiesTitle>Technologies:</Styled.TechnologiesTitle>
          <Styled.PortfolioPageIconContainer firstSet>
            {technology.map((e, idx) => (
              <div key={idx} className="image">
                <Image
                  src={e?.image?.url ? e.image.url : ""}
                  alt="tech"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </Styled.PortfolioPageIconContainer>
        </Styled.Technologies>
      </Styled.AchievementsTechnologyWrapp>
    </Styled.InfoCard>
  );
};
