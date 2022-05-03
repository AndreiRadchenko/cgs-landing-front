import { Formik, FormikHelpers, useFormikContext } from "formik";
import React from "react";
import { newReviewInit } from "../../../consts";
import {
  IPortfolioResponse,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio";
import AddReview from "../PortfolioReview/AddReview";

interface IAddAndEditProps {
  submitFunc: (
    data: IPortfolioReview,
    props: FormikHelpers<IPortfolioReview>
  ) => void;
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
  editFunc: (
    values: IPortfolioReview,
    props: FormikHelpers<IPortfolioReview>,
    id: number
  ) => void;
  current: number;
  isNewStatus: boolean;
}

const AddAndEdit = ({
  submitFunc,
  setIsReady,
  editFunc,
  current,
  isNewStatus,
}: IAddAndEditProps) => {
  const { values } = useFormikContext<IPortfolioResponse>();

  return isNewStatus ? (
    <Formik
      initialValues={newReviewInit}
      key="NewFormAdd111"
      onSubmit={submitFunc}
      validateOnChange={false}
    >
      <AddReview
        categories={values.categories}
        setIsReady={setIsReady}
        newFlag={isNewStatus}
      />
    </Formik>
  ) : (
    <Formik
      key="EditForm"
      onSubmit={(values, props) => editFunc(values, props, current)}
      initialValues={values.reviews[current]}
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
