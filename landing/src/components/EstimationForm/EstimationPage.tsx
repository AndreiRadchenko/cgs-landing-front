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
import { IFormData } from "../../types/EstimationForm.types";
import Loader from "../Portfolio/Loader";

const EstimationPage = ({
  formData,
  setFormData,
  pageN,
  setPage,
}: {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  pageN: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const [parentId, setParentId] = useState("");

  const { data, isLoading } = useQuery(
    [queryKeys.getEstimationFormData, pageN],
    () => adminEstimationFormService.getPageData(pageN.toString())
  );

  const createFormData = useMutation({
    mutationFn: async (estimationData: IFormData) => {
      const { _id } = await adminEstimationFormService.createEstimationData(
        estimationData
      );

      setParentId(_id);
    },
  });

  const sendEmail = useMutation({
    mutationFn: async (emailData) => {
      await adminEstimationFormService.sendEstimationFormEmail(emailData);
    },
  });

  /*const helperSortPageAnswers = (arr) => {
    for (let i = 0; i < arr.length)
  }*/

  useEffect(() => {
    if (parentId) sendEmail.mutate({ parentId: parentId });
  }, [parentId]);

  const pageAnswers = formData.clientAnswers.filter(
    (clientAnswer) => clientAnswer.pageIndex === pageN
  );
  pageAnswers.sort((a, b) => a.questionIndex - b.questionIndex);
  console.log(pageAnswers);
  console.log(data?.page?.questions);

  if (isLoading) {
    return <Loader />;
  }

  const initialValues = {
    questionsArr: data?.page.questions.map((question, index) => {
      return {
        questionTitle: question.title,
        required: question.isRequired,
        value:
          question.optionsType === "TEXT" ||
          question.optionsType === "RADIO_BUTTON"
            ? pageAnswers[index]?.selectedOptions[0]?.text || ""
            : pageAnswers[index]?.selectedOptions?.map(
                (selectedOption) => selectedOption.text || []
              ),
      };
    }),
  };

  return (
    <ContainerEstimationForm>
      <Formik
        initialValues={initialValues}
        validationSchema={EstimationValidation}
        onSubmit={() => {
          const selectedOptionsUniqueByKey = [
            ...new Map(
              formData.clientAnswers.map((item) => [item.questionTitle, item])
            ).values(),
          ];
          setFormData((prevState) => ({
            ...prevState,
            clientAnswers: selectedOptionsUniqueByKey.sort(
              (a, b) => a.questionIndex - b.questionIndex
            ),
          }));

          if (pageN === data?.pageCount) {
            createFormData.mutate(formData);
          } else setPage((prevState: number) => prevState + 1);
        }}
      >
        {({ errors, touched, values }) => {
          return (
            <Form>
              {data?.page.questions.map((question, index) => (
                <EstimationQuestionField
                  setFormData={setFormData}
                  currentPage={pageN}
                  index={index}
                  key={question.questionKey}
                  question={question}
                />
              ))}
              {data?.pageCount && (
                <EstimateNavigation>
                  <Pagination
                    pageCount={data?.pageCount}
                    currentPage={pageN}
                    setPage={setPage}
                  />
                  <div style={{ position: "relative" }}>
                    {errors.questionsArr && touched.questionsArr && (
                      <EstimationButtonHelperText>
                        Seems like you missed some fields. Let us know more
                        about your project.
                      </EstimationButtonHelperText>
                    )}
                    <StyledButton type="submit">
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
