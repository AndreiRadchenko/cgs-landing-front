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
import { SplitBrackets } from "../../utils/splitBrackets";
import MobileImage from "../../../public/MobileAuditService/mobile.svg";
import Image from "next/image";

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
        <Styled.Description>
          <SplitBrackets text={data?.text} />
        </Styled.Description>
        <BlackButton
          padding={"1em 2.3em"}
          size={"1.125em"}
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
      <Styled.ImageWrapper>
        <Image
          src={MobileImage}
          alt="hero mobile audit image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.ImageWrapper>
    </Styled.Container>
  );
};

export default HeadBlock;
