import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/WebAuditService/Common.styled";
import * as Styled from "../../styles/WebAuditService/TypesOfAudit.styled";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import { webAuditTypesOfAuditImages } from "../../utils/variables";
import TypesOfAuditHoverModal from "./TypesOfAuditHoverModal";

const TypesOfAuditBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.typesOfAuditBlock;
  return (
    <Styled.Wrapper>
      <Subtitle>Types of audit</Subtitle>
      <Styled.TypesGrid>
        {data?.map((item, idx) => (
          <Styled.TypeWrapper key={item.title}>
            <Styled.ImageWrapper>
              <Image
                src={webAuditTypesOfAuditImages[idx]}
                alt="types of grid image"
              />
            </Styled.ImageWrapper>
            <Styled.TypeTitle>
              <SplitBrackets text={item.title} />
            </Styled.TypeTitle>
            <TypesOfAuditHoverModal typeItem={item} />
          </Styled.TypeWrapper>
        ))}
      </Styled.TypesGrid>
    </Styled.Wrapper>
  );
};

export default TypesOfAuditBlock;
