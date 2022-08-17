import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import rhombus from "../../../public/CloudServicePage/rhombus.png";
import * as Styled from "../../styles/OngoingSupport/BonusesBlock.styled";

const BonusesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>(
    queryKeys.getServiceSupportPage
  )?.bonusesBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.TextWrapper>
        <Styled.Row1>
          <Styled.Line />
          {data?.textSubBlock.slice(0, 3).map((el, idx) => (
            <>
              <Styled.Text key={idx}>
                <Styled.Image src={rhombus.src} />
                {el}
              </Styled.Text>
              <Styled.Line key={idx + 1} />
            </>
          ))}
        </Styled.Row1>
        <Styled.Row2>
          <Styled.Line />
          {data?.textSubBlock.slice(3).map((el, idx) => (
            <>
              <Styled.Text key={idx}>
                <Styled.Image src={rhombus.src} />
                {el}
              </Styled.Text>
              <Styled.Line key={idx + 1} />
            </>
          ))}
        </Styled.Row2>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default BonusesBlock;
