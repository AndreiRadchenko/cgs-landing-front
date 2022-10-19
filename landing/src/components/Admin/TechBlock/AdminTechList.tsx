import { useFormikContext } from "formik";
import React from "react";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { AdminFlexColumn } from "../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataResponse } from "../../../types/Admin/Response.types";
import ButtonArrow from "../../../utils/ButtonArrow";
import AdminTech from "./AdminTech";

const AdminTechList = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataResponse>();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const deleteFunc = (i: IImage) => async () => (await deleteImageFunction)(i);
  const uploadFunc = (i: IImage) => (image: any) =>
    uploadImageFunction(image, i);

  const handleClick = () => handleSubmit();

  return (
    <div>
      <AdminFlexColumn>
        {Object.entries(values.TechnologyBlock).map((el, ind) => (
          <AdminTech
            key={`TechAdmin${ind}`}
            info={el[1]}
            onChangeFunction={handleChange}
            ind={ind + 1}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            item={el[0]}
            deleteFunction={deleteFunc(el[1])}
            uploadFunction={uploadFunc(el[1])}
          />
        ))}
      </AdminFlexColumn>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ margin: "2em 0" }}
        onClick={handleClick}
      >
        Save changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </div>
  );
};

export default AdminTechList;
