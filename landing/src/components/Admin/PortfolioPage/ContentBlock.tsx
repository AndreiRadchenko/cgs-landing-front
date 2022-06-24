import { FieldArray, useFormikContext } from "formik";
import React, { useState } from "react";
import useSubmitAndDeletePortfolio from "../../../hooks/useSubmitAndDeletePortfolio";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio";
import AdminCarousel from "../Global/AdminImageCarousel";
import AdminReview from "../PortfolioReviewPage/AdminPortfolioReview";
import AddAndEdit from "./AddAndEdit";
import renderPortfolioInputs from "./renderPortfolioInputs";
import AdminDropDown from "../Global/AdminDropDown";

const AdminPortfolioContentBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IPortfolioResponse>();
  const [current, setCurrent] = useState(0);
  const {
    deleteFunc,
    submitFunc,
    setIsReady,
    editFunc,
    isNewStatus,
    setIsNewStatus,
  } = useSubmitAndDeletePortfolio(setCurrent);

  const submit = () => handleSubmit();
  const deleteF = () => deleteFunc(current);
  const [catValue, setCatValue] = useState(values.categories[0]);

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
        <AdminCarousel
          page={current}
          setPage={setCurrent}
          length={values.reviews.length}
        />
      </Styled.AdminReviewBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminPortfolioContentBlock;
