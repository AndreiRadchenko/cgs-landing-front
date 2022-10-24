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

const TeamProvides = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobileAudit>();

  const handleClick = () => handleSubmit();

  const deleteImageFunction = useDeleteImageFunction(values.headerBlock);
  const uploadImageFunction = useUploadImageFunction(values.headerBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="CGS-TEAM PROVIDES:">
      <SubHeaderWithInput
        header="Subtitle 1"
        width="350px"
        height="75px"
        isAdmin
        inputValue={values.whatAppInclude.subtitle}
        name="whatAppInclude.subtitle"
        onChangeFunction={handleChange}
      />
      <Styled.AdminMobileAuditWhatAppWrapper>
        <Styled.ProjectInfo>
          <Styled.AdminSubTitle>Text</Styled.AdminSubTitle>
          {values.whatAppInclude.textBlock.map((item, idx) => (
            <Styled.AdminInput
              key={idx}
              value={item.text}
              onChange={handleChange}
              isAdmin
              name={`whatAppInclude.textBlock.[${idx}].text`}
              width="421px"
            />
          ))}
        </Styled.ProjectInfo>
        <Styled.ProjectInfo>
          <Styled.AdminSubTitle>Text 1.1</Styled.AdminSubTitle>
          {values.whatAppInclude.textBlock[0].subtext.map((item, idx) => (
            <Styled.AdminInput
              key={idx}
              value={item}
              onChange={handleChange}
              isAdmin
              name={`whatAppInclude.textBlock.[0].subtext[${idx}]`}
              width="421px"
            />
          ))}
        </Styled.ProjectInfo>
        <Styled.ProjectInfo>
          <Styled.AdminSubTitle>Banner</Styled.AdminSubTitle>
          <PhotoBlockDashed
            maxWidth="235px"
            maxHeight="249px"
            photo={values.whatAppInclude.image}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </Styled.ProjectInfo>
      </Styled.AdminMobileAuditWhatAppWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1em", marginBottom: "2.78em" }}
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

export default TeamProvides;
