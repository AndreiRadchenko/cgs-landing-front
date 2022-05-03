import { FieldArray, Formik, useFormikContext } from "formik";
import React, { useState } from "react";
import { newReviewInit } from "../../../consts";
import useSubmitAndDeletePortfolio from "../../../hooks/submitAndDeletePortfolio";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio";
import AdminCarousel from "../Global/AdminImageCarousel";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AddReview from "../PortfolioReview/AddReview";
import AdminReview from "../PortfolioReview/AdminPortfolioReview";
import renderPortfolioInputs from "./renderPortfolioInputs";

const AdminPortfolioContentBlock = () => {
  const { values, handleChange } = useFormikContext<IPortfolioResponse>();
  const [current, setCurrent] = useState(0);
  const { deleteFunc, submitFunc, setIsReady } = useSubmitAndDeletePortfolio(setCurrent);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Portfolio</Styled.AdminHeader>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={values.subtitle}
            name="subtitle"
            onChangeFunction={handleChange}
          />
        </div>
      </Styled.AdminHalfGrid>
      <Styled.AdminSubTitle>Category</Styled.AdminSubTitle>

      <Styled.AdminCategoryBlock>
        <FieldArray name="categories">
          {() =>
            renderPortfolioInputs({ state: values.categories, handleChange })
          }
        </FieldArray>
      </Styled.AdminCategoryBlock>

      <Styled.AdminHalfGrid>
        <Formik onSubmit={submitFunc} initialValues={newReviewInit}>
          <AddReview state={values} setIsReady={setIsReady} />
        </Formik>

        <Styled.AdminReviewBlock>
          {values.reviews.length === 0 ? (
            <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>
          ) : (
            <AdminReview
              review={values.reviews[current]}
              deleteFunc={() => deleteFunc(current)}
            />
          )}
          <AdminCarousel
            page={current}
            setPage={setCurrent}
            length={values.reviews.length}
          />
        </Styled.AdminReviewBlock>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminPortfolioContentBlock;
