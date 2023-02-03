import React from "react";

import { useField, useFormikContext } from "formik";
import {
  EstimationFieldLabel,
  EstimationTextInput,
} from "../../styles/EstimationForm.styled";
import { EstimationField } from "../../types/EstimationForm.types";

import { parseHtml } from "../../utils/parseHtml";

const TextField = ({
  title,
  options,
  index,
  currentPage,
  ...props
}: EstimationField) => {
  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  let placeholder = "Text";
  if (options.length > 0) placeholder = parseHtml(options[0]["text"]);

  return (
    <>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
      <EstimationTextInput
        error={!!meta.error && meta!.touched}
        {...props}
        onChange={(e) => {
          if (parseHtml(title) === "Your Name") {
            props.setFormData((prevState) => ({
              ...prevState,
              clientName: e.target.value,
            }));
          } else if (parseHtml(title) === "Your Email") {
            props.setFormData((prevState) => ({
              ...prevState,
              clientEmail: e.target.value,
            }));
          } else {
            props.setFormData((prevState) => ({
              ...prevState,
              clientAnswers: [
                ...prevState.clientAnswers,
                {
                  questionTitle: parseHtml(title),
                  questionIndex: index as number,
                  pageIndex: currentPage as number,
                  selectedOptions: [{ text: e.target.value }],
                },
              ],
            }));
          }
          formik.setFieldValue(`questionsArr[${index}].value`, e.target.value);
        }}
        type="text"
        placeholder={`< ${placeholder} >`}
      />
    </>
  );
};

export default TextField;
