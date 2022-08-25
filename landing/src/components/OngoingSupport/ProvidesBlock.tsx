import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import parse from "html-react-parser";
import * as Styled from "../../styles/OngoingSupport/ProvidesBlock.styled";

const ProvidesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>(
    queryKeys.getServiceSupportPage
  )?.providesBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.Bgi>
        <Styled.TextWrapper>
          {data?.textSubBlock.map((el, idx) => (
            <div key={idx}>
              <Styled.Subtitle>{el.subtitle}</Styled.Subtitle>
              <Styled.Text>{parse(el.text)}</Styled.Text>
            </div>
          ))}
        </Styled.TextWrapper>
      </Styled.Bgi>
    </Styled.Container>
  );
};

export default ProvidesBlock;
