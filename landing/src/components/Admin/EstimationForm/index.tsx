import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";

import { CustomToast } from "../CustomToast";
import EstimationFormPage from "./EstimationFormPage";

import * as Styled from "../../../styles/AdminPage";
import { IEstimationFormPagesResponse } from "../../../types/Admin/AdminEstimationForm.types";
import { adminEstimationFormService } from "../../../services/adminEstimationForm";
import "react-toastify/dist/ReactToastify.css";

const EstimationFormMainContent = () => {
  const { data, isLoading, refetch }: IEstimationFormPagesResponse = useQuery(
    [queryKeys.getEstimationFormPage],
    () => adminEstimationFormService.getPages()
  );

  const [isCustomLoading, setIsCustomLoading] = useState(false);

  // if (isLoading) {
  //   return (
  //     <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  //   );
  // }

  // if (isCustomLoading) {
  //   return (
  //     <Styled.AdminPaddedBlock>
  //       <Styled.AdminHeader>Loading...</Styled.AdminHeader>
  //     </Styled.AdminPaddedBlock>
  //   );
  // }

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Estimation Form</Styled.AdminHeader>

      {data &&
        data.pages.map((el, i) => (
          <EstimationFormPage
            pages={data}
            values={el}
            pageNumber={i + 1}
            key={el._id}
            refetch={refetch}
            setIsCustomLoading={setIsCustomLoading}
          />
        ))}
      <CustomToast />
    </Styled.AdminPaddedBlock>
  );
};

export default EstimationFormMainContent;
