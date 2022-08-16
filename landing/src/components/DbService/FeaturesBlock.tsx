import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/DbService/FeaturesBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import bgImage from "../../../public/DbService/featuresBg.svg";

const FeaturesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>(
    queryKeys.getServiceDbPage
  )?.featuresBlock;

  return (
    <Styled.Container>
      <Styled.BgImage
        src={bgImage.src}
        alt="second block image"
      ></Styled.BgImage>
      <Styled.ContentWrapper>
        <div>
          <Styled.Subtitle>{data?.databases.subtitle}</Styled.Subtitle>
          <Styled.TextContent>
            <SplitBrackets text={data?.databases.text1} />
          </Styled.TextContent>
          <Styled.TextContent>
            <SplitBrackets text={data?.databases.text2} />
          </Styled.TextContent>
          <Styled.TextContent>
            <SplitBrackets text={data?.databases.text3} />
          </Styled.TextContent>
        </div>
        <div>
          <Styled.Subtitle>{data?.servers.subtitle}</Styled.Subtitle>
          <Styled.TextContent>
            <SplitBrackets text={data?.servers.text1} />
          </Styled.TextContent>
          <Styled.TextContent>
            <SplitBrackets text={data?.servers.text2} />
          </Styled.TextContent>
        </div>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default FeaturesBlock;
