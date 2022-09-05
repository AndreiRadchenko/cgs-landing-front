import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/UxUiService/WhatDoWeDo.styled";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import downDashed from "../../../public/CloudServicePage/downDashed.svg";
import upDashed from "../../../public/CloudServicePage/upDashed.svg";
import { SplitBrackets } from "../../utils/splitBrackets";

const WhatDoWeDoBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>(
    queryKeys.getServiceUxUiPage
  )?.whatDoWeDoBlock;

  const figures = [crystal, cube, cylinder];
  const bgi = [downDashed, upDashed];

  return (
    <Styled.Container>
      <Styled.Title>{data?.title}</Styled.Title>
      <Styled.SubBlockContainer>
        {data?.textSubBlock.map((el, idx) => (
          <div key={idx}>
            <Styled.Subtitle>
              <Styled.Svg src={figures[idx].src} />
              {el.subtitle}
            </Styled.Subtitle>
            <Styled.Text>
              <SplitBrackets text={el.text} />
            </Styled.Text>
            {bgi[idx] && <Styled.Image src={bgi[idx].src} />}
          </div>
        ))}
      </Styled.SubBlockContainer>
    </Styled.Container>
  );
};

export default WhatDoWeDoBlock;
