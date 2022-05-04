import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";

import Careers from "../Careers";
import CareersContactForm from "../CareersContactForm";
import { createNewData } from "../Careers/createNewData";
import { adminCareersService } from "../../../services/adminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";

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

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      initialValues={data}
      onSubmit={async (values) => {
        document.body.style.cursor = "wait";
        const data = createNewData(values, ticket, isNewTicket);
        if (isNewTicket) setIsNewTicket((prev) => !prev);
        if (data) await mutateAsync(data);
        await refetch();
        document.body.style.cursor = "auto";
      }}
      validateOnChange={false}
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
