import React from "react";

import { SkillCard } from "./SkillCard/SkillCard";

import * as Styled from "./Skills.styled";
import { CvData } from "../../../types/Admin/AdminCv.types";

interface IProps {
  data: CvData;
}

export const Skills = ({
  data: {
    skills: { title, card },
  },
}: IProps) => {
  return (
    <>
      <Styled.Title>{title}:</Styled.Title>
      {card.map((e, idx) => (
        <SkillCard subtitle={e.subtitle} stack={e.stack} key={idx} idx={idx} />
      ))}
    </>
  );
};
