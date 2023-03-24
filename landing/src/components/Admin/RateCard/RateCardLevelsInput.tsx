import React from "react";

import PlusBtn from "./plusBtn";

import { IRateCardLevelProps } from "../../../types/Admin/AdminRateCard.types";

import {
  AddNextLevel,
  AddNextTechCost,
  RateCardCost,
  RateCardLevelWrapper,
  RateCardTechCostWrapper,
  RateCardTechnology,
  RateCartLevel,
} from "../../../styles/AdminRateCard.styled";

const RateCardLevelsInput = ({ level, idx }: IRateCardLevelProps) => {
  return (
    <RateCardLevelWrapper>
      <RateCartLevel name={`levels[${idx}.name`} />
      <AddNextLevel>
        <PlusBtn />
        Add next level
      </AddNextLevel>
      <RateCardTechCostWrapper>
        <RateCardTechnology name={`levels[${idx}.technology`} />
        <RateCardCost name={`levels[${idx}.cost`} />
        <AddNextTechCost>[ +add next ]</AddNextTechCost>
      </RateCardTechCostWrapper>
    </RateCardLevelWrapper>
  );
};

export default RateCardLevelsInput;
