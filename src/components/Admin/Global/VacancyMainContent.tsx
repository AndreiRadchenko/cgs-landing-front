import React from "react";
import { Formik, Form } from "formik";
import TextVacancyBlock from "../FirstTextVacancyBlock";
import VacancyContactBlock from "../VacancyContactBlock";
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
          <Form>
            <Styled.AdminContentBlock>
              <Styled.AdminPaddedHeaderBlock>
                <Styled.AdminHeader>Vacancy (info)</Styled.AdminHeader>
              </Styled.AdminPaddedHeaderBlock>
              <TextVacancyBlock name="info" />
              <TextVacancyBlock name="offer" dark={true} />
              <VacancyContactBlock />
              <Styled.AdminPaddedBlock>
                <Styled.AdminBigButton type="submit">
                  Submit
                </Styled.AdminBigButton>
              </Styled.AdminPaddedBlock>
            </Styled.AdminContentBlock>
          </Form>
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
