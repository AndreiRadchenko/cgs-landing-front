import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import rhombus from "../../../public/CloudServicePage/rhombus.svg";
import * as Styled from "../../styles/CloudService/WorkBlock.styled";

const WorkBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>(
    queryKeys.getServiceCloudPage
  )?.workBlock;
  const { subtitle, ...blocks } = { ...data };

  return (
    <Styled.Container>
      <Styled.Title>{subtitle}</Styled.Title>
      <Styled.BlockWrapper>
        {Object.values(blocks).map((el, index) => (
          <Styled.Block key={index}>
            <Styled.Line />
            <Styled.Image src={rhombus.src} />
            <Styled.Subtitle>{el}</Styled.Subtitle>
          </Styled.Block>
        ))}
        <Styled.Line />
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default WorkBlock;
