import { FormikHelpers, useFormikContext } from "formik";
import { useState } from "react";
import { QueryClient } from "react-query";
import { queryKeys } from "../consts/queryKeys";
import {
  IPortfolioResponse,
  IPortfolioReview,
} from "../types/Admin/AdminPortfolio";
import useDeleteImageFunction from "./deleteImageFunction";

const useSubmitAndDeletePortfolio = (
  setCurrent: (value: number) => void,
) => {
  const { values, handleSubmit } = useFormikContext<IPortfolioResponse>();
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
      props.resetForm();
      props.setFieldValue("image", null);
      await queryClient.invalidateQueries(queryKeys.getPortfolio);
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
      props.resetForm();
      props.setFieldValue("image", null);
      await queryClient.invalidateQueries(queryKeys.getPortfolio);
    }
  };

  return { deleteFunc, submitFunc, setIsReady, editFunc, isNewStatus, setIsNewStatus };
};

export default useSubmitAndDeletePortfolio;
