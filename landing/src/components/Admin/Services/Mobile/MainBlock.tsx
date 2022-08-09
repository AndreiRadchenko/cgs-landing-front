import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import {
  AdminHalfGrid,
  AdminHeader,
  AdminPaddedBlock,
} from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

const MainBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceMobile>();
  const deleteMainImage = useDeleteImageFunction(values.mainBlock);
  const uploadMainImage = useUploadImageFunction(values.mainBlock);
  return (
    <AdminPaddedBlock>
      <AdminHeader>Mobile Development</AdminHeader>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "mainBlock" },
          state: values.mainBlock,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={values.mainBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          maxWidth="364px"
          maxHeight="364px"
          deleteFlag={true}
        />
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default MainBlock;
