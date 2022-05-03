import { FormikHelpers, useFormikContext } from "formik";
import { useState } from "react";
import { QueryClient } from "react-query";
import { queryKeys } from "../consts/queryKeys";
import {
  IPortfolioResponse,
  IPortfolioReview,
} from "../types/Admin/AdminPortfolio";
import useDeleteImageFunction from "./deleteImageFunction";

const useSubmitAndDeletePortfolio = (setCurrent: (value: number) => void) => {
  const { values, handleSubmit } = useFormikContext<IPortfolioResponse>();
  const queryClient = new QueryClient();
  const [isReady, setIsReady] = useState(false);
  const deleteFunction = useDeleteImageFunction();

  const submitFunc = (
    data: IPortfolioReview,
    props: FormikHelpers<IPortfolioReview>
  ) => {
    if (isReady) {
      values.reviews.push(data);
      handleSubmit();
      props.resetForm();
      queryClient.invalidateQueries(queryKeys.getPortfolio);
      setIsReady(false);
      props.setFieldValue("image", null);
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

  return {deleteFunc, submitFunc, setIsReady}
};

export default useSubmitAndDeletePortfolio;
