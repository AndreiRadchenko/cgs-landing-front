import React from "react";

import { FieldArray, useFormikContext } from "formik";

import PlusBtn from "./plusBtn";
import TrashIconBtn from "./trashIconBtn";

import { IService } from "../../../types/Admin/AdminRateCard.types";

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

const RateCardLevelsInput = () => {
  const { values } = useFormikContext<IService>();

  const newLevel = {
    name: "",
    joints: {
      joint_name: false,
      joint_tech: false,
      joint_cost: false,
    },
    values: [
      {
        technology: "",
        cost: "",
      },
    ],
  };

  const newValue = {
    technology: "",
    cost: "",
  };

  return (
    <FieldArray
      name="levels"
      render={({ insert, remove }) => (
        <>
          {values.levels.map((level, idx) => (
            <RateCardLevelWrapper key={`${idx}`}>
              <div style={{ maxWidth: "182px" }}>
                <RateCardJointWrapper>
                  <span>Level</span>
                  <JointCheckboxWrapper>
                    <input
                      type="checkbox"
                      id={`${values.name}${level.name}${idx}`}
                      name={`${values.name}${level.name}${idx}`}
                    />
                    <label htmlFor={`${values.name}${level.name}${idx}`}>
                      joint level
                    </label>
                  </JointCheckboxWrapper>
                </RateCardJointWrapper>

                <RateCartLevel
                  placeholder="Enter level..."
                  name={`levels[${idx}].name`}
                />
              </div>
              <AddNextLevel onClick={() => insert(idx + 1, newLevel)}>
                <PlusBtn />
                Add next level
              </AddNextLevel>
              <RateCardTechCostWrapper>
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "100%" }}>
                      <RateCardJointWrapper>
                        <span>Technology</span>
                        <JointCheckboxWrapper>
                          <input
                            type="checkbox"
                            id={`${values.name}technology${idx}`}
                            name={`${values.name}technology${idx}`}
                          />
                          <label htmlFor={`${values.name}technology${idx}`}>
                            joint tech
                          </label>
                        </JointCheckboxWrapper>
                      </RateCardJointWrapper>
                    </div>
                    <div style={{ minWidth: "225px" }}>
                      <RateCardJointWrapper>
                        <span>Cost</span>
                        <JointCheckboxWrapper>
                          <input
                            type="checkbox"
                            id={`${values.name}cost${idx}`}
                            name={`${values.name}cost${idx}`}
                          />
                          <label htmlFor={`${values.name}cost${idx}`}>
                            joint rate
                          </label>
                        </JointCheckboxWrapper>
                      </RateCardJointWrapper>
                    </div>
                  </div>
                  <FieldArray name={`levels[${idx}].values`}>
                    {(valuesHelpers) => (
                      <>
                        {level.values.map((value, valIdx) => (
                          <div
                            key={`${valIdx}`}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ width: "100%" }}>
                              <RateCardTechnology
                                placeholder="Enter technology..."
                                name={`levels[${idx}].values[${valIdx}].technology`}
                              />
                            </div>
                            <div style={{ minWidth: "225px" }}>
                              <RateCardCost
                                placeholder="Enter cost..."
                                name={`levels[${idx}].values[${valIdx}].cost`}
                              />
                            </div>
                            <TrashIconBtn
                              onClick={() =>
                                level.values.length === 1
                                  ? remove(idx)
                                  : valuesHelpers.remove(valIdx)
                              }
                            />
                          </div>
                        ))}
                        <AddNextTechCost
                          onClick={() => valuesHelpers.push(newValue)}
                        >
                          [ +add next ]
                        </AddNextTechCost>
                      </>
                    )}
                  </FieldArray>
                </div>
              </RateCardTechCostWrapper>
            </RateCardLevelWrapper>
          ))}
        </>
      )}
    />
  );
};

export default RateCardLevelsInput;
