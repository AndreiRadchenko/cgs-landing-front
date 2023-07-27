import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";

const AdminFooterBlockMobile = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobile>();
  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);

  const handleClick = () => handleSubmit();
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
          <SubHeaderWithInput
            header="Text"
            name="footerBlock.text"
            onChangeFunction={handleChange}
            inputValue={values.footerBlock.text}
          />
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

export default AdminFooterBlockMobile;
