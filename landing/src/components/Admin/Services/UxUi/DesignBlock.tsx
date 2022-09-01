import React from "react";
import { useFormikContext } from "formik";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import { SubtitleGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";

const DesignBlock = () => {
  const { values, handleChange } = useFormikContext<IUxUiInterface>();

  return (
    <AdminPaddedBlock>
      <SubtitleGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          name={`designBlock.title`}
          inputValue={values.designBlock.title}
        />
      </SubtitleGrid>
      <SubtitleGrid>
        {values.designBlock.textSubBlock.map((el, idx) => (
          <SubHeaderWithInput
            key={idx}
            onChangeFunction={handleChange}
            header={`Text ${idx + 1}`}
            name={`designBlock.textSubBlock[${idx}]`}
            inputValue={el}
          />
        ))}
      </SubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default DesignBlock;
