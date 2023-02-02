import React, { Dispatch, SetStateAction, useEffect } from "react";
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

  const initialValObj = {};

  useEffect(() => {
    data?.page.questions.map((question) => {
      question.optionsType === "TEXT" ||
        (question.optionsType === "RADIO_BUTTON" &&
          Object.defineProperty(initialValObj, question.title, { value: "" }));
      question.optionsType === "CHECKBOX" &&
        Object.defineProperty(initialValObj, question.title, { value: [] });
    });
  }, [data]);

  return (
    <ContainerEstimationForm>
      <Formik
        initialValues={initialValObj}
        onSubmit={(values) => {
          setPage((prevState: number) => prevState + 1);
          console.log(values);
        }}
      >
        <Form>
          {data?.page.questions.map((question) => (
            <EstimationQuestionField
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
