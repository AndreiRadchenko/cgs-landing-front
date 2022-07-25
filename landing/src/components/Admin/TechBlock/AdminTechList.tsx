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
      {Object.entries(values.TechnologyBlock).map((el, ind) => (
        <AdminTech
          key={`TechAdmin${ind}`}
          info={el[1]}
          onChangeFunction={handleChange}
          ind={ind + 1}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          item={el[0]}
          deleteFunction={deleteFunc(el[1])}
          uploadFunction={uploadFunc(el[1])}
        />
      ))}
    </AdminCardsGrid>
  );
};

export default AdminTechList;
