import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextVacancyBlock from "../FirstTextVacancyBlock";
import VacancyContactBlock from "../VacancyContactBlock";
import * as Styled from "../../../styles/AdminPage";
import { adminVacancyService } from "../../../services/adminVacancyPage";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { IDataVacancyResponse } from "../../../types/Admin/Response.types";
import MetaTagsBlock from "../MetaTagsBlock";

interface IVacancyProps {
  data: IDataVacancyResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IVacancyProps>;
}
const VacancyMainContent = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, refetch }: IVacancyProps = useQuery(
    queryKeys.VacancyFullPage,
    () => adminVacancyService.getFullPage()
  );
  const { mutateAsync } = useMutation(
    queryKeys.PutVacancyFullPage,
    (data: IDataVacancyResponse) => adminVacancyService.updateFullPage(data)
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
      enableReinitialize={true}
    >
      {() => {
        return (
          <Form>
            <Styled.AdminContentBlock>
              <Styled.AdminPaddedHeaderBlock>
                <Styled.AdminHeader>Vacancy (info)</Styled.AdminHeader>
              </Styled.AdminPaddedHeaderBlock>
              <TextVacancyBlock
                name="info"
                page={page}
                setPage={setPage}
                key={`SomeBlockOfVacancy${page}`}
              />
              <Styled.AdminBlockWithoutHeader>
                <TextVacancyBlock name="offer" dark={true} />
              </Styled.AdminBlockWithoutHeader>
              <VacancyContactBlock />
              <MetaTagsBlock theme="dark" />
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
