import { FieldArray, useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminReview from "../PortfolioReviewPage/AdminPortfolioReview";
import AddAndEdit from "./AddAndEdit";
import renderPortfolioInputs from "./renderPortfolioInputs";
import AdminDropDown from "../Global/AdminDropDown";
import { IPortfolioData } from "../../../types/Admin/AdminPortfolioPage.types";
import useSubmitAndDeletePortfolioPage from "../../../hooks/useSubmitAndDeletePortfolioPage";
import PortfolioPageCarousel from "./PortfolioPageCarousel";

const AdminPortfolioContentBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IPortfolioData>();
  const [current, setCurrent] = useState(0);
  const {
    deleteFunc,
    submitFunc,
    setIsReady,
    editFunc,
    isNewStatus,
    setIsNewStatus,
  } = useSubmitAndDeletePortfolioPage(setCurrent);

  const deleteF = () => deleteFunc(current);
  const [catValue, setCatValue] = useState(values.categories[0]);

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Portfolio</Styled.AdminHeader>
      <Styled.AdminSubTitle>Category</Styled.AdminSubTitle>
      <Styled.AdminCategoryBlock>
        <FieldArray name="categories">
          {() =>
            renderPortfolioInputs({ state: values.categories, handleChange })
          }
        </FieldArray>
      </Styled.AdminCategoryBlock>
      <Styled.AdminBigButton onClick={submitFunction} type="button">
        Save categories
      </Styled.AdminBigButton>
      <Styled.AdminSubTitle>Add a new case</Styled.AdminSubTitle>
      <AddAndEdit
        current={current}
        isNewStatus={isNewStatus}
        setIsReady={setIsReady}
        editFunc={editFunc}
        submitFunc={submitFunc}
      />
      <Styled.AdminCategoryBlock>
        <AdminDropDown
          menu={values.categories}
          value={catValue}
          setValue={setCatValue}
        />
      </Styled.AdminCategoryBlock>
      <Styled.AdminReviewBlock>
        {values.reviews.length === 0 ? (
          <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>
        ) : (
          <AdminReview
            editFlag={isNewStatus}
            review={values.reviews[current]}
            deleteFunc={deleteF}
            editTrigger={setIsNewStatus}
          />
        )}
        <PortfolioPageCarousel
          catValue={catValue}
          page={current}
          setPage={setCurrent}
          length={values.reviews.length}
        />
      </Styled.AdminReviewBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminPortfolioContentBlock;
