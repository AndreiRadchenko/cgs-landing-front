import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

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

import { getTextFromHtml } from "../../utils/getTextFromHtml";
import { AddFileIcon } from "./SvgEstimationForm/AddFileIcon";
import { CrossIcon } from "./SvgEstimationForm/CrossIcon";
import {
  createField,
  updateField,
} from "../../utils/estimationFromUpdateAndCreateField";

const TextField = ({
  title,
  options,
  index,
  questionKey,
  currentPage,
  attachFile,
  setAttachFiles,
  attachFilesArr,
  ...props
}: EstimationField) => {
  const [filesPerQuestion, setFilesPerQuestion] = useState<File[]>(
    attachFilesArr?.map((item) => item.file) || []
  );
  const [tooManyFiles, setTooManyFiles] = useState(false);

  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  let placeholder = "Text";
  if (options.length > 0) placeholder = getTextFromHtml(options[0]["text"]);

  useEffect(() => {
    setAttachFiles!(
      filesPerQuestion?.map((file, index) => ({
        index: `file${index}`,
        file: file,
      }))
    );
  }, [filesPerQuestion]);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length > 3) {
      setTooManyFiles(true);
      return;
    }
    setTooManyFiles(false);
    setFilesPerQuestion(Array.from(e.target.files!));
  };

  const deleteFile = (name: string) => {
    const newArrFiles = filesPerQuestion?.filter((file) => file.name !== name);
    setFilesPerQuestion(newArrFiles);
  };

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      props.setFormData((prevState) => {
        const indexOfAnswer = prevState.clientAnswers.findIndex(
          (answer) => answer.questionTitle === getTextFromHtml(title)
        );
        return {
          ...prevState,
          clientName:
            getTextFromHtml(title) === "Your Name"
              ? e.target.value
              : prevState.clientName,
          clientEmail:
            getTextFromHtml(title) === "Your Email"
              ? e.target.value
              : prevState.clientEmail,
          clientAnswers:
            indexOfAnswer !== -1
              ? updateField(prevState, indexOfAnswer, e)
              : createField(
                  prevState,
                  indexOfAnswer,
                  e,
                  title,
                  questionKey,
                  currentPage
                ),
        };
      });

      formik.setFieldValue(`questionsArr[${index}].value`, e.target.value);
    },
    [meta.value]
  );

  return (
    <div style={{ position: "relative" }}>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
      <EstimateFileContainerWithInput>
        <EstimationTextInput
          error={!!meta.error && meta!.touched}
          onChange={handleOnChange}
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
      {tooManyFiles && (
        <p style={{ color: "#5869dd", fontSize: "16px" }}>
          You are able to add only 3 files
        </p>
      )}
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
                  {file.name.slice(
                    ((file.name.lastIndexOf(".") - 1) >>> 0) + 2
                  )}
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
