import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebAuditService/ProfessionalAuditBlock.style";
import Image from "next/image";
import AuditTimeText from "../../../public/WebAuditServicePage/AuditTimeText.svg";
import AuditTimeCommon from "../../../public/WebAuditServicePage/AuditTimeCommon.svg";
import { SplitBrackets } from "../../utils/splitBrackets";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const ProfessionalAuditBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.footerBlock;

  return (
    <Styled.Wrapper>
      <Styled.Subtitle>
        <SplitBrackets text={data?.title} />
      </Styled.Subtitle>
      <Styled.Content>
        <Styled.InfoBlock>
          <Styled.TextWrapper>
            <SplitBrackets text={data?.text} />
          </Styled.TextWrapper>
          {data && (
            <Styled.ButtonWrapper ref={elRef}>
              <GetEstimationButton
                buttonLink={data?.buttonLink}
                buttonText={data.button}
                withEstimation
                style={{
                  padding: "1.117em 2.537em",
                  fontSize: "1.5em",
                  whiteSpace: "nowrap",
                }}
              />
              <ButtonShareComponent />
            </Styled.ButtonWrapper>
          )}
        </Styled.InfoBlock>
        <Styled.ImageWrapper>
          <Image
            src={AuditTimeCommon}
            alt="types of grid image"
            layout="fill"
            objectFit="contain"
          />
          <Styled.HoveredImageContainer>
            <Styled.HoveredImage>
              <Image
                src={AuditTimeText}
                alt="types of grid image"
                layout="fill"
                objectFit="contain"
              />
            </Styled.HoveredImage>
          </Styled.HoveredImageContainer>
        </Styled.ImageWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default ProfessionalAuditBlock;
