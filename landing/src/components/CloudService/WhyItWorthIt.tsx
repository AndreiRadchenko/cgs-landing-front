import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import { Subtitle } from "../../styles/CloudService/Layaut";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import upDashed from "../../../public/CloudServicePage/upDashed.svg";
import downDashed from "../../../public/CloudServicePage/downDashed.svg";
import parse from "html-react-parser";
import * as Styled from "../../styles/CloudService/WhyItWorthIt.styled";

const WhyItWorthIt = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>(
    queryKeys.getServiceCloudPage
  )?.worthBlock;
  const { subtitle, ...blocks } = { ...data };
  const logos = [crystal, cube, cylinder];
  const bgLines = [downDashed, upDashed];

  return (
    <Styled.Container>
      <Subtitle>{subtitle}</Subtitle>
      <Styled.BlockWrapper>
        {Object.values(blocks).map((el, index) => (
          <Styled.Block key={index}>
            <Styled.TitleWrapper>
              <Styled.Svg src={logos[index].src} />
              <Styled.Title>{el.subtitle}</Styled.Title>
            </Styled.TitleWrapper>
            {bgLines[index] && <Styled.Image src={bgLines[index].src} />}
            <Styled.BlockText>{el.text && parse(el.text)}</Styled.BlockText>
          </Styled.Block>
        ))}
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default WhyItWorthIt;
