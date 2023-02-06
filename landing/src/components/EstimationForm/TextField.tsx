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
import { AddFileIcon } from "./SvgEstimationForm/AddFileIcon";
import { CrossIcon } from "./SvgEstimationForm/CrossIcon";

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
          value={meta.value.value}
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
              <AddFileIcon />
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
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "5px",
                }}
                key={file.size}
              >
                <EstimateFileType>
                  {file.type.replace("application/", "")}
                </EstimateFileType>
                <EstimateFileName>{file.name}</EstimateFileName>
                <EstimateFileCross onClick={() => deleteFile(file.name)}>
                  <CrossIcon />
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
