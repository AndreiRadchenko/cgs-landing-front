import { FieldArray, useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminTechList from "./AdminTechList";

const AdminTechBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminCardsGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={values.TechnologyBlock.subtitle}
            name="TechnologyBlock.subtitle"
            onChangeFunction={handleChange}
          />
        </div>
      </Styled.AdminCardsGrid>
      <FieldArray name="TechnologyBlock.techs">
        {() => <AdminTechList />}
      </FieldArray>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminTechBlock;
