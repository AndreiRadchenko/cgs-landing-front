import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import { AdminCardsGrid } from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminTech from "./AdminTech";

const AdminTechList = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  return (
    <AdminCardsGrid>
      {values.TechnologyBlock.techs.map((i, ind) => (
        <AdminTech
          key={`TechAdmin${ind}`}
          info={i}
          onChangeFunction={handleChange}
          ind={ind}
          deleteFunction={async () => (await deleteImageFunction)(i)}
          uploadFunction={(image) => uploadImageFunction(image, i)}
        />
      ))}
    </AdminCardsGrid>
  );
};

export default AdminTechList;
