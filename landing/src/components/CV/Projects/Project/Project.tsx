import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

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
  const refTechContainer = useRef<HTMLDivElement>(null);
  const refTechBlockContainer = useRef<HTMLDivElement>(null);
  const [isOneRow, setIsOneRow] = useState(true);

  const isMobile = useMediaQuery("(max-width:768px)");
  const entry = useIntersectionObserver(refProjectCard, {
    threshold: isMobile ? 0.3 : 0.7,
  });

  useEffect(() => {
    const adjustWidth = () => {
      if (refTechBlockContainer.current && refTechContainer.current) {
        const parentWidth = refTechBlockContainer.current.offsetWidth;
        const childElement = refTechBlockContainer.current.querySelector(
          ".image"
        ) as HTMLElement;

        if (childElement) {
          const childWidth = childElement.offsetWidth + 8;

          const maxItemsWithoutExtraSpace = Math.floor(
            refTechBlockContainer.current.offsetWidth / childWidth
          );

          const optimalContainerWidth =
            maxItemsWithoutExtraSpace * childWidth - 8;

          refTechContainer.current.style.width = `${optimalContainerWidth}px`;

          const itemsInFirstRow = Math.floor(parentWidth / childWidth);
          const totalRows = Math.ceil(technology.length / itemsInFirstRow);

          setIsOneRow(totalRows === 1);
        }
      }
    };

    adjustWidth();

    window.addEventListener("resize", adjustWidth);

    return () => window.removeEventListener("resize", adjustWidth);
  }, [refTechContainer, technology]);

  return (
    <Styled.InfoCard
      ref={refProjectCard}
      className={`${entry?.isIntersecting ? "intersecting" : ""} cv-info-card`}
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
        <Styled.AboutTitle>About project:</Styled.AboutTitle>
        <Styled.AboutText>
          <SplitBrackets text={summary} />
        </Styled.AboutText>
      </Styled.About>
      <Styled.AchievementsTechnologyWrapp>
        <AchievementsList achievements={achievements} />
        <Styled.Technologies ref={refTechBlockContainer}>
          <Styled.TechnologiesTitle>Technologies:</Styled.TechnologiesTitle>
          <Styled.PortfolioPageIconContainer
            ref={refTechContainer}
            firstSet
            isOneRow={isOneRow}
          >
            {technology.map((e, idxTech) => (
              <div key={idxTech} className="image">
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
