import React from "react";
import dynamic from "next/dynamic";
import { useFormikContext } from "formik";

import LeftSideBlock from "./LeftSide";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styled from "../../../styles/AdminPage";
import ButtonArrow from "../../../utils/ButtonArrow";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";

const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});

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
          <Styled.AdminHomepageHeader>
            <LeftSideBlock
              state={values.EditInformationBlock}
              onChangeFunction={handleChange}
            />
            <Styled.MainPhoto>
              <Styled.AdminSubTitle>Main page photo</Styled.AdminSubTitle>
              <PhotoBlockDashed
                photo={values.EditInformationBlock.image}
                deleteFlag={true}
                uploadFunction={uploadFunc}
                deleteFunction={deleteFunc}
              />
            </Styled.MainPhoto>
          </Styled.AdminHomepageHeader>

          <Styled.AdminCalendlyPopup>
            <Styled.AdminCalendlyPopupTitle>
              <SubHeaderWithInput
                header="Calendly pop-up Title"
                name="CalendlyPopupBlock.title"
                inputValue={values.CalendlyPopupBlock.title}
                onChangeFunction={handleChange}
              />
            </Styled.AdminCalendlyPopupTitle>
            <Styled.AdminCalendlyPopupDescription>
              <TextEditor
                header="Calendly pop-up description"
                name="CalendlyPopupBlock.description"
                props={{
                  defaultValue: values.CalendlyPopupBlock.description || "",
                }}
              />
            </Styled.AdminCalendlyPopupDescription>
            <Styled.AdminCalendlyPopupButton>
              <SubHeaderWithInput
                header="Calendly pop-up button"
                name="CalendlyPopupBlock.buttonText"
                inputValue={values.CalendlyPopupBlock.buttonText}
                onChangeFunction={handleChange}
              />
            </Styled.AdminCalendlyPopupButton>
          </Styled.AdminCalendlyPopup>
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
      </Styled.AdminFlexRow>
    </Styled.ContentWrapper>
  );
};

export default EditInformationBlock;
