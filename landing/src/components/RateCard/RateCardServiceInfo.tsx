import React from "react";

import { ILevel } from "../../types/Admin/AdminRateCard.types";

import {
  RateCardLevelData,
  RateCardLevelRow,
  RateCardLevelTable,
} from "../../styles/RateCard.styled";

const RateCardServiceInfo = ({ levels }: { levels: ILevel[] }) => {
  return (
    <div style={{ padding: "10px 10px 20px 10px" }}>
      <RateCardLevelTable>
        <tbody>
          {levels.map((level, idx) => (
            <RateCardLevelRow key={`${level.name}${idx}`}>
              <RateCardLevelData style={{ width: "19%" }}>
                {level.name}
              </RateCardLevelData>
              <RateCardLevelData style={{ width: "59%" }}>
                {level.technology}
              </RateCardLevelData>
              <RateCardLevelData>{level.cost}</RateCardLevelData>
            </RateCardLevelRow>
          ))}
        </tbody>
      </RateCardLevelTable>
    </div>
  );
};

export default RateCardServiceInfo;
