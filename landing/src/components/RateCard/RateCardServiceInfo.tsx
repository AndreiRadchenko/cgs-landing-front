import React from "react";

import { ILevel, IValue } from "../../types/Admin/AdminRateCard.types";

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

  const generateCellTech = (value: IValue[]) => {
    const filteredVal = value.map((val) => val.technology).filter((el) => el);
    return filteredVal.map((tech, idx) =>
      idx === filteredVal.length - 1 ? (
        <span key={`${tech}${idx}`} className={`tech${idx}`}>
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

  const generateCellCost = (value: IValue[]) => {
    const filteredVal = value.map((value) => value.cost).filter((el) => el);
    return filteredVal.map((cost, idx) =>
      idx === filteredVal.length - 1 ? (
        <span key={`${cost}${idx}`} className={`cost${idx}`}>
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
    <div style={{ marginTop: "-1px" }}>
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
                    className="mainSpanName"
                    rowSpan={levels.length}
                    style={{
                      width: "19%",
                      textAlign: "center",
                      pointerEvents: "none",
                    }}
                  >
                    {level.name}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData
                  className={`rateName${idx} spanNameDefault`}
                  style={{
                    width: "19%",
                  }}
                >
                  {level.name}
                </RateCardLevelData>
              )}
              {joinTech ? (
                idx === 0 ? (
                  <RateCardLevelData
                    className={`rateTech${idx} mainSpanRate`}
                    rowSpan={levels.length}
                    style={{
                      width: "59%",
                      textAlign: "center",
                      pointerEvents: "none",
                    }}
                  >
                    {generateCellTech(level.values)}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData
                  className={`rateTech${idx} spanRateDefault`}
                  style={{ width: "59%" }}
                >
                  {generateCellTech(level.values)}
                </RateCardLevelData>
              )}
              {joinCost ? (
                idx === 0 ? (
                  <RateCardLevelData
                    className={`rateCost${idx} mainSpanCost`}
                    rowSpan={levels.length}
                    style={{ textAlign: "center", pointerEvents: "none" }}
                  >
                    {generateCellCost(level.values)}
                  </RateCardLevelData>
                ) : null
              ) : (
                <RateCardLevelData className={`rateCost${idx} spanCostDefault`}>
                  {generateCellCost(level.values)}
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
