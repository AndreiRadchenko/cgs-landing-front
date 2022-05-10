import { feedbackInit } from "./../consts/index";
import { IFeedback } from "../types/Admin/Response.types";
import { useFormikContext } from "formik";

const usePushFeedback = () => {
  const { submitForm, setValues } = useFormikContext<IFeedback>();

  const submitFunc = (e: React.SyntheticEvent, submit: () => void) => {
    e.preventDefault();
    submitForm()
      .then(() => submit())
      .then(() => setValues(JSON.parse(JSON.stringify(feedbackInit))));
  };

  return { submitFunc };
};

export default usePushFeedback;
