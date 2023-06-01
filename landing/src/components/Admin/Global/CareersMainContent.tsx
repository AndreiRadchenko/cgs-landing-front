import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import Careers from "../Careers";
import CareersContactForm from "../CareersContactForm";
import { adminCareersService } from "../../../services/adminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/AdminPage";
import MetaTagsBlock from "../MetaTagsBlock";
import { newVacancy } from "../../../consts";
import AdminBlockDropDown from "./AdminBlockDropDown";
import * as AdminPageStyled from "../../../styles/AdminPage";
import CareersTitleBlock from "../Careers/CareersTitleBlock";

interface IMainProps {
  data: IDataCareersResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
};

const CareersMainContent = () => {
  const [isNewTicket, setIsNewTicket] = useState(false);
  const [ticket, setTicket] = useState(0);

  const { data, isLoading, refetch }: IMainProps = useQuery(
    [queryKeys.GetCareersPage],
    () => adminCareersService.getCareersPage()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.UpdateCareersPage],
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
          <AdminPageStyled.AdminPaddedBlock theme="light">
          <Styled.AdminContentBlock>
            <Form>
              <AdminPageStyled.AdminHeader>Careers</AdminPageStyled.AdminHeader>
              <CareersTitleBlock />
              <AdminBlockDropDown title="ADD A NEW VACANCY">
                <Careers
                  refetch={refetch}
                  isNewTicket={isNewTicket}
                  setIsNewTicket={setIsNewTicket}
                  ticket={ticket}
                  setTicket={setTicket}
                />
              </AdminBlockDropDown>
              <AdminBlockDropDown title="CONTACT FORM">
                <CareersContactForm/>
              </AdminBlockDropDown>
              <MetaTagsBlock sitemap="careers" />
            </Form>
          </Styled.AdminContentBlock>
          </AdminPageStyled.AdminPaddedBlock>
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