import React, { useState } from "react";
import * as Styled from "../../styles/AdminPage";
import AdminCardsBlock from "../AdminCardsBlock";
import EditInformationBlock from "../AdminEditInfoBlock";
import FirstAdminBlock from "../AdminFirstHeaderBlock";
import AdminLogosBlock from "../AdminLogosBlock";
import SubtitleBlock from "../AdminSubtitleBlock";
import AdminFeedbackBlock from "../AdminFeedbackBlock";
import AdminTechBlock from "../AdminTechBlock";
import AdminCorporateBlock from "../AdminCorporateBlock";
import AdminHowWeWorkBlock from "../AdminHowWeWorkBlock";
import AdminBuildRocketBlock from "../AdminBuildRocketBlock";
import AdminContactFormBlock from "../AdminContactBlock";
import AdminFooterBlock from "../AdminFooter";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { IDataResponse } from "../../types/Admin/Response.types";

const AdminMainContent = () => {
  const [isRuning, setIsRunning] = useState(false);

  const {
    data,
    isLoading,
    refetch
  }: {
    data: IDataResponse | undefined;
    isLoading: boolean;
    refetch: any;
  } = useQuery(queryKeys.GetFullPage, () => adminGlobalService.getFullPage());

  const { mutateAsync } = useMutation(
    queryKeys.PutHomePageData,
    (data: IDataResponse) => adminGlobalService.updateFullPage(data)
  );

  if (isLoading || isRuning) {
    return (
      <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
    );
  }
  if (data != undefined) {
    return (
      <Formik
        initialValues={data!}
        onSubmit={async (values) => {
          setIsRunning(true);
          await mutateAsync(values);
          await refetch();
          setIsRunning(false);
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
    );
  } else {
    return (
      <Styled.AdminUnauthorizedModal>
        Something went wrong :(
      </Styled.AdminUnauthorizedModal>
    );
  }
};

export default AdminMainContent;
