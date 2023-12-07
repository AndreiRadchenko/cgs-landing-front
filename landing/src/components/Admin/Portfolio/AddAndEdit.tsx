import React from "react";
import { Formik, FormikHelpers, useFormikContext } from "formik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddReview from "../PortfolioReview/AddReview";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { AdminPortfolioValidation } from "../../../validations/AdminPortfolioValidator";

import { newPageReviewInit } from "../../../consts";
import {
  IAddAndEditProps,
  IPortfolioPageData,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../../consts/queryKeys";

const AddAndEdit = ({
  current,
  isNewStatus,
  reviews,
  setIsNewStatus,
  technologies,
}: IAddAndEditProps) => {
  const { values } = useFormikContext<IPortfolioPageData>();
  const queryClient = useQueryClient();

  const { mutateAsync: editReview } = useMutation(
    [queryKeys.updatePortfolioReview],
    async (review: IPortfolioReview) => {
      return await toast.promise(adminPortfolioService.updateReview(review), {
        pending: "Pending update",
        success: "Data updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
        setIsNewStatus(true);
      },
    }
  );

  const { mutateAsync: addReview } = useMutation(
    [queryKeys.addPortfolioReview],
    async (review: IPortfolioReview) => {
      return await toast.promise(adminPortfolioService.addReview(review), {
        pending: "Pending update",
        success: "Data updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
      },
    }
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

  const validateForm = async (values: IPortfolioReview) => {
    try {
      await AdminPortfolioValidation().validate(values, {
        abortEarly: false,
      });
      return {};
    } catch (validationError) {
      toast.error(`Please fill all form fields`);
      return validationError;
    }
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
      validate={validateForm}
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
