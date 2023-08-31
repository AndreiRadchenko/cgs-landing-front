import React from "react";

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
            {achievements.slice(0, 6).map((e, idx) => (
              <Styled.AchievementsListItem key={idx}>
                <Styled.AchievementsListPintWrapper>
                  <Styled.AchievementsListPintLine />
                  <Styled.AchievementsListPintDiamond />
                </Styled.AchievementsListPintWrapper>
                <Styled.AchievementText>{e}</Styled.AchievementText>
              </Styled.AchievementsListItem>
            ))}
          </Styled.AchievementsList>
          <Styled.Shadow />
        </Styled.AchievementsListWrapper>
      </Styled.Achievements>
    </>
  );
};
