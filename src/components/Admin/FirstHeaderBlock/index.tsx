import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";

const FirstAdminBlock = () => {
  const { values } = useFormikContext<IDataResponse>();
  const deleteImageFunction = useDeleteImageFunction(values.MainLogoBlock);
  const uploadImageFunction = useUploadImageFunction(values.MainLogoBlock);
  
  const uploadFunc = (image: any) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Home</Styled.AdminHeader>
      <Styled.AdminSubTitle>Upload Logo</Styled.AdminSubTitle>
      <Styled.AdminAddMainLogoBlock>
        <PhotoBlockDashed
          photo={values.MainLogoBlock.image}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
        />
      </Styled.AdminAddMainLogoBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default FirstAdminBlock;
