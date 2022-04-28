import React from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminCardsBlock from "../CardsBlock";
import EditInformationBlock from "../EditInfoBlock";
import FirstAdminBlock from "../FirstHeaderBlock";
import AdminLogosBlock from "../LogosBlock";
import SubtitleBlock from "../SubtitleBlock";
import AdminFeedbackBlock from "../FeedbackBlock";
import AdminTechBlock from "../TechBlock";
import AdminCorporateBlock from "../CorporateBlock";
import AdminHowWeWorkBlock from "../HowWeWorkBlock";
import AdminBuildRocketBlock from "../RocketBlock";
import AdminContactFormBlock from "../ContactBlock";
import AdminFooterBlock from "../Footer";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminGlobalService } from "../../../services/adminHomePage";
import { IDataResponse } from "../../../types/Admin/Response.types";

interface IMainProps {
  data: IDataResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const AdminMainContent = () => {
  const {
    data,
    isLoading,
    refetch,
  }: IMainProps = useQuery(queryKeys.GetFullPage, () =>
    adminGlobalService.getFullPage()
  );

  const { mutateAsync } = useMutation(
    queryKeys.PutHomePageData,
    (data: IDataResponse) => adminGlobalService.updateFullPage(data)
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
      {(props) => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <FirstAdminBlock state={props.values.MainLogoBlock} />
              <EditInformationBlock
                state={props.values.EditInformationBlock}
                onChangeFunction={props.handleChange}
              />
              <SubtitleBlock
                state={props.values.SubtitleBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminLogosBlock state={props.values.LogosBlock} />
              <AdminCardsBlock
                state={props.values.CardsBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminFeedbackBlock
                state={props.values.FeedbackBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminTechBlock
                state={props.values.TechnologyBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminCorporateBlock
                state={props.values.CorporateBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminHowWeWorkBlock
                state={props.values.HowWeWorkBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminBuildRocketBlock
                state={props.values.BuildRocketBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminContactFormBlock
                state={props.values.ContactFormBlock}
                onChangeFunction={props.handleChange}
              />
              <AdminFooterBlock
                state={props.values.FooterBlock}
                onChangeFunction={props.handleChange}
              />
              <Styled.AdminPaddedBlock>
                <Styled.AdminBigButton type="submit" children="Submit" />
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

export default AdminMainContent;
