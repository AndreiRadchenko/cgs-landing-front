﻿import React from "react";
import textPoint from "../../../public/MobileSevice/textPoint.svg";
import textPointReversed from "../../../public/MobileSevice/textPointReversed.svg";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileService/HowDoWeWork.styled";
import { Subtitle } from "../../styles/MobileService/Layout";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const HowDoWeWork = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>(
    queryKeys.getServiceMobilePage
  )?.howDoWeWork;

  const points = data && Object.values(data.text);

  if (points && width && width < 1200) {
    [points[1], points[2]] = [points[2], points[1]];
  }
  const arrayOfGradients = [
    { firstColor: "#d6ffbb", secondColor: "#C1E6C0" },
    {
      firstColor: "#D6F3CF",
      secondColor: "#9EBCCA",
    },
    {
      firstColor: "#BBD2D7",
      secondColor: "#7990D4",
    },
    { firstColor: "#99AAE0", secondColor: "#5869dd" },
  ];

  return (
    <Styled.ContentWrapper>
      <Subtitle>{data?.subtitle}</Subtitle>
      <Styled.PointsWrapper>
        <Styled.Line />
        {width &&
          points &&
          points.map((point, idx) => (
            <>
              <Styled.TextContainer key={`${point.subtitle} ${idx}`}>
                <Styled.Point
                  src={
                    width && width > 1200
                      ? idx < 2
                        ? textPoint.src
                        : textPointReversed.src
                      : textPoint.src
                  }
                  alt="text point img"
                />
                <div>
                  <Styled.TextTitle>{point.subtitle}</Styled.TextTitle>
                  <Styled.TextContent>
                    <SplitBrackets text={point.text} />
                  </Styled.TextContent>
                </div>
              </Styled.TextContainer>
              {width && width < 1200 && (
                <Styled.MobileLine
                  firstColor={arrayOfGradients[idx].firstColor}
                  secondColor={arrayOfGradients[idx].secondColor}
                />
              )}
            </>
          ))}
      </Styled.PointsWrapper>
    </Styled.ContentWrapper>
  );
};

export default HowDoWeWork;
