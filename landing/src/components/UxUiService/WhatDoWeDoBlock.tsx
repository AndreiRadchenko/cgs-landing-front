import React, { useRef } from "react";
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
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { useOnScreen } from "../../hooks/useOnScreen";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const WhatDoWeDoBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>(
    queryKeys.getServiceUxUiPage
  )?.whatDoWeDoBlock;

  const figures = [crystal, cube, cylinder];
  const bgi = [downDashed, upDashed];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{data?.title}</Styled.Title>
      <MobileInfiniteText title={data?.title} />
      <Styled.SubBlockContainer ref={elRef}>
        {data?.textSubBlock.map((el, idx) => (
          <Styled.Wrapper
            key={idx}
            ind={idx}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.Subtitle>
              <Styled.Svg
                src={figures[idx].src}
                xOffset={handleRandomOffset()}
              />
              {el.subtitle}
            </Styled.Subtitle>
            <Styled.Text>
              <SplitBrackets text={el.text} />
            </Styled.Text>
            {bgi[idx] && <Styled.Image src={bgi[idx].src} />}
          </Styled.Wrapper>
        ))}
      </Styled.SubBlockContainer>
    </Styled.Container>
  );
};

export default WhatDoWeDoBlock;
