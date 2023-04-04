import React from "react";

import { ILevel } from "../../types/Admin/AdminRateCard.types";

import {
  RateCardLevelData,
  RateCardLevelRow,
  RateCardLevelTable,
} from "../../styles/RateCard.styled";

const RateCardServiceInfo = ({ levels }: { levels: ILevel[] }) => {
  const joinTech = levels
    .map((level) => level.joints.joint_tech)
    .some((joint) => joint);
  const joinName = levels
    .map((level) => level.joints.joint_name)
    .some((joint) => joint);
  const joinCost = levels
    .map((level) => level.joints.joint_cost)
    .some((joint) => joint);

  return (
    <div style={{ padding: "10px 10px 20px 10px" }}>
      <RateCardLevelTable>
        <tbody>
          {levels.map((level, idx) => (
            <RateCardLevelRow key={`${level.name}${idx}`}>
              {joinName ? (
                idx === 0 ? (
                  <RateCardLevelData
                    rowSpan={levels.length}
                    style={{ width: "19%" }}
                  >
                    {level.name}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData style={{ width: "19%" }}>
                  {level.name}
                </RateCardLevelData>
              )}
              {joinTech ? (
                idx === 0 ? (
                  <RateCardLevelData
                    rowSpan={levels.length}
                    style={{ width: "59%" }}
                  >
                    {level.values.map((value) => value.technology).join(" // ")}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData style={{ width: "59%" }}>
                  {level.values.map((value) => value.technology).join(" // ")}
                </RateCardLevelData>
              )}
              {joinCost ? (
                idx === 0 ? (
                  <RateCardLevelData rowSpan={levels.length}>
                    {level.values.map((value) => value.cost).join(" // ")}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData>
                  {level.values.map((value) => value.cost).join(" // ")}
                </RateCardLevelData>
              )}
            </RateCardLevelRow>
          ))}
        </tbody>
      </RateCardLevelTable>
    </div>
  );
};

export default RateCardServiceInfo;
