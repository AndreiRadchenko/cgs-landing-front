import { FieldArray, useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminFooterLinks from "./AdminFooterLinks";
import AdminSocialMediaIcon from "./AdminSocialMediaIcon";

const AdminFooterBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction();

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
              uploadFunction={(image) => uploadImageFunction(image, i)}
              deleteFunction={async () => (await deleteImageFunction)(i)}
            />
          ))}
        </Styled.AdminCardsGrid>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFooterBlock;
