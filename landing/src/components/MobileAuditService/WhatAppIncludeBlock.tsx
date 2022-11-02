import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
import MagnifyingGlass from "../../../public/MobileAuditService/magnifyingGlass.svg";
import { SplitBrackets } from "../../utils/splitBrackets";
import Image from "next/image";

const WhatAppIncludeBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppInclude;

  return (
    <Styled.Container>
      <Styled.Title>
        <SplitBrackets text={data?.subtitle} />
      </Styled.Title>
      <Styled.GradientLineContainer>
        <Styled.GradientLine />
        <Styled.SubtitlesList>
          {data?.textBlock.map((item, idx) => (
            <Styled.ListItem key={idx}>
              <Styled.PointWrapper>
                <Styled.PointLine />
                <Styled.PointCircle />
              </Styled.PointWrapper>
              <Styled.ListText>
                <SplitBrackets text={item.text} />
                {item.subtext.length !== 0 && (
                  <Styled.SubtextContainer>
                    <Styled.ConectLine />
                    <Styled.SubtextContentWrapper>
                      {item.subtext.map((subItem, idx) => (
                        <Styled.SubtextWrapper key={idx}>
                          <Styled.PointWrapper className="subtext">
                            <Styled.SubtextPointLine />
                            <Styled.PointCircle />
                          </Styled.PointWrapper>
                          <Styled.Subtext>
                            <SplitBrackets text={subItem} />
                          </Styled.Subtext>
                        </Styled.SubtextWrapper>
                      ))}
                    </Styled.SubtextContentWrapper>
                  </Styled.SubtextContainer>
                )}
              </Styled.ListText>
            </Styled.ListItem>
          ))}
        </Styled.SubtitlesList>
      </Styled.GradientLineContainer>
      <Styled.GlassContainer>
        <Image
          src={MagnifyingGlass}
          alt="magnifying glass image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.GlassContainer>
    </Styled.Container>
  );
};

export default WhatAppIncludeBlock;
