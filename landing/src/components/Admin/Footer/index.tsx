import React, { memo } from "react";
import { FieldArray, useFormikContext } from "formik";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import * as Styled from "../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";
import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminFooterLinks from "./AdminFooterLinks";
import AdminSocialMediaIcon from "./AdminSocialMediaIcon";

const AdminFooterBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataResponse>();
  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction();
  const handleClick = () => handleSubmit();

  const uploadFunc = (i: IImage) => (image: any) =>
    uploadImageFunction(image, i);
  const deleteFunc = (i: IImage) => async () => (await deleteImageFunction)(i);

  return (
    <div>
      <div>
        <SubHeaderWithInput
          isAdmin
          width="47.5%"
          header="Email adress"
          name="FooterBlock.email"
          inputValue={values.FooterBlock.email}
          onChangeFunction={handleChange}
        />
        <FieldArray name="FooterBlock.links">
          {() => (
            <AdminFooterLinks
              state={values.FooterBlock.links}
              onChangeFunction={handleChange}
            />
          )}
        </FieldArray>
      </div>
      <Styled.AdminCardsGrid className="footer" style={{ marginTop: "2em" }}>
        {values.FooterBlock.images.map((i, ind) => (
          <AdminSocialMediaIcon
            image={i}
            key={`MediaIcon${ind}`}
            number={ind + 1}
            uploadFunction={uploadFunc(i)}
            deleteFunction={deleteFunc(i)}
          />
        ))}
      </Styled.AdminCardsGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ margin: "2em 0" }}
        onClick={handleClick}
      >
        Save changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </div>
  );
};

export default memo(AdminFooterBlock);
