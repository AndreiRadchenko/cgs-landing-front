import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/UxUiService/EssentialBlock.styled";

const EssentialBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>(
    queryKeys.getServiceUxUiPage
  )?.essentialBlock;

  return (
    <Styled.Container>
      <Styled.Image src={data?.image.url} />
      <Styled.ContentWrapper>
        <Styled.Title>{data?.title}</Styled.Title>
        <Styled.Text>{data?.text}</Styled.Text>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default EssentialBlock;