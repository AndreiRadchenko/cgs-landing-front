import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import { Subtitle } from "../../styles/CloudService/Layaut";
import * as Styled from "../../styles/CloudService/Provides.styled";

const ProvidesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>(
    queryKeys.getServiceCloudPage
  )?.providesBlock;

  const { subtitle, ...blocks } = { ...data };
  console.log(data);

  return (
    <Styled.Container>
      <Subtitle>{subtitle}</Subtitle>
      <Styled.BgContainer />
      <Styled.BlockWrapper>
        {Object.values(blocks).map((el, index) => (
          <Styled.Block key={index}>
            <Styled.Title>{el.subtitle}</Styled.Title>
            <Styled.Description>{el.text}</Styled.Description>
          </Styled.Block>
        ))}
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default ProvidesBlock;
