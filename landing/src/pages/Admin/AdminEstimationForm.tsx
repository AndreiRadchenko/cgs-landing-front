import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "@tanstack/react-query";

import * as Styled from "../../styles/AdminPage";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import EstimationFormMainContent from "../../components/Admin/EstimationForm";
import { IEstimationFormDataResponse } from "../../types/Admin/AdminEstimationForm.types";
import { adminEstimationFormService } from "../../services/adminEstimationForm";

const AdminEstimationForm = () => {
  const { data: token } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  const { data: formData, isLoading }: IEstimationFormDataResponse = useQuery(
    [queryKeys.getEstimationFormData],
    () => adminEstimationFormService.getFormData()
  );

  return token ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <EstimationFormMainContent formData={formData!} isLoading={isLoading} />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminEstimationForm;
