import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import * as Styled from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceMobileAudit } from "../../../../types/Admin/Response.types";
import ButtonArrow from "../../../../utils/ButtonArrow";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const BringAppBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceMobileAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.footerBlock);
  const uploadImageFunction = useUploadImageFunction(values.footerBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="LET'S BRING YOU APP TO..">
      <Styled.MobileAuditHeaderGrid>
        <div>
          <Styled.AdminSubTitle>Banner</Styled.AdminSubTitle>
          <PhotoBlockDashed
            maxHeight="249px"
            maxWidth="235px"
            style={{ marginRight: 0 }}
            photo={values.footerBlock.image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </div>
        <Styled.MobileAuditHeaderInputsWrapper>
          <SubHeaderWithInput
            inputValue={values.footerBlock.title}
            onChangeFunction={handleChange}
            header="Title"
            isAdmin
            width="376px"
            name="footerBlock.title"
            placeholder="Title"
          />
          <Styled.AdminInput
            value={values.footerBlock.text}
            onChange={handleChange}
            maxWidth="376px"
            isAdmin
            name="footerBlock.text"
            placeholder="Text"
          />
          <SubHeaderWithInput
            inputValue={values.footerBlock.button}
            onChangeFunction={handleChange}
            header="Button"
            isAdmin
            maxWidth="347px"
            name="footerBlock.button"
            placeholder="Button"
          />
        </Styled.MobileAuditHeaderInputsWrapper>

        <Styled.BringAppButtonLinkWrapper>
          <SubHeaderWithInput
            inputValue={values.footerBlock.buttonLink}
            onChangeFunction={handleChange}
            header="Button link"
            isAdmin
            maxWidth="347px"
            name="footerBlock.buttonLink"
            placeholder="add link here"
          />
        </Styled.BringAppButtonLinkWrapper>
      </Styled.MobileAuditHeaderGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "2.33em", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminBlockDropDown>
  );
};

export default BringAppBlock;
