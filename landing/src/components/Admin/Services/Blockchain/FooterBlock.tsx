import React from "react";
import { useFormikContext } from "formik";
import { IBlockchainService } from "../../../../types/Admin/Response.types";
import { IImage } from "../../../../types/Admin/Admin.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import { AdminPaddedBlock, AdminHalfGrid } from "../../../../styles/AdminPage";

const FooterBlock = () => {
  const { values, handleChange } = useFormikContext<IBlockchainService>();
  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);
  const { image, ...blocks } = values.footerBlock;

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "footerBlock" },
          state: blocks,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={image}
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

export default FooterBlock;
