import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import React from "react";
import { useFormikContext } from "formik";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import { IImage } from "../../../types/Admin/Admin.types";

const AdminCorporateImages = () => {
  const { values } = useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const uploadFunc = (i: IImage) => (image: any) =>
    uploadImageFunction(image, i);
  const deleteFunc = (i: IImage) => async () => (await deleteImageFunction)(i);

  return (
    <div>
      {values.CorporateBlock.images.map((i, ind) => (
        <div key={`CorporateImages${ind}`}>
          <PhotoBlockDashedHorizontal
            photo={i.image}
            uploadFunction={uploadFunc(i)}
            deleteFunction={deleteFunc(i)}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default AdminCorporateImages;
