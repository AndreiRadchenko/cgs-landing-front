import React from "react";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";
import AuditBox from "./AuditBox";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const HowDoWeAuditBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.howDoWeAudit;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      {data && <MobileInfiniteText title={data.subtitle} />}
      <Styled.Description>{data?.description}</Styled.Description>
      <Styled.ListContainer>
        {data && (
          <>
            <AuditBox data={data.points.slice(0, data.points.length / 2)} />
            <AuditBox data={data.points.slice(data.points.length / 2)} />
          </>
        )}
      </Styled.ListContainer>
      <Styled.MobileListContainer>
        {data && <AuditBox className="mobileAudit" data={data.points} />}
      </Styled.MobileListContainer>
    </Styled.Container>
  );
};

export default HowDoWeAuditBlock;
