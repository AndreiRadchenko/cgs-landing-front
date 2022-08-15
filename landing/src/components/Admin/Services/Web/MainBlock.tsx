import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import {
  AdminHeader,
  AdminHeaderGrid,
  AdminPaddedBlock,
} from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceWeb } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const MainBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceWeb>();

  const deleteMainImage = useDeleteImageFunction(values.headerBlock);
  const uploadMainImage = useUploadImageFunction(values.headerBlock);

  const { text, button, buttonLink } = values.headerBlock;

  const headerBlock = { text, button, buttonLink };

  return (
    <AdminPaddedBlock>
      <AdminHeader>Web // Desktop Development</AdminHeader>
      <AdminHeaderGrid>
        <div>
          <SubHeaderWithInput
            header="Title"
            onChangeFunction={handleChange}
            name="headerBlock.title"
            inputValue={values.headerBlock.title}
            width="257px"
          />
          {renderInputs({
            props: { name: "headerBlock" },
            state: headerBlock,
            onChangeFunction: handleChange,
          })}
        </div>
        <PhotoBlockDashed
          photo={values.headerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          maxWidth="364px"
          maxHeight="364px"
          deleteFlag={true}
          className="fullWidth"
        />
      </AdminHeaderGrid>
    </AdminPaddedBlock>
  );
};

export default MainBlock;
