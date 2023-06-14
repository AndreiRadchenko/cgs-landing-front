import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { AdminSubTitle } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import {
  AdminInputsRowWrapper,
  AdminWebAuditFooterWrapper,
  AdminWebAuditInputsWrapper,
  AdminWebAuditPhotoWrapper,
} from "../../../../styles/WebAuditService/AdminWebAudit.styled";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceAi } from "../../../../types/Admin/Response.types";
import ButtonArrow from "../../../../utils/ButtonArrow";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const BringYourAppBlock = () => {
  const { values, handleSubmit, handleChange } = useFormikContext<IServiceAi>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.footerBlock);
  const uploadImageFunction = useUploadImageFunction(values.footerBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="LET'S BRING YOUT APP TO..">
      <AdminWebAuditFooterWrapper>
        <AdminWebAuditPhotoWrapper>
          <AdminSubTitle>Banner</AdminSubTitle>
          <PhotoBlockDashed
            style={{ height: "249px" }}
            photo={values.footerBlock.image}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
            deleteFlag={true}
          />
        </AdminWebAuditPhotoWrapper>
        <AdminWebAuditInputsWrapper>
          <SubHeaderWithInput
            inputValue={values.footerBlock.title}
            onChangeFunction={handleChange}
            header="Title"
            name="footerBlock.title"
            placeholder="Title"
            inputStyle={{ maxWidth: "413px" }}
          />
          <SubHeaderWithInput
            inputValue={values.footerBlock.text}
            onChangeFunction={handleChange}
            header="Text"
            name="footerBlock.text"
            placeholder="Text"
            inputStyle={{ maxWidth: "413px" }}
          />
          <AdminInputsRowWrapper>
            <SubHeaderWithInput
              inputValue={values.footerBlock.button}
              onChangeFunction={handleChange}
              header="Button"
              name="footerBlock.button"
              placeholder="Button"
            />
            <SubHeaderWithInput
              inputValue={values.footerBlock.buttonLink}
              onChangeFunction={handleChange}
              header="Button Link"
              name="footerBlock.buttonLink"
              placeholder="add link here"
            />
          </AdminInputsRowWrapper>
        </AdminWebAuditInputsWrapper>
      </AdminWebAuditFooterWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "25px", marginBottom: "2.78em" }}
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

export default BringYourAppBlock;
