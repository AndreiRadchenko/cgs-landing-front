import React from "react";
import { Formik, FormikHelpers, useFormikContext } from "formik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import AddReview from "../PortfolioReview/AddReview";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { AdminPortfolioValidation } from "../../../validations/AdminPortfolioValidator";
import { queryKeys } from "../../../consts/queryKeys";

import { newPageReviewInit } from "../../../consts";
import {
  IAddAndEditProps,
  IPortfolioPageData,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio.types";
import { technologiesService } from "../../../services/technologies";

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

  const { data: technologies } = useQuery([queryKeys.getTechnologies], () =>
        technologiesService.getTechnologies()
    );

  const handleSubmit = (values: any, action: FormikHelpers<any>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __v, image, bgColor, feedback, ...data } = values;
    const clearedFeedback = {
      position: values.feedback.position,
      name: values.feedback.name,
      feedbackText: values.feedback.feedbackText,
    };
    isNewStatus
      ? addReview({ ...data, feedback: clearedFeedback })
      : editReview({ ...data, feedback: clearedFeedback });
    action.resetForm();
    action.setFieldValue("categories", []);
    action.setFieldValue("imageBanner.image", null);
    action.setFieldValue("imageProjectBanner.image", null);
    setIsNewStatus(true);
  };

  return (
    <Formik
      key={`Form${isNewStatus}${
        typeof current === "number" ? current : "null"
      }`}
      validateOnChange={false}
      validateOnBlur={false}
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
      onSubmit={handleSubmit}
      validationSchema={AdminPortfolioValidation}
    >
      <AddReview
        categories={values.categories.map((elem) => elem.name)}
        industries={values.industries}
        technologies={technologies?.technologies}
      />
    </Formik>
  );
};

export default AddAndEdit;
