import { useState } from "react";
import { useFormikContext } from "formik";
import { IFeedback, IDataResponse } from "./../types/Admin/Response.types";

const useFeedbackLogic = () => {
  const { values, handleSubmit } = useFormikContext<IDataResponse>();
  const [feedback, setFeedback] = useState(0);

  const submitFunction = (feedback: IFeedback) => {
    values.FeedbackBlock.feedBacks.push(feedback);
  };

  const deleteFunction = (id: number) => {
    values.FeedbackBlock.feedBacks.splice(id, 1);
    setFeedback(id > 0 ? id - 1 : 0);
    handleSubmit();
  };

  const editFunction = (value: IFeedback) => {
    values.FeedbackBlock.feedBacks[feedback] = value;
  };

  return {
    submitFunction,
    setFeedback,
    feedback,
    deleteFunction,
    editFunction,
  };
};

export default useFeedbackLogic;
