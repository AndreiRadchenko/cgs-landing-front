import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import downDashed from "../../../public/CloudServicePage/downDashed.svg";
import upDashed from "../../../public/CloudServicePage/upDashed.svg";
import * as Styled from "../../styles/OngoingSupport/WorkBlock.styled";

const WorkBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>(
    queryKeys.getServiceSupportPage
  )?.howDoWeWorkBlock;
  const { subtitle, ...blocks } = { ...data };
  const figures = [crystal, cube, cylinder];
  const bgi = [downDashed, upDashed];

  return (
    <Styled.Container>
      <Styled.Title>{subtitle}</Styled.Title>
      <Styled.TextWrapper>
        {Object.values(blocks).map((el, idx) => (
          <Styled.Wrapper key={idx}>
            <Styled.Subtitle>
              <Styled.Svg src={figures[idx].src} />
              {el.subtitle}
            </Styled.Subtitle>
            <Styled.Text>{el.text}</Styled.Text>
            {bgi[idx] && <Styled.Bgi src={bgi[idx].src} />}
          </Styled.Wrapper>
        ))}
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default WorkBlock;
