import { useFormikContext } from "formik";
import React from "react";
import {
  AdminHalfGrid,
  AdminInput,
  AdminPaddedBlock,
  AdminSubtitleGrid,
} from "../../../../styles/AdminPage";
import { IServiceWeb } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const ComparisonBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceWeb>();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminSubtitleGrid>
        <div>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={values.comparisonBlock.desktopColumn.subtitle}
              onChangeFunction={handleChange}
              name="comparisonBlock.desktopColumn.subtitle"
            />
          </AdminHalfGrid>
          {values.comparisonBlock.desktopColumn.list.map((el, idx) => (
            <AdminInput
              key={`comparison block desktop ${idx}`}
              value={el}
              onChange={handleChange}
              name={`comparisonBlock.desktopColumn.list[${idx}]`}
            />
          ))}
        </div>
        <div>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={values.comparisonBlock.webColumn.subtitle}
              onChangeFunction={handleChange}
              name="comparisonBlock.webColumn.subtitle"
            />
          </AdminHalfGrid>
          {values.comparisonBlock.webColumn.list.map((el, idx) => (
            <AdminInput
              key={`comparison block web ${idx}`}
              value={el}
              onChange={handleChange}
              name={`comparisonBlock.webColumn.list[${idx}]`}
            />
          ))}
        </div>
      </AdminSubtitleGrid>
    </AdminPaddedBlock>
  );
};

export default ComparisonBlock;
