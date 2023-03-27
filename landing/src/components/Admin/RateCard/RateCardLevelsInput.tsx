import React from "react";

import { useFormikContext } from "formik";

import PlusBtn from "./plusBtn";
import TrashIconBtn from "./trashIconBtn";

import { IRateCardLevelProps } from "../../../types/Admin/AdminRateCard.types";

import {
  AddNextLevel,
  AddNextTechCost,
  JointCheckboxWrapper,
  RateCardCost,
  RateCardJointWrapper,
  RateCardLevelWrapper,
  RateCardTechCostWrapper,
  RateCardTechnology,
  RateCartLevel,
} from "../../../styles/AdminRateCard.styled";

const RateCardLevelsInput = ({ level, idx }: IRateCardLevelProps) => {
  const { values } = useFormikContext();

  /*const addLevel = (index: number) => {
    values.levels.splice(index, 0, {
      levels: [{ name: "", technology: "", cost: "" }],
    });
  };*/

  return (
    <RateCardLevelWrapper>
      <div style={{ maxWidth: "182px" }}>
        <RateCardJointWrapper>
          <span>Level</span>
          <JointCheckboxWrapper>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">joint level</label>
          </JointCheckboxWrapper>
        </RateCardJointWrapper>

        <RateCartLevel name={`levels[${idx}.name`} />
      </div>
      <AddNextLevel>
        <PlusBtn />
        Add next level
      </AddNextLevel>
      <RateCardTechCostWrapper>
        <div style={{ width: "100%" }}>
          <RateCardJointWrapper>
            <span>Technology</span>
            <JointCheckboxWrapper>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="scales">joint tech</label>
            </JointCheckboxWrapper>
          </RateCardJointWrapper>

          <RateCardTechnology name={`levels[${idx}.technology`} />
        </div>
        <div style={{ minWidth: "225px" }}>
          <RateCardJointWrapper>
            <span>Cost</span>
            <JointCheckboxWrapper>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="scales">joint rate</label>
            </JointCheckboxWrapper>
          </RateCardJointWrapper>
          <RateCardCost name={`levels[${idx}.cost`} />
        </div>
        <TrashIconBtn />
        <AddNextTechCost>[ +add next ]</AddNextTechCost>
      </RateCardTechCostWrapper>
    </RateCardLevelWrapper>
  );
};

export default RateCardLevelsInput;
