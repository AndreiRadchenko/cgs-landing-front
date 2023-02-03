import React, { Dispatch, SetStateAction } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminEstimationFormService } from "../../services/adminEstimationForm";
import EstimationQuestionField from "./EstimationQuestionField";

import { StyledButton } from "./index.styled";
import { Form, Formik } from "formik";

import {
  ContainerEstimationForm,
  EstimateNavigation,
} from "../../styles/EstimationForm.styled";

import Pagination from "./Pagination";
import { EstimationValidation } from "../../validations/EstimationValidation";

const EstimationPage = ({
  pageN,
  setPage,
}: {
  pageN: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const { data, isLoading } = useQuery(
    [queryKeys.getEstimationFormData, pageN],
    () => adminEstimationFormService.getPageData(pageN.toString())
  );

  if (isLoading) {
    return <p>loading</p>;
  }

  const initialValues = {
    questionsArr: data?.page.questions.map((question) => {
      return {
        questionTitle: question.title,
        required: question.isRequired,
        value:
          question.optionsType === "TEXT" ||
          question.optionsType === "RADIO_BUTTON"
            ? ""
            : [],
      };
    }),
  };

  return (
    <ContainerEstimationForm>
      <Formik
        initialValues={initialValues}
        validationSchema={EstimationValidation}
        onSubmit={(values) => {
          setPage((prevState: number) => prevState + 1);
          console.log(values);
        }}
      >
        <Form>
          {data?.page.questions.map((question, index) => (
            <EstimationQuestionField
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
              <div>
                <StyledButton type="submit">
                  {data?.pageCount > pageN ? "< NEXT SECTION >" : "< FINISH >"}
                </StyledButton>
              </div>
            </EstimateNavigation>
          )}
        </Form>
      </Formik>
    </ContainerEstimationForm>
  );
};

export default EstimationPage;
