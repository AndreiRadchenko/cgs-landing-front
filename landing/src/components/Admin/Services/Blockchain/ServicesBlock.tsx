import React from "react";
import { useFormikContext } from "formik";
import {
  AdminPaddedBlock,
  AdminHalfGrid,
  AdminSubtitleGrid,
} from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IBlockchainService } from "../../../../types/Admin/Response.types";
import dynamic from "next/dynamic";

const ServicesBlock = () => {
  const { values, handleChange } = useFormikContext<IBlockchainService>();
  const deleteMainImage = useDeleteImageFunction(values.servicesBlock);
  const uploadMainImage = useUploadImageFunction(values.servicesBlock);
  const { subtitle, image, textSubBlock } = values.servicesBlock;

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={subtitle}
          name="servicesBlock.subtitle"
        />
      </AdminHalfGrid>
      <AdminSubtitleGrid>
        {textSubBlock.map((el, idx) => (
          <div key={idx}>
            <SubHeaderWithInput
              onChangeFunction={handleChange}
              header={`Text ${idx + 1}`}
              inputValue={el}
              name={`servicesBlock.textSubBlock.${idx}`}
            />
          </div>
        ))}
      </AdminSubtitleGrid>
      <AdminHalfGrid>
        <PhotoBlockDashed
          photo={image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
        />
        <TextEditor header="Text" name="servicesBlock.text" />
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default ServicesBlock;
