import React, { useRef } from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import rhombus from "../../../public/CloudServicePage/rhombus.svg";
import * as Styled from "../../styles/CloudService/WorkBlock.styled";
import { useOnScreen } from "../../hooks/useOnScreen";

const WorkBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>(
    queryKeys.getServiceCloudPage
  )?.workBlock;
  const { subtitle, ...blocks } = { ...data };
  const elRef = useRef<HTMLDivElement>(null);
  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{subtitle}</Styled.Title>
      <Styled.BlockWrapper ref={elRef}>
        {Object.values(blocks).map((el, index) => (
          <Styled.Block
            key={index}
            ind={index}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.Line />
            <Styled.Image src={rhombus.src} alt="rhombus image" />
            <Styled.Subtitle>{el}</Styled.Subtitle>
          </Styled.Block>
        ))}
        <Styled.Line />
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default WorkBlock;
