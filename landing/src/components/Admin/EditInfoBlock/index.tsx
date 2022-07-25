import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import LeftSideBlock from "./LeftSide";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

const EditInformationBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const deleteImageFunction = useDeleteImageFunction(
    values.EditInformationBlock
  );
  const uploadImageFunction = useUploadImageFunction(
    values.EditInformationBlock
  );
  const uploadFunc = (image: any) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminHeader>Edit Information</Styled.AdminHeader>
          <LeftSideBlock
            state={values.EditInformationBlock}
            onChangeFunction={handleChange}
          />
        </div>
        <Styled.RightSideBlock>
          <Styled.AdminSubTitle>Main page photo</Styled.AdminSubTitle>
          <PhotoBlockDashed
            photo={values.EditInformationBlock.image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </Styled.RightSideBlock>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default EditInformationBlock;
