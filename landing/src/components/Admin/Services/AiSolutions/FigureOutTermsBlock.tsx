import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../../styles/DappAuditService/AdminDappAudit.styled";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceDappAudit } from "../../../../types/Admin/Response.types";
import ButtonArrow from "../../../../utils/ButtonArrow";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});

const FigureOutTermsBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceDappAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.figureOutBlock);
  const uploadImageFunction = useUploadImageFunction(values.figureOutBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="FIGURE OUT TERMS:">
      <Styled.FigureOutTermsBlockWrapper>
        <Styled.InputsWrapper>
          <SubHeaderWithInput
            inputValue={values.figureOutBlock.subtitle}
            onChangeFunction={handleChange}
            name="figureOutBlock.subtitle"
            placeholder="Title"
          />
          {Object.entries(values.figureOutBlock.textBlock).map((el, idx) => (
            <div>
              <TextEditor header="Text" name={`figureOutBlock.textBlock[${idx}]`}/>
            </div>
          ))}
        </Styled.InputsWrapper>
        <PhotoBlockDashed
          style={{ marginRight: 0, height: "249px", width: "235px" }}
          photo={values.figureOutBlock.image}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
        />
      </Styled.FigureOutTermsBlockWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "10px", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminBlockDropDown>
  );
};

export default FigureOutTermsBlock;
