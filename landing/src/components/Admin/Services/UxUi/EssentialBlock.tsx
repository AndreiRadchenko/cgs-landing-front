import React from "react";
import { useFormikContext } from "formik";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";
import {
  AdminPaddedBlock,
  AdminHalfGrid,
  AdminContentBlock,
} from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import { IImage } from "../../../../types/Admin/Admin.types";

const EssentialBlock = () => {
  const { values, handleChange } = useFormikContext<IUxUiInterface>();

  const deleteMainImage = useDeleteImageFunction(values.essentialBlock);
  const uploadMainImage = useUploadImageFunction(values.essentialBlock);

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <PhotoBlockDashed
          photo={values.essentialBlock.image}
          deleteFlag={true}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
        />
        <AdminContentBlock>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Title"
              inputValue={values.essentialBlock.title}
              onChangeFunction={handleChange}
              name="essentialBlock.title"
            />
          </AdminHalfGrid>
          <SubHeaderWithInput
            header="Text"
            inputValue={values.essentialBlock.text}
            onChangeFunction={handleChange}
            name="essentialBlock.text"
          />
        </AdminContentBlock>
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default EssentialBlock;
