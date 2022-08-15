import React from "react";
import { useFormikContext } from "formik";
import { AdminPaddedBlock, AdminHalfGrid } from "../../../../styles/AdminPage";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { IImage } from "../../../../types/Admin/Admin.types";
import { ICloudService } from "../../../../types/Admin/Response.types";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const FooterBlock = () => {
  const { values, handleChange } = useFormikContext<ICloudService>();
  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);
  const { image, ...blocks } = values.footerBlock;

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <div>
          {Object.entries(blocks).map((el, idx) => (
            <div key={`footerBlock.${idx}`}>
              <SubHeaderWithInput
                onChangeFunction={handleChange}
                header={el[0]}
                inputValue={el[1]}
                name={`footerBlock.${el[0]}.text`}
              />
            </div>
          ))}
        </div>
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
