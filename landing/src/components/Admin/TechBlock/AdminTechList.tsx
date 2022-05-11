import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { AdminCardsGrid } from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminTech from "./AdminTech";

const AdminTechList = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const deleteFunc = (i: IImage) => async () => (await deleteImageFunction)(i);
  const uploadFunc = (i: IImage) => (image: any) =>
    uploadImageFunction(image, i);

  return (
    <AdminCardsGrid>
      {values.TechnologyBlock.techs.map((i, ind) => (
        <AdminTech
          key={`TechAdmin${ind}`}
          info={i}
          onChangeFunction={handleChange}
          ind={ind}
          deleteFunction={deleteFunc(i)}
          uploadFunction={uploadFunc(i)}
        />
      ))}
    </AdminCardsGrid>
  );
};

export default AdminTechList;
