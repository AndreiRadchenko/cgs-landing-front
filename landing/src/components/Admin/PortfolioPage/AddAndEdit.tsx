import { Formik, useFormikContext } from "formik";
import React from "react";
import { newPageReviewInit } from "../../../consts";
import AddReview from "../PortfolioReviewPage/AddReview";
import { IAddAndEditProps } from "../../../types/Admin/AdminPortfolioPage.types";
import { IPortfolioData } from "../../../types/Admin/AdminPortfolioPage.types";
const AddAndEdit = ({
  defaultCategory,
  submitFunc,
  setIsReady,
  editFunc,
  current,
  isNewStatus,
}: IAddAndEditProps) => {
  const { values } = useFormikContext<IPortfolioData>();

  return (
    <Formik
      key={`Form${isNewStatus}${current ? current : "null"}`}
      initialValues={
        isNewStatus
          ? JSON.parse(JSON.stringify(newPageReviewInit))
          : values.reviews[current]
      }
      onSubmit={
        isNewStatus
          ? submitFunc
          : (values, props) => editFunc(values, props, current)
      }
      validateOnChange={false}
    >
      <AddReview
        defaultCategory={defaultCategory}
        categories={values.categories}
        setIsReady={setIsReady}
        newFlag={isNewStatus}
      />
    </Formik>
  );
};

export default AddAndEdit;
