import PhotoBlockDashedHorizontal from "../../Global/PhotoBlockdashedHorizontal";
import React from "react";
import { useFormikContext } from "formik";
import { IDataResponse } from "../../../../types/Admin/Response.types";
import useUploadImageFunction from "../../../../hooks/uploadImageFunction";
import useDeleteImageFunction from "../../../../hooks/deleteImageFunction";

const AdminCorporateImages = () => {
  const { values } = useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  return (
    <div>
      {values.CorporateBlock.images.map((i, ind) => (
        <div key={`CorporateImages${ind}`}>
          <PhotoBlockDashedHorizontal
            photo={i.image}
            uploadFunction={(image) => uploadImageFunction(image, i)}
            deleteFunction={async () => (await deleteImageFunction)(i)}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default AdminCorporateImages;
