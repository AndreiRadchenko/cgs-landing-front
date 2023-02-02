import React from "react";

import { useField, useFormikContext } from "formik";
import {
  EstimationFieldLabel,
  EstimationTextInput,
} from "../../styles/EstimationForm.styled";
import { EstimationField } from "../../types/EstimationForm.types";

const TextField = ({ title, options, index, ...props }: EstimationField) => {
  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  let placeholder = "Text";
  if (options.length > 0)
    placeholder = options[0]["text"]
      .replace(/<[^>]+>/g, "")
      .replaceAll(/&lt;|&gt;/g, "");

  return (
    <>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
      <EstimationTextInput
        error={!!meta.error && meta!.touched}
        {...props}
        onChange={(e) =>
          formik.setFieldValue(`questionsArr[${index}].value`, e.target.value)
        }
        type="text"
        placeholder={`< ${placeholder} >`}
      />
    </>
  );
};

export default TextField;
