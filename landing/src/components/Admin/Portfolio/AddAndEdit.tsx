import { Formik, useFormikContext } from "formik";
import React from "react";
import { newPageReviewInit } from "../../../consts";
import AddReview from "../PortfolioReview/AddReview";
import {
  IAddAndEditProps,
  IPortfolioPageData,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { AdminPortfolioValidation } from "../../../validations/AdminPortfolioValidator";

const AddAndEdit = ({
  current,
  isNewStatus,
  reviews,
  setIsNewStatus,
}: IAddAndEditProps) => {
  const { values } = useFormikContext<IPortfolioPageData>();
  const queryClient = useQueryClient();

  const { mutateAsync: editReview } = useMutation(
    [queryKeys.updatePortfolioReview],
    (review: IPortfolioReview) => adminPortfolioService.updateReview(review),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
        setIsNewStatus(true);
      },
    }
  );

  const { mutateAsync: addReview } = useMutation(
    [queryKeys.addPortfolioReview],
    (review: IPortfolioReview) => adminPortfolioService.addReview(review),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
      },
    }
  );

  return (
    <Formik
      enableReinitialize
      key={`Form${isNewStatus}${
        typeof current === "number" ? current : "null"
      }`}
      initialValues={
        isNewStatus
          ? JSON.parse(JSON.stringify(newPageReviewInit))
          : typeof reviews !== "undefined" &&
            (reviews[current].imageBanner
              ? reviews[current]
              : {
                  ...reviews[current],
                  imageBanner: {
                    image: null,
                  },
                  imageProjectBanner: {
                    image: null,
                  },
                })
      }
      onSubmit={(values, action) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { __v, image, bgColor, feedback, ...data } = values;
        const clearedFeedback = {
          position: values.feedback.position,
          name: values.feedback.name,
          feedbackText: values.feedback.feedbackText,
        };
        isNewStatus
          ? addReview(data)
          : editReview({ ...data, feedback: clearedFeedback });
        action.resetForm();
        action.setFieldValue("categories", "");
        setIsNewStatus(true);
      }}
    >
      <AddReview
        categories={values.categories}
        industries={values.industries}
        technologies={values.technologies}
        newFlag={isNewStatus}
      />
    </Formik>
  );
};

export default AddAndEdit;
