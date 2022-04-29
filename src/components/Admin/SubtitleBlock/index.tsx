import React from "react";
import * as Styled from "../../../styles/AdminPage";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { FieldArray, useFormikContext } from "formik";
import AdminSubtitleFlyingList from "./AdminSubtitleFlyingList";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";

const SubtitleBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<
    IDataResponse
  >();
  const uploadImageFunction = useUploadImageFunction(
    handleSubmit,
    values.SubtitleBlock,
  );
  const deleteImageFunction = useDeleteImageFunction(
    values,
    handleSubmit,
    values.SubtitleBlock,
  );
  return (
    <>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHalfGrid>
          <div>
            <SubHeaderWithInput
              header="Subtitle"
              inputValue={values.SubtitleBlock.title}
              name="SubtitleBlock.title"
              onChangeFunction={handleChange}
            />
          </div>
        </Styled.AdminHalfGrid>
        <br />
        <FieldArray name="SubtitleBlock.elements">
          {() => <AdminSubtitleFlyingList />}
        </FieldArray>
      </Styled.AdminPaddedBlock>

      <Styled.AdminPaddedBlock>
        <Styled.AdminHalfGrid>
          <div>
            <SubHeaderWithInput
              header="Text 2"
              name="SubtitleBlock.firstText2"
              inputValue={values.SubtitleBlock.firstText2}
              onChangeFunction={handleChange}
            />
            <SubHeaderWithInput
              header="Text 3"
              name="SubtitleBlock.text3"
              inputValue={values.SubtitleBlock.text3}
              onChangeFunction={handleChange}
            />
            <SubHeaderWithInput
              header="Text 2"
              name="SubtitleBlock.secondText2"
              inputValue={values.SubtitleBlock.secondText2}
              onChangeFunction={handleChange}
            />
          </div>
          <Styled.AdminTecBottleDiv>
            <PhotoBlockDashed
              photo={values.SubtitleBlock.image}
              deleteFlag={true}
              uploadFunction={(image) => uploadImageFunction(image)}
              deleteFunction={async () => (await deleteImageFunction)()}
            />
          </Styled.AdminTecBottleDiv>
        </Styled.AdminHalfGrid>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default SubtitleBlock;
