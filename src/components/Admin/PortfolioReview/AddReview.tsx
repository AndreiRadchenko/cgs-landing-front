import AdminDropDown from "../Global/AdminDropDown";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface IAddReviewProps {
  categories: string[];
  setIsReady: (value: boolean) => void;
  newFlag: boolean;
}

const AddReview = ({ categories, setIsReady, newFlag }: IAddReviewProps) => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IPortfolioReview>();
  const [catValue, setCatValue] = useState(values.category);
  const deleteFunction = useDeleteImageFunction(values, "");
  const uploadFunction = useUploadImageFunction(values, "");

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    values.category = catValue;
    setIsReady(true);
    handleSubmit();
    setCatValue("");
  };

  return (
    <div>
      <Styled.AdminHalfGrid>
        <AdminDropDown
          menu={categories}
          value={catValue}
          setValue={setCatValue}
        />
      </Styled.AdminHalfGrid>
      <Styled.AdminPortfolioImage>
        <PhotoBlockDashedHorizontal
          emptyHeader="Drop banner here"
          photo={values.image}
          deleteFunction={async () => (await deleteFunction)()}
          uploadFunction={(image) => uploadFunction(image)}
        />
      </Styled.AdminPortfolioImage>
      <div>
        <Styled.AdminInput
          placeholder="Name project"
          value={values.title}
          onChange={handleChange}
          name="title"
        />
        <Styled.AdminInput
          minRows={4}
          placeholder="Text"
          value={values.text}
          onChange={handleChange}
          name="text"
        />
        <SubHeaderWithInput
          placeholder="Project link"
          header="Button"
          inputValue={values.button}
          onChangeFunction={handleChange}
          name="button"
        />
        <Styled.AdminBigButton onClick={submitFunction} type="button">
          {newFlag ? "Add review" : "Edit review"}
        </Styled.AdminBigButton>
      </div>
    </div>
  );
};

export default AddReview;
