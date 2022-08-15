import React from "react";
import textPoint from "../../../public/MobileSevice/textPoint.svg";
import textPointReversed from "../../../public/MobileSevice/textPointReversed.svg";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileService/HowDoWeWork.styled";
import { Subtitle } from "../../styles/MobileService/Layout";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";

const HowDoWeWork = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>(
    queryKeys.getServiceMobilePage
  )?.howDoWeWork;
  return (
    <Styled.ContentWrapper>
      <Subtitle>{data?.subtitle}</Subtitle>
      <Styled.PointsWrapper>
        <Styled.Line />
        {data &&
          Object.values(data.text).map((point, idx) => (
            <Styled.TextContainer key={`${point.subtitle} ${idx}`}>
              <Styled.Point
                src={idx < 2 ? textPoint.src : textPointReversed.src}
                alt="text point img"
              />
              <div>
                <Styled.TextTitle>{point.subtitle}</Styled.TextTitle>
                <Styled.TextContent>
                  <SplitBrackets text={point.text} />
                </Styled.TextContent>
              </div>
            </Styled.TextContainer>
          ))}
      </Styled.PointsWrapper>
    </Styled.ContentWrapper>
  );
};

export default HowDoWeWork;
