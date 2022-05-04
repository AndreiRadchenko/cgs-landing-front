import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import * as Styled from "../../../../styles/AdminPage";
import { IDataResponse } from "../../../../types/Admin/Response.types";
import PhotoBlockDashedHorizontal from "../../Global/PhotoBlockdashedHorizontal";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const AdminHowWorkList = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();
  return (
    <div>
      {values.HowWeWorkBlock.blocks.map((i, ind) => {
        return (
          <div key={`HowWorkBlockNumb${ind}`}>
            <Styled.AdminHalfGrid>
              <div>
                <SubHeaderWithInput
                  key={`howWeWorkBlockHeader${ind}`}
                  header="Subtitle"
                  name={`HowWeWorkBlock.blocks.${ind}.subtitle`}
                  inputValue={i.subtitle}
                  onChangeFunction={handleChange}
                />
                <SubHeaderWithInput
                  key={`howWeWorkBlockText${ind}`}
                  header="Text"
                  name={`HowWeWorkBlock.blocks.${ind}.text`}
                  inputValue={i.text}
                  onChangeFunction={handleChange}
                />
              </div>
              <Styled.AdminHowWeWorkImageSize>
                <PhotoBlockDashedHorizontal
                  photo={i.image}
                  uploadFunction={(image) => uploadImageFunction(image, i)}
                  deleteFunction={async () => (await deleteImageFunction)(i)}
                />
              </Styled.AdminHowWeWorkImageSize>
            </Styled.AdminHalfGrid>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default AdminHowWorkList;
