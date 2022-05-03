import AdminDropDown from "../Global/AdminDropDown";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import {
  IPortfolioResponse,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface IAddReviewProps {
  state: IPortfolioResponse;
  setIsReady: (value: boolean) => void;
}

const AddReview = ({ state, setIsReady }: IAddReviewProps) => {
  const { values, handleSubmit, handleChange } = useFormikContext<
    IPortfolioReview
  >();
  const [catValue, setCatValue] = useState("");
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
      <Styled.AdminCategoryBlock>
        <AdminDropDown
          menu={state.categories}
          value={catValue}
          setValue={setCatValue}
        />
      </Styled.AdminCategoryBlock>
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
          Add review
        </Styled.AdminBigButton>
      </div>
    </div>
  );
};

export default AddReview;
