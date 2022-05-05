import React from "react";
import * as Styled from "../../../styles/AdminPage";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { FieldArray, useFormikContext } from "formik";
import AdminSubtitleFlyingList from "./AdminSubtitleFlyingList";
import { IDataResponse } from "../../../types/Admin/Response.types";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import { renderInputs } from "../../../utils/renderInputs";

const SubtitleBlock = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction(values.SubtitleBlock);
  const deleteImageFunction = useDeleteImageFunction(values.SubtitleBlock);

  const uploadFunc = (image: any) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  const renderState = {
    firstText2: values.SubtitleBlock.firstText2,
    text3: values.SubtitleBlock.text3,
    secondText2: values.SubtitleBlock.secondText2,
  };

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
            <FieldArray name="SubtitleBlock">
              {(props) =>
                renderInputs({
                  props,
                  state: renderState,
                  onChangeFunction: handleChange,
                })
              }
            </FieldArray>
          </div>
          <Styled.AdminTecBottleDiv>
            <PhotoBlockDashed
              photo={values.SubtitleBlock.image}
              deleteFlag={true}
              uploadFunction={uploadFunc}
              deleteFunction={deleteFunc}
            />
          </Styled.AdminTecBottleDiv>
        </Styled.AdminHalfGrid>
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default SubtitleBlock;
