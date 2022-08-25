import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import parse from "html-react-parser";
import ButtonArrow from "../../utils/ButtonArrow";
import themes from "../../utils/themes";
import * as Styled from "../../styles/OngoingSupport/HeadBlock.styled";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>(
    queryKeys.getServiceSupportPage
  )?.headerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          {data?.title.split(" ").map((el, idx) => (
            <span key={idx}>{`${parse(el)} `}</span>
          ))}
        </Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        <BlackButton
          padding={"1.117em 2.836em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.Content>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;