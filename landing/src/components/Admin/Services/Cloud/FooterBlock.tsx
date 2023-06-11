import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import { AdminPaddedBlock, AdminHalfGrid } from "../../../../styles/AdminPage";
import ButtonArrow from "../../../../utils/ButtonArrow";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { IImage } from "../../../../types/Admin/Admin.types";
import { ICloudService } from "../../../../types/Admin/Response.types";

const FooterBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<ICloudService>();
  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);
  const { image, ...blocks } = values.footerBlock;

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <div>
          {Object.entries(blocks).map((el, idx) => (
            <div key={`footerBlock.${idx}`}>
              <SubHeaderWithInput
                onChangeFunction={handleChange}
                header={`Subtitle ${idx + 1}`}
                inputValue={el[1]}
                name={`footerBlock.${el[0]}`}
              />
            </div>
          ))}
          <SubHeaderWithInput
            onChangeFunction={handleChange}
            header={`Footer text`}
            inputValue={values.footerBlock.text}
            name={`footerBlock.text`}
            minRows={3}
          />
        </div>
        <PhotoBlockDashed
          photo={image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
        />
      </AdminHalfGrid>
      <div>
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
      </div>
    </AdminPaddedBlock>
  );
};

export default FooterBlock;
