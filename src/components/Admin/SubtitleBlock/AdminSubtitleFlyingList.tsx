import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import * as Styled from "../../../styles/AdminPage";
import { IPropsWithImage } from "../../../types/Admin/BlockProps";
import { IDataResponse, ISubtitle } from "../../../types/Admin/Response.types";
import AdminInputWithImage from "../Global/AdminInputWithImage";

interface ISubtitleFlyProps extends IPropsWithImage {
  state: ISubtitle;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
}

const render = ({
  state,
  onChangeFunction,
  deleteFunction,
  uploadFunction,
}: ISubtitleFlyProps) =>
  state.elements.map((i, ind) => {
    return (
      <AdminInputWithImage
        name={`SubtitleBlock.elements.${ind}.text`}
        key={`SubtitleBlockElement${ind}`}
        photo={i.image}
        inputValue={i.text}
        onChangeFunction={onChangeFunction}
        deleteFunction={() => deleteFunction(i)}
        uploadFunction={(image) => uploadFunction(image, i)}
      />
    );
  });

const AdminSubtitleFlyingList = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();
  return (
    <Styled.AdminFlyingElementsBlock>
      {render({
        state: values.SubtitleBlock,
        onChangeFunction: handleChange,
        deleteFunction: async (i) => (await deleteImageFunction)(i),
        uploadFunction: uploadImageFunction,
      })}
    </Styled.AdminFlyingElementsBlock>
  );
};

export default AdminSubtitleFlyingList;
