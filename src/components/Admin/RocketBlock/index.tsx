import { FieldArray, useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import { renderInputs } from "../../../utils/renderInputs";

const AdminBuildRocketBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <FieldArray name="BuildRocketBlock">
          {(props) =>
            renderInputs({
              props,
              state: values.BuildRocketBlock,
              onChangeFunction: handleChange,
            })
          }
        </FieldArray>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminBuildRocketBlock;
