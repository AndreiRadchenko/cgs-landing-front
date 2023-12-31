﻿import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/MobileService/StrongBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceMobile } from "../../types/Admin/Response.types";

import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";

import android from "../../../public/MobileSevice/strongBlock/android.svg";
import apple from "../../../public/MobileSevice/strongBlock/apple.svg";

const StrongBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.strongBlock;
  const blockPhotoArr = [android, apple];
  return (
    <Styled.StrongContainer>
      <Subtitle className={"mobileDev"}>{data?.subtitle}</Subtitle>
      <MobileInfiniteText title={data?.subtitle} />
      <Styled.ContentContainer>
        {data &&
          Object.entries(data?.textBlock).map((el, idx) => (
            <Styled.Block key={el[0]}>
              <Styled.ImageContainer>
                <Styled.BlockImage
                  xOffset={handleRandomOffset()}
                  id={`${el[0]}`}
                  src={blockPhotoArr[idx].src}
                  alt={`${el[0]} img`}
                />
              </Styled.ImageContainer>
              <Styled.BlockTextContainer>
                <Styled.BlockTitle>{el[1].subtitle}</Styled.BlockTitle>
                <Styled.BlockText>{el[1].text}</Styled.BlockText>
              </Styled.BlockTextContainer>
            </Styled.Block>
          ))}
      </Styled.ContentContainer>
    </Styled.StrongContainer>
  );
};

export default StrongBlock;
