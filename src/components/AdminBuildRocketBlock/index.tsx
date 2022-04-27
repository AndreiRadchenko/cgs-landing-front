import { FieldArray } from "formik";
import React, { ChangeEvent } from "react";
import * as Styled from "../../styles/AdminPage";
import { IBuildRocketBlock } from "../../types/Admin/Response.types";
import { renderInputs } from "../../utils/renderInputs";

interface IBuildRocketProps {
  state: IBuildRocketBlock;
  onChangeFunction: (e?: ChangeEvent<any>) => void;
}

const AdminBuildRocketBlock = ({
  state,
  onChangeFunction,
}: IBuildRocketProps) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <FieldArray name="BuildRocketBlock">
          {(props) => renderInputs({ props, state, onChangeFunction })}
        </FieldArray>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminBuildRocketBlock;
