import React from "react";
import { useFormikContext } from "formik";

import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import LeftSideBlock from "../../Admin/EditInfoBlock/LeftSide";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";

import * as Styled from "../../../styles/AdminPage";
import { IAbout, IAboutUsResponse } from "../../../types/Admin/Response.types";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";

const AboutBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IAboutUsResponse>();
  const deleteImageFunction = useDeleteImageFunction(values.data?.about);
  const uploadImageFunction = useUploadImageFunction(values.data?.about);
  const handleClick = () => handleSubmit();
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <Styled.ContentWrapper>
      {/* <Styled.AdminFlexRow> */}
      <Styled.RightSideBlock>
        <Styled.AdminSubTitle>Banner</Styled.AdminSubTitle>
        <PhotoBlockDashed
          photo={values.data?.about.image}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
        />
      </Styled.RightSideBlock>
      <div>
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
      {/* </Styled.AdminFlexRow> */}
    </Styled.ContentWrapper>
  );
};

export default AboutBlock;
