import { Formik, useFormikContext } from "formik";
import React from "react";
import { newPageReviewInit, newReviewInit } from "../../../consts";
import AddReview from "../PortfolioReviewPage/AddReview";
import { IAddAndEditProps } from "./Portfolio.types";
import { IPortfolioData } from "../../../types/Admin/AdminPortfolioPage.types";

const AddAndEdit = ({
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
        categories={values.categories}
        setIsReady={setIsReady}
        newFlag={isNewStatus}
      />
    </Formik>
  );
};

export default AddAndEdit;
