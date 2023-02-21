import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminEstimationFormService } from "../../services/adminEstimationForm";
import EstimationQuestionField from "./EstimationQuestionField";

import { StyledButton } from "./index.styled";
import { Form, Formik } from "formik";

import {
  ContainerEstimationForm,
  EstimateNavigation,
  EstimationButtonHelperText,
} from "../../styles/EstimationForm.styled";

import Pagination from "./Pagination";
import { EstimationValidation } from "../../validations/EstimationValidation";
import {
  ClientAnswer,
  IFormData,
  IFormFileData,
  ISendData,
} from "../../types/EstimationForm.types";
import Loader from "../Portfolio/Loader";

const EstimationPage = ({
  formData,
  setFormData,
  pageN,
  setPage,
  attachFiles,
  setAttachFiles,
  setOpenSuccessModal,
}: {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  pageN: number;
  setPage: Dispatch<SetStateAction<number>>;
  attachFiles: IFormFileData[];
  setAttachFiles: Dispatch<SetStateAction<IFormFileData[]>>;
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [parentId, setParentId] = useState("");

  const [touchedBtn, setTouched] = useState(false);

  const { data, isLoading } = useQuery(
    [queryKeys.getEstimationFormData, pageN],
    () => adminEstimationFormService.getPageData(pageN.toString())
  );

  const createFormData = useMutation({
    mutationFn: async (estimationData: IFormData) => {
      const { _id } = (await adminEstimationFormService.createEstimationData(
        estimationData
      )) as ISendData;

      setParentId(_id);
    },
  });

  const sendEmail = useMutation({
    mutationFn: async (id: string) => {
      const formData = new FormData();

      formData.append("parentId", id);

      for (const item of attachFiles) {
        formData.append(item.index, item.file);
      }

      await adminEstimationFormService.sendEstimationFormEmail(formData);
    },
  });

  useEffect(() => {
    if (parentId) sendEmail.mutate(parentId);
  }, [parentId]);

  const pageAnswers = formData.clientAnswers.filter(
    (clientAnswer) => clientAnswer.pageIndex === pageN
  );

  if (isLoading) {
    return <Loader />;
  }

  const createAllInitialValues = () => {
    const initialPageQuestions = data?.page.questions.map((question) => {
      const questionAnswer = pageAnswers.find(
        (answer) => answer.questionKey === question.questionKey
      );

      return {
        questionTitle: question.title,
        required: question.isRequired,
        value:
          question.optionsType === "TEXT" ||
          question.optionsType === "RADIO_BUTTON"
            ? questionAnswer?.selectedOptions[0]?.text || ""
            : questionAnswer?.selectedOptions?.map(
                (selectedOption) => selectedOption.text
              ) || [],
      };
    });
    if (pageN === data?.pageCount) {
      return [
        ...(initialPageQuestions || []),
        ...formData?.clientAnswers.map((question) => {
          return {
            questionTitle: question.questionTitle,
            required: question.required,
            value:
              question.optionsType === "TEXT" ||
              question.optionsType === "RADIO_BUTTON"
                ? question.selectedOptions[0]?.text || ""
                : question?.selectedOptions?.map(
                    (selectedOption) => selectedOption.text
                  ) || [],
          };
        }),
      ];
    } else {
      return initialPageQuestions;
    }
  };

  const initialValues = {
    questionsArr: createAllInitialValues(),
  };

  return (
    <ContainerEstimationForm>
      <Formik
        enableReinitialize
        initialValues={{
          username: formData.clientName,
          email: formData.clientEmail,
          ...initialValues,
        }}
        validationSchema={EstimationValidation}
        onSubmit={() => {
          if (pageN === data?.pageCount) {
            createFormData.mutate(formData);
            setOpenSuccessModal(true);
          } else {
            setPage((prevState: number) => prevState + 1);
            setTouched(false);
          }
        }}
      >
        {({ errors }) => {
          return (
            <Form>
              {data?.page.questions.map((question, index) => (
                <EstimationQuestionField
                  formData={formData}
                  attachFilesArr={attachFiles}
                  setAttachFiles={setAttachFiles}
                  setFormData={setFormData}
                  currentPage={pageN}
                  index={index}
                  key={question.questionKey}
                  question={question}
                  touched={touchedBtn}
                />
              ))}
              {data?.pageCount && (
                <EstimateNavigation>
                  <Pagination
                    pageCount={data?.pageCount}
                    currentPage={pageN}
                    setPage={setPage}
                    setTouched={setTouched}
                  />
                  <div style={{ position: "relative" }}>
                    {((errors.questionsArr && touchedBtn) ||
                      (errors.username && touchedBtn) ||
                      (errors.email && touchedBtn)) && (
                      <EstimationButtonHelperText>
                        {errors.questionsArr &&
                          touchedBtn &&
                          "Seems like you missed some fields. Let us know more about your project."}
                        {((errors.username && touchedBtn) ||
                          (errors.email && touchedBtn)) &&
                          !errors.questionsArr &&
                          "Seems like you enter invalid data. Please write it correctly."}
                      </EstimationButtonHelperText>
                    )}
                    <StyledButton
                      onClick={() => {
                        if (
                          Object.keys(errors).length !== 0 &&
                          pageN === data?.pageCount
                        ) {
                          const questionWithError = formData.clientAnswers.find(
                            (answer) =>
                              answer.required &&
                              answer.selectedOptions.length === 0
                          );
                          if (
                            !questionWithError ||
                            pageN !== questionWithError?.pageIndex
                          )
                            setPage(questionWithError?.pageIndex as number);
                        }
                        setTouched(true);
                      }}
                      type="submit"
                    >
                      {data?.pageCount > pageN
                        ? "< NEXT SECTION >"
                        : "< FINISH >"}
                    </StyledButton>
                  </div>
                </EstimateNavigation>
              )}
            </Form>
          );
        }}
      </Formik>
    </ContainerEstimationForm>
  );
};

export default EstimationPage;
