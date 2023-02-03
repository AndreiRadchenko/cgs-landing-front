import { useFormikContext } from "formik";
import React from "react";
import { SortableItem } from "react-easy-sort";
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

  const handleSortEnd = (oldIndex: number, newIndex: number) => {
    values.TechnologyBlock.items.splice(
      newIndex,
      0,
      values.TechnologyBlock.items.splice(oldIndex, 1)[0]
    );
    handleSubmit();
  };

  return (
    <div>
      <AdminFlexColumn
        onSortEnd={handleSortEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        {values.TechnologyBlock.items.map((el, ind) => (
          <SortableItem key={`TechAdmin${ind}`}>
            <div>
              <AdminTech
                info={el}
                onChangeFunction={handleChange}
                ind={ind + 1}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                item={ind}
                isLastItem={values.TechnologyBlock.items.length - 1 !== ind}
                deleteFunction={deleteFunc(el)}
                uploadFunction={uploadFunc(el)}
              />
            </div>
          </SortableItem>
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
