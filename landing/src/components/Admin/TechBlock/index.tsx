import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";

import AdminTechList from "./AdminTechList";

const AdminTechBlock = () => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <FieldArray name="TechnologyBlock">{() => <AdminTechList />}</FieldArray>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminTechBlock;
