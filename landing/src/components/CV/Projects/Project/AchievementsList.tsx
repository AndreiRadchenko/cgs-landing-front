import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import * as Styled from "./AchievementsList.styled";

import achievement from "../../../../../public/CV/achievement.svg";

interface IProps {
  achievements: string[];
}

export const AchievementsList = ({ achievements }: IProps) => {
  return (
    <>
      <Styled.Achievements>
        <Styled.AchievementsTitle>Achievements:</Styled.AchievementsTitle>
        <Styled.AchievementsListWrapper>
          <Styled.AchievementsList>
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
          <Styled.Shadow>
            <Styled.TopCorner />
            <Styled.BottomCorner />
          </Styled.Shadow>
        </Styled.AchievementsListWrapper>
      </Styled.Achievements>
    </>
  );
};
