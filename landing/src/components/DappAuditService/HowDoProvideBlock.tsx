import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/HowDoProvideBlock.styled";
import { IServiceDappAudit } from "../../types/Admin/Response.types";
import HowToProvideBlockItem from "./HowDoProvideBlockItem";
import HowDoWeProvideBg from "../../../public/DappAuditService/HowDoWeProvide.svg";
import HowDoProvideSubItem from "./HowDoProvideSubItem";

const HowDoProvideBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.howDoWeProvideBlock;

  return (
    <Styled.Wrapper>
      <Styled.SubtitleWrapper>
        <div>
          <Subtitle>{data?.subtitle}</Subtitle>
          {data && (
            <HowToProvideBlockItem
              number={1}
              title={data.textBlock[0].title}
              text={data.textBlock[0].text}
            />
          )}
        </div>
        {data && (
          <Styled.ImageWrapper>
            <Image
              src={data?.image.url}
              alt="how to provide img"
              layout="fill"
              objectFit="contain"
            />
          </Styled.ImageWrapper>
        )}
      </Styled.SubtitleWrapper>
      <Styled.BackgroundContainer>
        <Styled.BgImageWrapper>
          <Image
            src={HowDoWeProvideBg.src}
            layout="fill"
            objectFit="contain"
            alt="how do we provide bg image"
          />
        </Styled.BgImageWrapper>
        <Styled.SubContentWrapper>
          {data?.textBlock[0].subContent.map((item, idx) => (
            <HowDoProvideSubItem
              title={item.title}
              text={item.text}
              key={item.title + idx}
            />
          ))}
        </Styled.SubContentWrapper>
        {data && (
          <Styled.SecondSubtitleContainer>
            <HowToProvideBlockItem
              optional
              number={2}
              title={data.textBlock[1].title}
              text={data.textBlock[1].text}
            />
          </Styled.SecondSubtitleContainer>
        )}
        {data && (
          <Styled.ThirdSubtitleContainer>
            <HowToProvideBlockItem
              number={3}
              title={data.textBlock[2].title}
              text={data.textBlock[2].text}
            />
          </Styled.ThirdSubtitleContainer>
        )}
      </Styled.BackgroundContainer>
    </Styled.Wrapper>
  );
};

export default HowDoProvideBlock;
