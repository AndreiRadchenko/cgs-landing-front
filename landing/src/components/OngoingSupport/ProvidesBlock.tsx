import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import parse from "html-react-parser";
import firstBlock from "../../../public/OngoingSupport/block-1.svg";
import secondBlock from "../../../public/OngoingSupport/block-2.svg";
import thirdBlock from "../../../public/OngoingSupport/block-3.svg";
import fourthBlock from "../../../public/OngoingSupport/block-4.svg";
import fifthBlock from "../../../public/OngoingSupport/block-5.svg";
import bottomBlock from "../../../public/OngoingSupport/bottom-block.svg";
import bottomMobile from "../../../public/OngoingSupport/bottom-mobile.svg";
import * as Styled from "../../styles/OngoingSupport/ProvidesBlock.styled";

const ProvidesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>(
    queryKeys.getServiceSupportPage
  )?.providesBlock;

  const smallBg = [
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock,
    fifthBlock,
  ];

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.TextWrapper>
        {data?.textSubBlock.map((el, idx) => (
          <div key={idx}>
            <Styled.ContentWrapper>
              <Styled.Subtitle>{el.subtitle}</Styled.Subtitle>
              <Styled.Text>{parse(el.text)}</Styled.Text>
            </Styled.ContentWrapper>
            <Styled.BlockContainer src={smallBg[idx].src} />
          </div>
        ))}
      </Styled.TextWrapper>
      <Styled.Mario src={bottomBlock.src} />
      <Styled.MobileMario src={bottomMobile.src} />
    </Styled.Container>
  );
};

export default ProvidesBlock;
