import React, { useState } from "react";
import { Form, Formik, FormikValues } from "formik";
import { useMutation, useQuery } from "react-query";

import Careers from "../Careers";
import CareersContactForm from "../CareersContactForm";
import { createNewData } from "../Careers/createNewData";
import { adminCareersService } from "../../../services/adminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";
import MetaTagsBlock from "../MetaTagsBlock";

interface IMainProps {
  data: IDataCareersResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const CareersMainContent = () => {
  const [isNewTicket, setIsNewTicket] = useState(false);
  const [ticket, setTicket] = useState(0);

  const { data, isLoading, refetch }: IMainProps = useQuery(
    queryKeys.GetCareersPage,
    () => adminCareersService.getCareersPage()
  );

  const { mutateAsync } = useMutation(
    queryKeys.UpdateCareersPage,
    (data: IDataCareersResponse) => adminCareersService.updateCareersPage(data)
  );

  const { mutateAsync: addVacancy } = useMutation(
    queryKeys.UpdateCareersPage,
    (id: string) => adminCareersService.addVacancy(id)
  );

  // const submitForm = async (values: IDataCareersResponse) => {
  //   document.body.style.cursor = "wait";
  //   if (values.vacancy) {
  //     const newData: IDataCareersResponse = {
  //       ...values,
  //       tickets: [
  //         ...values.tickets,
  //         { ...values.vacancy, id: String(Math.random()) },
  //       ],
  //     };
  //     console.log(values.vacancy);
  //     await mutateAsync(newData);
  //   }
  //   if (isNewTicket) setIsNewTicket(!isNewTicket);
  //   await refetch();
  //   document.body.style.cursor = "auto";
  // };

  const submitForm = async (values: IDataCareersResponse) => {
    document.body.style.cursor = "wait";
    console.log("submit");
    if (values.vacancy) {
      const data = createNewData(values, ticket, isNewTicket, addVacancy);
      console.log("pop", data.tickets);
      if (isNewTicket) setIsNewTicket(!isNewTicket);
      if (data) await mutateAsync(data);
      await refetch();
      if (values.vacancy) {
        values.vacancy.vacancy = "";
        values.vacancy.position = "";
        values.vacancy.stack = [];
        values.vacancy.fromYou = [];
        values.vacancy.fromUs = [];
        values.vacancy.stars = 0;
      }
    }
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      initialValues={data}
      onSubmit={(values) => submitForm(values)}
      enableReinitialize
    >
      {() => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <Careers
                isNewTicket={isNewTicket}
                setIsNewTicket={setIsNewTicket}
                ticket={ticket}
                setTicket={setTicket}
              />
              <CareersContactForm />
              <MetaTagsBlock />
              <Styled.AdminPaddedBlock>
                <Styled.AdminBigButton type="submit">
                  Submit
                </Styled.AdminBigButton>
              </Styled.AdminPaddedBlock>
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

export default CareersMainContent;
