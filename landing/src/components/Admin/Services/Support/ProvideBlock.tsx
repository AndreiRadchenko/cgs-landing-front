import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminInput,
  AdminPaddedBlock,
  AdminSubTitle,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceSupport } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const ProvideBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceSupport>();
  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.providesBlock.subtitle}
          name={`providesBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {values.providesBlock.textSubBlock.map((el, idx) => {
          return (
            <div key={`providesBlock textSubBlock ${idx}`}>
              <AdminSubTitle>Subtitle {idx + 1}</AdminSubTitle>
              <AdminInput
                value={el.subtitle}
                name={`providesBlock.textSubBlock[${idx}].subtitle`}
                onChange={handleChange}
                className="smallYOffset"
              />
              <AdminInput
                value={el.text}
                name={`providesBlock.textSubBlock[${idx}].text`}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default ProvideBlock;
