import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IOngoingSupport } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/OngoingSupport/ProvidesBlock.styled";

const ProvidesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IOngoingSupport>(
    queryKeys.getOngoingSupportPage
  )?.providesBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.Bgi />
      <Styled.TextWrapper>
        {data?.textSubBlock.map((el) => (
          <div key={el._id}>
            <Styled.Subtitle>{el.subtitle}</Styled.Subtitle>
            <Styled.Text>{el.text}</Styled.Text>
          </div>
        ))}
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default ProvidesBlock;
