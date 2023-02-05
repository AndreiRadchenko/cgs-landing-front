import React from "react";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileAuditService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import MobileImage from "../../../public/MobileAuditService/mobile.svg";
import Image from "next/image";
import GetEstimationButton from "../GetEstimationButton";

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
        {data && (
          <GetEstimationButton
            buttonLink={data?.buttonLink}
            withEstimation
            buttonText={data.button}
            style={{
              padding: "1em 2.3em",
              fontSize: "1.125em",
            }}
          />
        )}
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
