import React from "react";
import { useFormikContext } from "formik";
import { AdminPaddedBlock, AdminHalfGrid } from "../../../../styles/AdminPage";
import { ICloudService } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});

const ProvidesBlock = () => {
  const { values, handleChange } = useFormikContext<ICloudService>();
  const { subtitle, ...blocks } = values.providesBlock;

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={subtitle}
          name={`providesBlock.subtitle`}
        />
      </AdminHalfGrid>
      <AdminHalfGrid>
        {Object.entries(blocks).map((el, idx) => (
          <div key={`providesBlock.${idx}`}>
            <SubHeaderWithInput
              header={`Subtitle ${idx + 1}`}
              name={`providesBlock.${el[0]}.subtitle`}
              onChangeFunction={handleChange}
              inputValue={el[1].subtitle}
            />
            <TextEditor header="Text" name={`providesBlock.${el[0]}.text`} />
          </div>
        ))}
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default ProvidesBlock;
