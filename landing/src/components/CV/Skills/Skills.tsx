import React from "react";
import Image from "next/image";

import { SkillCard } from "./SkillCard/SkillCard";

import * as Styled from "./Skills.styled";
import { CvData } from "../../../types/Admin/AdminCv.types";
import LineBG from "../../../../public/CV/03.svg";
import TopLineBG from "../../../../public/CV/skills-top-dashed-line.svg";

interface IProps {
  data: CvData;
}

export const Skills = ({
  data: {
    skills: { title, card },
  },
}: IProps) => {
  const cardsToShow = card.filter((e) => e.subtitle !== "");
  return (
    <Styled.SkillsContainer>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TopBgImageContainer>
        <Image
          src={TopLineBG.src}
          alt="dashed line"
          layout="fill"
          objectFit="contain"
        />
      </Styled.TopBgImageContainer>
      <Styled.SkillsCardWrapper className="skills-wrapper">
        {cardsToShow.map((e, idx) => (
          <SkillCard
            subtitle={e.subtitle}
            stack={e.stack}
            key={idx}
            idx={idx}
          />
        ))}
      </Styled.SkillsCardWrapper>
      <Styled.BottomBgImageContainer>
        <Image
          src={LineBG.src}
          alt="dashed line"
          layout="fill"
          objectFit="contain"
        />
      </Styled.BottomBgImageContainer>
    </Styled.SkillsContainer>
  );
};
