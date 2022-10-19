import { FieldArray } from "formik";
import React from "react";

import AdminTechList from "./AdminTechList";

const AdminTechBlock = () => {
  return (
    <div>
      <FieldArray name="TechnologyBlock">{() => <AdminTechList />}</FieldArray>
    </div>
  );
};

export default AdminTechBlock;
