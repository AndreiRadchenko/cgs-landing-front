import React, { ChangeEvent, useEffect, useState } from "react";

import { useField, useFormikContext } from "formik";
import {
  EstimateFileAttachInput,
  EstimateFileAttachInputLabel,
  EstimateFileContainerWithInput,
  EstimateFileCross,
  EstimateFileName,
  EstimateFileType,
  EstimationFieldLabel,
  EstimationTextInput,
} from "../../styles/EstimationForm.styled";
import { EstimationField } from "../../types/EstimationForm.types";

import { parseHtml } from "../../utils/parseHtml";

const TextField = ({
  title,
  options,
  index,
  questionKey,
  currentPage,
  attachFile,
  setAttachFiles,
  ...props
}: EstimationField) => {
  const [filesPerQuestion, setFilesPerQuestion] = useState<File[]>();

  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  let placeholder = "Text";
  if (options.length > 0) placeholder = parseHtml(options[0]["text"]);

  /*useEffect(() => {
    setAttachFiles(
      filesPerQuestion?.map((file, index) => ({
        index: `file${index}`,
        file: file,
      }))
    );
  }, [filesPerQuestion]);*/

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length > 3) {
      alert("too many");
    }
    setFilesPerQuestion(Array.from(e.target.files!));
  };

  const deleteFile = (name: string) => {
    const newArrFiles = filesPerQuestion?.filter((file) => file.name !== name);
    setFilesPerQuestion(newArrFiles);
  };

  return (
    <div style={{ position: "relative" }}>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
      <EstimateFileContainerWithInput>
        <EstimationTextInput
          error={!!meta.error && meta!.touched}
          onChange={(e) => {
            // if (parseHtml(title) === "Your Name") {
            //   props.setFormData((prevState) => ({
            //     ...prevState,
            //     clientName: e.target.value,
            //   }));
            // } else if (parseHtml(title) === "Your Email") {
            //   props.setFormData((prevState) => ({
            //     ...prevState,
            //     clientEmail: e.target.value,
            //   }));
            // } else {
            //
            // }

            props.setFormData((prevState) => ({
              ...prevState,
              clientName:
                parseHtml(title) === "Your Name"
                  ? e.target.value
                  : prevState.clientName,
              clientEmail:
                parseHtml(title) === "Your Email"
                  ? e.target.value
                  : prevState.clientEmail,
              clientAnswers: [
                ...prevState.clientAnswers,
                {
                  questionTitle: parseHtml(title),
                  questionKey: questionKey,
                  pageIndex: currentPage as number,
                  selectedOptions: [{ text: e.target.value }],
                },
              ],
            }));

            formik.setFieldValue(
              `questionsArr[${index}].value`,
              e.target.value
            );
          }}
          // value={meta.value.value}
          defaultValue={meta.value.value}
          type="text"
          placeholder={
            attachFile ? "< Put your link//file here > " : `< ${placeholder} >`
          }
          {...props}
        />
        {attachFile && (
          <div>
            <EstimateFileAttachInput
              multiple
              type="file"
              name="file-input"
              id="file-input"
              accept=".docx, .doc, .pdf, .txt"
              onChange={handleFiles}
            />
            <EstimateFileAttachInputLabel htmlFor="file-input">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.259 5.25398C14.2546 5.25914 14.2501 5.26417 14.2454 5.26908L6.02554 13.8785C5.32236 14.615 4.48838 15 3.60254 15C3.53525 15 3.46769 14.9978 3.39984 14.9933C2.55359 14.9377 1.73258 14.5354 1.08809 13.8604C0.443599 13.1853 0.0594639 12.3254 0.00637882 11.4391C-0.0539132 10.4324 0.314138 9.4814 1.07072 8.68893L9.26364 0.10783C9.40095 -0.0359588 9.62354 -0.0359281 9.76083 0.10783C9.89811 0.25165 9.89811 0.484793 9.76083 0.628582L1.56791 9.20968C0.219305 10.6222 0.631565 12.3407 1.58528 13.3396C2.53903 14.3385 4.17974 14.7703 5.52835 13.3578L13.741 4.7559C14.643 3.69062 14.3379 2.47087 13.6336 1.73324C12.9293 0.995573 11.7647 0.675929 10.7477 1.62075L5.50037 7.11667C4.8073 7.84258 5.00593 8.7005 5.51021 9.22868C6.01452 9.75688 6.83362 9.96487 7.52668 9.23896L12.0679 4.48256C12.2052 4.33874 12.4277 4.33874 12.5651 4.48256C12.7023 4.62638 12.7023 4.8595 12.5651 5.00332L8.02387 9.75971C7.03878 10.7915 5.7636 10.5355 5.01305 9.74943C4.26251 8.96335 4.01814 7.6277 5.00318 6.59595L10.2577 1.09244C10.2624 1.08757 10.2672 1.08281 10.2721 1.07821C10.88 0.509556 11.5949 0.244654 12.3395 0.312406C12.9975 0.37218 13.6337 0.691824 14.1307 1.21248C14.6278 1.73311 14.933 2.3994 14.9901 3.08858C15.0548 3.86856 14.8019 4.61736 14.259 5.25398Z"
                  fill="white"
                />
              </svg>
              <span>add file</span>
            </EstimateFileAttachInputLabel>
          </div>
        )}
      </EstimateFileContainerWithInput>
      {attachFile && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {filesPerQuestion?.map((file) => (
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
                key={file.size}
              >
                <EstimateFileType>
                  {file.type.replace("application/", "")}
                </EstimateFileType>
                <EstimateFileName>{file.name}</EstimateFileName>
                <EstimateFileCross onClick={() => deleteFile(file.name)}>
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="-0.937686"
                      x2="12.0208"
                      y2="-0.937686"
                      transform="matrix(-0.707472 0.706741 0.706741 0.707472 14.4883 4.99121)"
                      stroke="#8F8E93"
                      strokeWidth="1.87537"
                    />
                    <line
                      y1="-0.937686"
                      x2="12.0208"
                      y2="-0.937686"
                      transform="matrix(-0.707107 -0.707107 -0.706953 0.707261 13.2949 13.2021)"
                      stroke="#8F8E93"
                      strokeWidth="1.87537"
                    />
                  </svg>
                </EstimateFileCross>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextField;
