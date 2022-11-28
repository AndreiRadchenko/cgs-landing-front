import React from "react";
import { useFormikContext } from "formik";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";
import { IImage } from "../../../../types/Admin/Admin.types";
import { AdminPaddedBlock, AdminHalfGrid } from "../../../../styles/AdminPage";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const FooterBlock = () => {
  const { values, handleChange } = useFormikContext<IUxUiInterface>();

  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "footerBlock" },
          state: values.footerBlock,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={values.footerBlock.image}
          deleteFlag={true}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
        />
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default FooterBlock;
