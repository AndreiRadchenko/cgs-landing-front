import React from "react";

import { useField } from "formik";
import {
  EstimationFieldLabel,
  EstimationTextInput,
} from "../../styles/EstimationForm.styled";
import { EstimationField } from "../../types/EstimationForm.types";

const TextField = ({ title, options, ...props }: EstimationField) => {
  const [field, meta, helpers] = useField(props);

  let placeholder = "Text";
  if (options.length > 0)
    placeholder = options[0]["text"]
      .replace(/<[^>]+>/g, "")
      .replaceAll(/&lt;|&gt;/g, "");

  return (
    <>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
      <EstimationTextInput
        {...field}
        {...props}
        type="text"
        placeholder={`< ${placeholder} >`}
      />
    </>
  );
};

export default TextField;
