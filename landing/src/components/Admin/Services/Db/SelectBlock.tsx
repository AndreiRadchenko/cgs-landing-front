import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceDb } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

const SelectBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceDb>();
  const deleteMainImage = useDeleteImageFunction(values.selectBlock);
  const uploadMainImage = useUploadImageFunction(values.selectBlock);
  return (
    <AdminPaddedBlock className="withoutMargin">
      <AdminHalfGrid>
        <div>
          {renderInputs({
            props: { name: "selectBlock" },
            state: values.selectBlock,
            onChangeFunction: handleChange,
          })}
        </div>
        <PhotoBlockDashed
          photo={values.selectBlock.image}
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

export default SelectBlock;
