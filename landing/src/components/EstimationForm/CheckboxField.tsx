import React, { ChangeEvent, useEffect, useState } from "react";
import {
  EstimateOptionContainer,
  EstimationFieldLabel,
  EstimationFieldOption,
  EstimationInputCheckbox,
  EstimationInputFlex,
} from "../../styles/EstimationForm.styled";
import { useField, useFormikContext } from "formik";
import { EstimationField } from "../../types/EstimationForm.types";
import { parseHtml } from "../../utils/parseHtml";

const CheckboxField = ({
  title,
  options,
  split,
  index,
  currentPage,
  ...props
}: EstimationField) => {
  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  const [dataArray, setDataArray] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setDataArray([...dataArray, e.target.value]);
    } else if (!e.target.checked) {
      const freshArray = dataArray.filter((val) => val !== e.target.value);
      setDataArray([...freshArray]);
    }
  };

  useEffect(() => {
    formik.setFieldValue(`questionsArr[${index}].value`, dataArray);
    props.setFormData((prevState) => {
      return {
        ...prevState,
        clientAnswers: [
          ...prevState.clientAnswers,
          {
            questionTitle: parseHtml(title),
            questionIndex: index as number,
            pageIndex: currentPage as number,
            selectedOptions: dataArray.map((option) => ({ text: option })),
          },
        ],
      };
    });
  }, [dataArray]);

  return (
    <>
      <EstimationFieldLabel
        error={!!meta.error && meta!.touched}
        split={split!}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <EstimateOptionContainer split={split!}>
        {options.map((option) => (
          <EstimationInputFlex key={option.optionKey}>
            <EstimationInputCheckbox
              type="checkbox"
              onChange={(e) => handleChange(e)}
              {...props}
              value={parseHtml(option.text)}
            />
            <EstimationFieldOption
              error={!!meta.error && meta!.touched}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </EstimationInputFlex>
        ))}
      </EstimateOptionContainer>
    </>
  );
};

export default CheckboxField;
