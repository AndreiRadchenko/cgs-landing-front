import React from "react";
import { useFormikContext } from "formik";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import {
  AdminPaddedBlock,
  AdminHeader,
  AdminHalfGrid,
} from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

const HeadBlock = () => {
  const { values, handleChange } = useFormikContext<IUxUiInterface>();
  const deleteMainImage = useDeleteImageFunction(values.headerBlock);
  const uploadMainImage = useUploadImageFunction(values.headerBlock);
  console.log(values);

  return (
    <AdminPaddedBlock>
      <AdminHeader>Ux/Ui Design</AdminHeader>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "headerBlock" },
          state: values.headerBlock,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={values.headerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          deleteFlag={true}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          maxHeight="364px"
          maxWidth="364px"
        />
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default HeadBlock;
