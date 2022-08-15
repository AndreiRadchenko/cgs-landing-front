import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceWeb } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const PerksBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceWeb>();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          header="Subtitle"
          onChangeFunction={handleChange}
          name="perksBlock.subtitle"
          inputValue={values.perksBlock.subtitle}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {values.perksBlock.list.map((el, idx) => (
          <SubHeaderWithInput
            key={`perks block input ${idx}`}
            header={`${idx + 1}`}
            onChangeFunction={handleChange}
            name={`perksBlock.list[${idx}]`}
            inputValue={values.perksBlock.list[idx]}
          />
        ))}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default PerksBlock;
