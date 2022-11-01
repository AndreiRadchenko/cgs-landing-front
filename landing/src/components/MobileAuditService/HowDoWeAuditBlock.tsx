import React from "react";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";
import AuditTable from "./AuditTable";

const HowDoWeAuditBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.howDoWeAudit;

  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>{data?.subtitle}</Styled.Title>
      </Styled.TitleContainer>
      <Styled.Description>{data?.description}</Styled.Description>
      <AuditTable points={data?.points} />
    </Styled.Container>
  );
};

export default HowDoWeAuditBlock;
