import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceSupport } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const BonusesBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceSupport>();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.bonusesBlock.subtitle}
          name={`bonusesBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {values.bonusesBlock.textSubBlock.map((el, idx) => {
          return (
            <div key={`bonusesBlock textSubBlock ${idx}`}>
              <SubHeaderWithInput
                header={`Text ${idx + 1}`}
                name={`bonusesBlock.textSubBlock[${idx}]`}
                onChangeFunction={handleChange}
                inputValue={el}
              />
            </div>
          );
        })}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default BonusesBlock;
