import React, { memo } from "react";
import { FieldArray, useFormikContext } from "formik";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminFooterLinks from "./AdminFooterLinks";
import AdminSocialMediaIcon from "./AdminSocialMediaIcon";

const AdminFooterBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction();

  const uploadFunc = (i: IImage) => (image: any) =>
    uploadImageFunction(image, i);
  const deleteFunc = (i: IImage) => async () => (await deleteImageFunction)(i);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
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
        <Styled.AdminCardsGrid>
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
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default memo(AdminFooterBlock);
