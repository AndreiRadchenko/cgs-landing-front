import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse, ISubtitle } from "../../../types/Admin/Response.types";
import AdminInputWithImage from "../Global/AdminInputWithImage";

interface ISubtitleFlyProps {
  state: ISubtitle;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
  deleteImageFunction: (state?: IImage) => void;
  uploadImageFunction: (image: any, state?: IImage) => void;
}

const render = ({
  state,
  onChangeFunction,
  deleteImageFunction,
  uploadImageFunction,
}: ISubtitleFlyProps) =>
  state.elements.map((i, ind) => {
    return (
      <AdminInputWithImage
        name={`SubtitleBlock.elements.${ind}.text`}
        key={`SubtitleBlockElement${ind}`}
        photo={i.image}
        inputValue={i.text}
        onChangeFunction={onChangeFunction}
        deleteFunction={() => deleteImageFunction(i)}
        uploadFunction={(image) => uploadImageFunction(image, i)}
      />
    );
  });

const AdminSubtitleFlyingList = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<
    IDataResponse
  >();
  const uploadImageFunction = useUploadImageFunction(
    handleSubmit
  );
  const deleteImageFunction = useDeleteImageFunction(
    values,
    handleSubmit
  );
  return (
    <Styled.AdminFlyingElementsBlock>
      {render({
        state: values.SubtitleBlock,
        onChangeFunction: handleChange,
        deleteImageFunction: async (i) => (await deleteImageFunction)(i),
        uploadImageFunction,
      })}
    </Styled.AdminFlyingElementsBlock>
  );
};

export default AdminSubtitleFlyingList;
