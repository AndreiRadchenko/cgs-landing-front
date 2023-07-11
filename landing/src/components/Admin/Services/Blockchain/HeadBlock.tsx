import React from "react";
import { useFormikContext } from "formik";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IBlockchainService } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";

const HeadBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlockchainService>();
  const deleteMainImage = useDeleteImageFunction(values.headerBlock);
  const uploadMainImage = useUploadImageFunction(values.headerBlock);

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "headerBlock" },
          state: values.headerBlock,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={values.headerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
        />
      </AdminHalfGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminPaddedBlock>
  );
};

export default HeadBlock;
