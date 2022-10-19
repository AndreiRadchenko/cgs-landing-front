import React from "react";
import { useFormikContext } from "formik";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import LeftSideBlock from "./LeftSide";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";

const EditInformationBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataResponse>();
  const deleteImageFunction = useDeleteImageFunction(
    values.EditInformationBlock
  );
  const uploadImageFunction = useUploadImageFunction(
    values.EditInformationBlock
  );
  const handleClick = () => handleSubmit();
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <Styled.ContentWrapper>
      <Styled.AdminFlexRow>
        <div>
          <LeftSideBlock
            state={values.EditInformationBlock}
            onChangeFunction={handleChange}
          />
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
        </div>
        <Styled.RightSideBlock>
          <Styled.AdminSubTitle>Main page photo</Styled.AdminSubTitle>
          <PhotoBlockDashed
            maxHeight="20.75em"
            maxWidth="19.58em"
            photo={values.EditInformationBlock.image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </Styled.RightSideBlock>
      </Styled.AdminFlexRow>
    </Styled.ContentWrapper>
  );
};

export default EditInformationBlock;
