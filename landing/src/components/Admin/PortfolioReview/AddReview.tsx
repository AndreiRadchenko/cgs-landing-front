import AdminDropDown from "../Global/AdminDropDown";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio.types";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { IImage } from "../../../types/Admin/Admin.types";
import AdminStars from "../FeedbackBlock/AdminStars";

interface IAddReviewProps {
  categories: string[];
  newFlag: boolean;
}

const AddReview = ({ categories, newFlag }: IAddReviewProps) => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IPortfolioReview>();

  const [catValue, setCatValue] = useState(
    newFlag ? categories[0] : values.category
  );

  const deleteFunction = useDeleteImageFunction(values, "", false);
  const uploadFunction = useUploadImageFunction(values, "", false);
  const starsChange = (newValue: number) => (values.feedback.rating = newValue);

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    values.category = catValue;
    handleSubmit();
    setCatValue(categories[0]);
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
        <div>
          <AdminDropDown
            menu={categories}
            value={catValue}
            setValue={setCatValue}
          />
          <SubHeaderWithInput
            placeholder="#123456"
            header="Background Color"
            inputValue={values.bgColor}
            onChangeFunction={handleChange}
            name="bgColor"
          />
        </div>
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
            placeholder="Industry"
            value={values.industry}
            onChange={handleChange}
            name="industry"
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
              inputValue={values.feedback.name}
              onChangeFunction={handleChange}
              name="feedback.name"
            />
            <Styled.StartsContainer>
              <Styled.AdminFeedbackStars>
                <AdminStars
                  size={30}
                  value={Number(values.feedback.rating)}
                  handleChange={starsChange}
                  edit={true}
                />
              </Styled.AdminFeedbackStars>
            </Styled.StartsContainer>
          </Styled.InputAndStars>
          <Styled.AdminInput
            placeholder="Company"
            value={values.feedback.company}
            onChange={handleChange}
            name="feedback.company"
          />
          <Styled.AdminInput
            minRows={4}
            placeholder="Text review"
            value={values.feedback.feedbackText}
            onChange={handleChange}
            name="feedback.feedbackText"
          />
        </div>
      </Styled.AdminPageSecondBlockLayout>
    </>
  );
};

export default AddReview;
