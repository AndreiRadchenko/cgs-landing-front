import React, { ChangeEvent, useEffect, useRef, useState } from "react";
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
import Loader from "../Portfolio/Loader";

const CheckboxField = ({
  title,
  options,
  split,
  index,
  questionKey,
  currentPage,
  ...props
}: EstimationField) => {
  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  const isMounted = useRef(false);

  const [dataArray, setDataArray] = useState<string[]>([]);

  // console.log(dataArray);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setDataArray([...dataArray, e.target.value]);
    } else if (!e.target.checked) {
      const freshArray = dataArray.filter((val) => val !== e.target.value);
      setDataArray([...freshArray]);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      formik.setFieldValue(`questionsArr[${index}].value`, dataArray);
      props.setFormData((prevState) => {
        return {
          ...prevState,
          clientAnswers: [
            ...prevState.clientAnswers,
            {
              questionTitle: parseHtml(title),
              questionKey,
              pageIndex: currentPage as number,
              selectedOptions: dataArray.map((option) => ({ text: option })),
            },
          ],
        };
      });
    } else {
      isMounted.current = true;
    }
  }, [dataArray]);

  return (
    <>
      <EstimationFieldLabel
        error={!!meta.error && meta!.touched}
        split={split!}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <EstimateOptionContainer split={split!}>
        {options.map((option) => {
          // console.log(
          //   meta.value?.value,
          //   parseHtml(option.text),
          //   (meta.value?.value as string[])?.includes(parseHtml(option.text))
          // );

          return (
            <EstimationInputFlex key={option.optionKey}>
              <EstimationInputCheckbox
                type="checkbox"
                id={`${option.optionKey}${questionKey}`}
                onChange={(e) => handleChange(e)}
                defaultChecked={
                  meta.value?.value &&
                  (meta.value?.value as string[])?.includes(
                    parseHtml(option.text)
                  )
                }
                value={parseHtml(option.text)}
                {...props}
              />
              <EstimationFieldOption
                htmlFor={`${option.optionKey}${questionKey}`}
                error={!!meta.error && meta!.touched}
                dangerouslySetInnerHTML={{ __html: option.text }}
              />
            </EstimationInputFlex>
          );
        })}
      </EstimateOptionContainer>
    </>
  );
};

export default CheckboxField;
