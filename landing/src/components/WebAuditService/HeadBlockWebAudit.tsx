import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebAuditService/HeadBlock.styled";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { HeaderTextBlockServices } from "../ServisesComponents";

const HeadBlockWebAudit = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.headerBlock;

  return (
    <Styled.Wrapper>
      <Styled.ContentContainer>
        <Styled.TextContainer>
          {data && (
            <HeaderTextBlockServices
              title={data.title}
              text={data.text}
              btnText={data.button}
              btnLink={data.buttonLink}
            />
          )}
        </Styled.TextContainer>
        {data?.image && (
          <Styled.Image src={data?.image.url} alt="web audit hero image" />
        )}
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
};

export default HeadBlockWebAudit;
