import React from "react";
import { useFormikContext } from "formik";
import {
  AdminPaddedBlock,
  SubtitleGrid,
  AdminHalfGrid,
} from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";

const WhatDoWeDoBlock = () => {
  const { values, handleChange } = useFormikContext<IUxUiInterface>();

  const data = values.whatDoWeDoBlock.textSubBlock.map(
    ({ subtitle, text }) => ({ subtitle, text })
  );

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.whatDoWeDoBlock.title}
          name={`whatDoWeDoBlock.title`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(data).map((el, idx) => (
          <div key={idx}>
            {renderInputs({
              props: { name: `whatDoWeDoBlock.textSubBlock[${el[0]}]` },
              state: el[1],
              onChangeFunction: handleChange,
            })}
          </div>
        ))}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default WhatDoWeDoBlock;
