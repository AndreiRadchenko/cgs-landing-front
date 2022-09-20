import { Formik, useFormikContext } from "formik";
import React from "react";
import { newPageReviewInit } from "../../../consts";
import AddReview from "../PortfolioReview/AddReview";
import {
  IAddAndEditProps,
  IPortfolioPageData,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio.types";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";

const AddAndEdit = ({
  current,
  isNewStatus,
  reviews,
  setIsNewStatus,
}: IAddAndEditProps) => {
  const { values } = useFormikContext<IPortfolioPageData>();
  const queryClient = useQueryClient();

  const { mutateAsync: editReview } = useMutation(
    queryKeys.updatePortfolioReview,
    (review: IPortfolioReview) => adminPortfolioService.updateReview(review),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
        setIsNewStatus(true);
      },
    }
  );

  const { mutateAsync: addReview } = useMutation(
    queryKeys.addPortfolioReview,
    (review: IPortfolioReview) => adminPortfolioService.addReview(review),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
      },
    }
  );

  return (
    <Formik
      key={`Form${isNewStatus}${current ? current : "null"}`}
      initialValues={
        isNewStatus
          ? JSON.parse(JSON.stringify(newPageReviewInit))
          : typeof reviews !== "undefined" && reviews[current]
      }
      onSubmit={(values, actions) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { __v, ...data } = values;
        isNewStatus ? addReview(data) : editReview(data);
        actions.resetForm();
      }}
      validateOnChange={false}
    >
      <AddReview categories={values.categories} newFlag={isNewStatus} />
    </Formik>
  );
};

export default AddAndEdit;
