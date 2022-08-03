import React, { useState } from "react";
import { Form, Formik, FormikValues } from "formik";
import { useMutation, useQuery } from "react-query";

import Careers from "../Careers";
import CareersContactForm from "../CareersContactForm";
import { adminCareersService } from "../../../services/adminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";
import MetaTagsBlock from "../MetaTagsBlock";
import { newVacancy } from "../../../consts";

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

  const submitForm = async (values: IDataCareersResponse) => {
    document.body.style.cursor = "wait";
    data &&
      (await mutateAsync({
        ...values,
        tickets: data.tickets,
        vacancy: newVacancy,
      }));
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data} onSubmit={(values) => submitForm(values)}>
      {() => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <Careers
                refetch={refetch}
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
