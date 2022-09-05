import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/DbService/FeaturesBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import bgImage from "../../../public/DbService/featuresBg.svg";
import bgImageMobile from "../../../public/DbService/database-mobile-svg.svg";

const FeaturesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>(
    queryKeys.getServiceDbPage
  )?.featuresBlock;

  const databasesTextBlock = data && [
    data.databases.text1,
    data.databases.text2,
    data.databases.text3,
  ];

  const serversTextBlock = data && [data.servers.text1, data.servers.text2];

  return (
    <Styled.Container>
      <Styled.BgImage
        src={bgImage.src}
        alt="second block image"
      ></Styled.BgImage>
      <Styled.BgImageMobile
        src={bgImageMobile.src}
        alt="second block image mobile"
      ></Styled.BgImageMobile>
      <Styled.ContentWrapper>
        <div>
          <Styled.Subtitle>{data?.databases.subtitle}</Styled.Subtitle>
          {databasesTextBlock &&
            databasesTextBlock.map((text, i) => {
              return (
                <Styled.TextContent key={`text${i}`}>
                  <SplitBrackets text={text} />
                </Styled.TextContent>
              );
            })}
        </div>
        <div>
          <Styled.Subtitle>{data?.servers.subtitle}</Styled.Subtitle>
          {serversTextBlock &&
            serversTextBlock.map((text, i) => {
              return (
                <Styled.TextContent key={`text${i}`}>
                  <SplitBrackets text={text} />
                </Styled.TextContent>
              );
            })}
        </div>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default FeaturesBlock;
