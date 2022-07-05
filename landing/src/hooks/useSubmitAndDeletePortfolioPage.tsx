import { FormikHelpers, useFormikContext } from "formik";
import { useState } from "react";
import { QueryClient } from "react-query";
import { newPageReviewInit } from "../consts";
import { queryKeys } from "../consts/queryKeys";
import useDeleteImageFunction from "./useDeleteImageFunction";
import {
  IPortfolioData,
  IPortfolioReview,
} from "../types/Admin/AdminPortfolioPage.types";

const useSubmitAndDeletePortfolioPage = (
  setCurrent: (value: number) => void
) => {
  const { values, handleSubmit } = useFormikContext<IPortfolioData>();
  const [isNewStatus, setIsNewStatus] = useState(true);
  const queryClient = new QueryClient();
  const [isReady, setIsReady] = useState(false);
  const deleteFunction = useDeleteImageFunction();

  const submitFunc = async (
    data: IPortfolioReview,
    props: FormikHelpers<IPortfolioReview>
  ) => {
    if (isReady) {
      values.reviews.push(data);
      handleSubmit();
      setIsReady(false);
      props.setValues(JSON.parse(JSON.stringify(newPageReviewInit)));
      await queryClient.invalidateQueries(queryKeys.getPortfolioPage);
    }
  };

  const deleteFunc = async (id: number) => {
    if (values.reviews[id].image) {
      (await deleteFunction)(values.reviews[id]);
    }
    values.reviews.splice(id, 1);
    setCurrent(id > 0 ? id - 1 : 0);
    handleSubmit();
  };

  const editFunc = async (
    data: IPortfolioReview,
    props: FormikHelpers<IPortfolioReview>,
    id: number
  ) => {
    if (isReady) {
      values.reviews[id] = data;
      handleSubmit();
      setIsReady(false);
      setIsNewStatus!(true);
      props.setValues(JSON.parse(JSON.stringify(newPageReviewInit)));
      await queryClient.invalidateQueries(queryKeys.getPortfolioPage);
    }
  };

  return {
    deleteFunc,
    submitFunc,
    setIsReady,
    editFunc,
    isNewStatus,
    setIsNewStatus,
  };
};

export default useSubmitAndDeletePortfolioPage;
