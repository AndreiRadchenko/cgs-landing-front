import AdminDropDown from "../Global/AdminDropDown";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { IImage } from "../../../types/Admin/Admin.types";
import AdminStars from "../FeedbackBlock/AdminStars";

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

  const deleteFunc = async () => (await deleteFunction)();
  const uploadFunc = (image: IImage) => uploadFunction(image);

  return (
    <>
      <Styled.AdminPageFirstBlockLayout>
        <Styled.AdminPortfolioImage>
          <PhotoBlockDashedHorizontal
            emptyHeader="Drop banner here"
            photo={values.image}
            deleteFunction={deleteFunc}
            uploadFunction={uploadFunc}
          />
        </Styled.AdminPortfolioImage>
        <AdminDropDown
          menu={categories}
          value={catValue}
          setValue={setCatValue}
        />
      </Styled.AdminPageFirstBlockLayout>
      <Styled.AdminPageSecondBlockLayout>
        <div>
          <SubHeaderWithInput
            placeholder="Link"
            header="Project link"
            inputValue={values.button}
            onChangeFunction={handleChange}
            name="button"
          />
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
          <Styled.AdminBigButton onClick={submitFunction} type="button">
            {newFlag ? "Add review" : "Edit review"}
          </Styled.AdminBigButton>
        </div>
        <div>
          <Styled.InputAndStars>
            <SubHeaderWithInput
              placeholder="Name"
              header="Add review"
              inputValue={values.button}
              onChangeFunction={handleChange}
              name="button"
            />
            <Styled.StartsContainer>
              <Styled.AdminFeedbackStars>
                <AdminStars
                  size={27}
                  value={5}
                  handleChange={handleChange}
                  edit={true}
                />
              </Styled.AdminFeedbackStars>
            </Styled.StartsContainer>
          </Styled.InputAndStars>
          <Styled.AdminInput
            placeholder="Company"
            value={values.title}
            onChange={handleChange}
            name="title"
          />
          <Styled.AdminInput
            minRows={4}
            placeholder="Text review"
            value={values.text}
            onChange={handleChange}
            name="text"
          />
        </div>
      </Styled.AdminPageSecondBlockLayout>
    </>
  );
};

export default AddReview;