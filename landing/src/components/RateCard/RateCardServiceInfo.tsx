import React, { useState } from "react";

import { ILevel, IValue } from "../../types/Admin/AdminRateCard.types";

import {
  RateCardLevelData,
  RateCardLevelRow,
  RateCardLevelTable,
} from "../../styles/RateCard.styled";

const RateCardServiceInfo = ({ levels }: { levels: ILevel[] }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const joinTech = levels
    .map((level) => level.joints.joint_tech)
    .some((joint) => joint);
  const joinName = levels
    .map((level) => level.joints.joint_name)
    .some((joint) => joint);
  const joinCost = levels
    .map((level) => level.joints.joint_cost)
    .some((joint) => joint);

  const generateCellTech = (value: IValue[], joint: boolean) => {
    const filteredVal = value.map((val) => val.technology).filter((el) => el);
    return filteredVal.map((tech, idx) =>
      idx === filteredVal.length - 1 ? (
        <span
          onMouseEnter={joint ? toggleHover : undefined}
          onMouseLeave={joint ? toggleHover : undefined}
          key={`${tech}${idx}`}
          className={`tech${idx}`}
        >
          {" "}
          {tech}
        </span>
      ) : (
        <>
          <span key={`${tech}${idx}`} className={`tech${idx}`}>
            {" "}
            {tech}{" "}
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          </span>
          //
        </>
      )
    );
  };

  const generateCellCost = (value: IValue[], joint: boolean) => {
    const filteredVal = value.map((value) => value.cost).filter((el) => el);
    return filteredVal.map((cost, idx) =>
      idx === filteredVal.length - 1 ? (
        <span
          onMouseEnter={joint ? toggleHover : undefined}
          onMouseLeave={joint ? toggleHover : undefined}
          key={`${cost}${idx}`}
          className={`cost${idx}`}
        >
          {" "}
          {cost}
        </span>
      ) : (
        <>
          <span key={`${cost}${idx}`} className={`cost${idx}`}>
            {" "}
            {cost}{" "}
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          </span>
          //
        </>
      )
    );
  };

  return (
    <div style={{ padding: "10px 10px 20px 10px" }}>
      <RateCardLevelTable>
        <tbody>
          {levels.map((level, idx) => (
            <RateCardLevelRow
              countLevels={levels.length}
              countValues={level.values}
              className="rateRow"
              key={`${level.name}${idx}`}
            >
              {joinName ? (
                idx === 0 ? (
                  <RateCardLevelData
                    rowSpan={levels.length}
                    style={{ width: "19%", textAlign: "center" }}
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
                    className={`rateTech${idx} mainSpanRate`}
                    rowSpan={levels.length}
                    style={{ width: "59%", textAlign: "center" }}
                  >
                    {generateCellTech(level.values, joinTech)}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData
                  className={`rateTech${idx} ${hovered && "spanRate"}`}
                  style={{ width: "59%" }}
                >
                  {generateCellTech(level.values, joinTech)}
                </RateCardLevelData>
              )}
              {joinCost ? (
                idx === 0 ? (
                  <RateCardLevelData
                    className={`rateCost${idx}`}
                    rowSpan={levels.length}
                    style={{ textAlign: "center" }}
                  >
                    {generateCellCost(level.values, joinCost)}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData
                  className={`rateCost${idx} ${
                    hovered && "spanCost"
                  } spanCostDefault`}
                >
                  {generateCellCost(level.values, joinCost)}
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
