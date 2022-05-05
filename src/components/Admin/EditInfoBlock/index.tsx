import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import LeftSideBlock from "./LeftSide";
import RightSideBlock from "./RightSide";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";

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
      <Styled.AdminHeader>Edit Information</Styled.AdminHeader>
      <Styled.AdminHalfGrid>
        <LeftSideBlock
          state={values.EditInformationBlock}
          onChangeFunction={handleChange}
        />
        <RightSideBlock
          image={values.EditInformationBlock.image}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
        />
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default EditInformationBlock;
