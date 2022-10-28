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

const HeaderBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceMobileAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.headerBlock);
  const uploadImageFunction = useUploadImageFunction(values.headerBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <>
      <Styled.AdminHeader>Mobile app audit</Styled.AdminHeader>
      <AdminBlockDropDown title="BLOCK 1 (MAIN PAGE)">
        <Styled.MobileAuditHeaderGrid>
          <div>
            <Styled.AdminSubTitle>Banner</Styled.AdminSubTitle>
            <PhotoBlockDashed
              style={{ marginRight: 0 }}
              maxHeight="249px"
              maxWidth="235px"
              photo={values.headerBlock.image}
              deleteFlag={true}
              uploadFunction={uploadFunc}
              deleteFunction={deleteFunc}
            />
          </div>
          <Styled.MobileAuditHeaderInputsWrapper>
            <SubHeaderWithInput
              inputValue={values.headerBlock.title}
              onChangeFunction={handleChange}
              header="Title"
              isAdmin
              width="376px"
              name="headerBlock.title"
              placeholder="Title"
            />
            <SubHeaderWithInput
              inputValue={values.headerBlock.text}
              onChangeFunction={handleChange}
              header="Text"
              isAdmin
              width="455px"
              height="113px"
              name="headerBlock.text"
              placeholder="Text"
            />
          </Styled.MobileAuditHeaderInputsWrapper>
          <Styled.MobileAuditHeaderInputsWrapper className="header">
            <SubHeaderWithInput
              inputValue={values.headerBlock.button}
              onChangeFunction={handleChange}
              header="Button"
              isAdmin
              width="347px"
              name="headerBlock.button"
              placeholder="Button"
            />
            <SubHeaderWithInput
              inputValue={values.headerBlock.buttonLink}
              onChangeFunction={handleChange}
              header="Button link"
              isAdmin
              width="347px"
              name="headerBlock.buttonLink"
              placeholder="add link here"
            />
          </Styled.MobileAuditHeaderInputsWrapper>
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
    </>
  );
};

export default HeaderBlock;
