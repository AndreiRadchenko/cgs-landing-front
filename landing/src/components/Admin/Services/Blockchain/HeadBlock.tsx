import React from "react";
import { useFormikContext } from "formik";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import {
  AdminHalfGrid,
  AdminHeader,
  AdminPaddedBlock,
} from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IBlockchainService } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

const HeadBlock = () => {
  const { values, handleChange } = useFormikContext<IBlockchainService>();
  const deleteMainImage = useDeleteImageFunction(values.headerBlock);
  const uploadMainImage = useUploadImageFunction(values.headerBlock);

  return (
    <AdminPaddedBlock>
      <AdminHeader>Blockchain Development</AdminHeader>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "headerBlock" },
          state: values.headerBlock,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={values.headerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          maxHeight="364px"
          maxWidth="364px"
          deleteFlag={true}
        />
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default HeadBlock;