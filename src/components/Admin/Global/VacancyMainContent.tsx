import React from "react";
import { Formik, Form } from "formik";
import TextVacancyBlock from "../FirstTextVacancyBlock";
import * as Styled from "../../../styles/AdminPage";
import { adminGlobalService } from "../../../services/adminVacancyPage";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { IDataVacancyResponse } from "../../../types/Admin/Response.types";

interface IVacancyProps {
  data: IDataVacancyResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IVacancyProps>;
}
const VacancyMainContent = () => {
  const { data, isLoading, refetch }: IVacancyProps = useQuery(
    queryKeys.VacancyFullPage,
    () => adminGlobalService.getFullPage()
  );
  const { mutateAsync } = useMutation(
    queryKeys.PutVacancyFullPage,
    (data: IDataVacancyResponse) => adminGlobalService.updateFullPage(data)
  );

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      initialValues={data!}
      onSubmit={async (values) => {
        document.body.style.cursor = "wait";
        await mutateAsync(values);
        await refetch();
        document.body.style.cursor = "auto";
      }}
      validateOnChange={false}
    >
      {() => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <Styled.AdminPaddedHeaderBlock>
                <Styled.AdminHeader>Vacancy (info)</Styled.AdminHeader>
              </Styled.AdminPaddedHeaderBlock>
              <TextVacancyBlock
                titleTextBlock={data.info.text}
                pointsBlockArr={data.info.points}
                bottomTextBlock={data.info.text2}
                imageBlock={data.info.worker}
              />
              <TextVacancyBlock
                titleTextBlock={{ title: data.offer.title }}
                pointsBlockArr={data.offer.points}
                bottomTextBlock={data.offer.text}
                imageBlock={data.offer}
                dark={true}
              />
            </Form>
          </Styled.AdminContentBlock>
        );
      }}
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default VacancyMainContent;
