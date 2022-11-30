﻿import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const FooterBlock = () => {
  const { values, handleChange } = useFormikContext<IServiceMobile>();
  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);
  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            name="footerBlock.title"
            onChangeFunction={handleChange}
            inputValue={values.footerBlock.title}
          />
          <TextEditor header="Text" name="footerBlock.text" />
          <SubHeaderWithInput
            header="Button"
            name="footerBlock.button"
            onChangeFunction={handleChange}
            inputValue={values.footerBlock.button}
          />
          <SubHeaderWithInput
            header="Button Link"
            name="footerBlock.buttonLink"
            onChangeFunction={handleChange}
            inputValue={values.footerBlock.buttonLink}
          />
        </div>
        <PhotoBlockDashed
          photo={values.footerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
        />
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default FooterBlock;
