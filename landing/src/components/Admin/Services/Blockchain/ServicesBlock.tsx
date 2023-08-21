import React from "react";
import dynamic from "next/dynamic";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import {
  AdminPaddedBlock,
  AdminHalfGrid,
  AdminSubtitleGrid,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IBlockchainService } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});

const ServicesBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlockchainService>();
  const deleteMainImage = useDeleteImageFunction(values.servicesBlock);
  const uploadMainImage = useUploadImageFunction(values.servicesBlock);
  const { subtitle, image, textSubBlock } = values.servicesBlock;

  const handleClick = () => handleSubmit();

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
        <div style={{ display: "block" }}>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={values.servicesBlock.descriptionSubtitle}
            name="servicesBlock.descriptionSubtitle"
            onChangeFunction={handleChange}
          />
          <TextEditor header="Text" name="servicesBlock.text" />
        </div>
      </AdminHalfGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminPaddedBlock>
  );
};

export default ServicesBlock;
