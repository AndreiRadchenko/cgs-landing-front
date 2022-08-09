import { useFormikContext } from "formik";
import React from "react";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const StrongBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceMobile>();
  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          header="Subtitle"
          inputValue={values.strongBlock.subtitle}
          onChangeFunction={handleChange}
          name="strongBlock.subtitle"
        />
      </AdminHalfGrid>
      <AdminHalfGrid>
        {Object.entries(values.strongBlock.textBlock).map((el, idx) => (
          <div key={`strongBlock ${idx}`}>
            {renderInputs({
              props: { name: `strongBlock.textBlock.${el[0]}` },
              state: el[1],
              onChangeFunction: handleChange,
            })}
          </div>
        ))}
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default StrongBlock;
