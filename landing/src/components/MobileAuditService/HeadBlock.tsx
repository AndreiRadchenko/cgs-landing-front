import React from "react";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import themes from "../../utils/themes";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import ButtonArrow from "../../utils/ButtonArrow";
import * as Styled from "../../styles/MobileAuditService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        <BlackButton
          padding={"1.117em 3.6em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.Content>
    </Styled.Container>
  );
};

export default HeadBlock;
