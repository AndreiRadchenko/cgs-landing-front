import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";

const FirstAdminBlock = () => {
  const { values } = useFormikContext<IDataResponse>();
  const deleteImageFunction = useDeleteImageFunction(values.MainLogoBlock);
  const uploadImageFunction = useUploadImageFunction(values.MainLogoBlock);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Home</Styled.AdminHeader>
      <Styled.AdminSubTitle>Upload Logo</Styled.AdminSubTitle>
      <Styled.AdminAddMainLogoBlock>
        <PhotoBlockDashed
          photo={values.MainLogoBlock.image}
          deleteFlag={true}
          uploadFunction={(image) => uploadImageFunction(image)}
          deleteFunction={async () => (await deleteImageFunction)()}
        />
      </Styled.AdminAddMainLogoBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default FirstAdminBlock;
