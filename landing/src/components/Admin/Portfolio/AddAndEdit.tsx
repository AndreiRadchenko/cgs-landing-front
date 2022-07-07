import { Formik, useFormikContext } from "formik";
import React from "react";
import { newReviewInit } from "../../../consts";
import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio";
import AddReview from "../PortfolioReview/AddReview";
import { IAddAndEditProps } from "./Portfolio.types";

const AddAndEdit = ({
  submitFunc,
  setIsReady,
  editFunc,
  current,
  isNewStatus,
}: IAddAndEditProps) => {
  const { values } = useFormikContext<IPortfolioResponse>();

  return (
    <Formik
      key={`Form${isNewStatus}${current ? current : "null"}`}
      initialValues={
        isNewStatus
          ? JSON.parse(JSON.stringify(newReviewInit))
          : values.reviews[current]
      }
      enableReinitialize={true}
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
