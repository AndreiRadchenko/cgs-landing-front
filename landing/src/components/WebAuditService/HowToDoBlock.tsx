import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import * as Styled from "../../styles/WebAuditService/HowToDoBlock.styled";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import { Subtitle } from "../../styles/WebAuditService/Common.styled";
import HowToDoAuditImg from "../../../public/WebAuditServicePage/HowToDoAuditImg.svg";
import { SplitBrackets } from "../../utils/splitBrackets";
import Image from "next/image";

const HowToDoBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.howToDoAudit;

  const firstHalf = data?.points.slice(0, data.points.length / 2);
  const secondHalf = data?.points.slice(
    data.points.length / 2,
    data.points.length
  );

  return (
    <Styled.Wrapper>
      <Subtitle>
        <SplitBrackets text={data?.subtitle} />
      </Subtitle>
      <Styled.ContentWrapper>
        <Styled.ListWrapper>
          {firstHalf &&
            firstHalf.map((el, idx) => (
              <Styled.ListItem key={el}>
                <Styled.TextWrapper>
                  <Styled.ImageWrapper>
                    <Image
                      src={HowToDoAuditImg}
                      alt="list check icon img"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Styled.ImageWrapper>
                  <Styled.Text>{el}</Styled.Text>
                </Styled.TextWrapper>
                {idx !== firstHalf.length - 1 && <Styled.BottomLine />}
              </Styled.ListItem>
            ))}
          <Styled.Shadow>
            <Styled.TopCorner />
            <Styled.BottomCorner />
          </Styled.Shadow>
        </Styled.ListWrapper>

        <Styled.ListWrapper>
          {secondHalf &&
            secondHalf.map((el, idx) => (
              <Styled.ListItem key={el}>
                <Styled.TextWrapper>
                  <Styled.ImageWrapper>
                    <Image
                      src={HowToDoAuditImg}
                      alt="list check icon img"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Styled.ImageWrapper>
                  <Styled.Text>{el}</Styled.Text>
                </Styled.TextWrapper>
                {idx !== secondHalf.length - 1 && <Styled.BottomLine />}
              </Styled.ListItem>
            ))}
          <Styled.Shadow>
            <Styled.TopCorner />
            <Styled.BottomCorner />
          </Styled.Shadow>
        </Styled.ListWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default HowToDoBlock;
