import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/BlockchainService/ServicesBlock.styled";

const ServicesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>(
    queryKeys.getServiceBlockchainPage
  )?.servicesBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.SubTextContainer>
        <Styled.SubTextContent>
          {data?.textSubBlock.map((el, idx) => (
            <Styled.SubText key={idx}>{el}</Styled.SubText>
          ))}
        </Styled.SubTextContent>
      </Styled.SubTextContainer>
      <Styled.DescriptionContainer>
        <Styled.Image src={data?.image.url} />
        <Styled.Description>{data?.text}</Styled.Description>
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
};

export default ServicesBlock;
