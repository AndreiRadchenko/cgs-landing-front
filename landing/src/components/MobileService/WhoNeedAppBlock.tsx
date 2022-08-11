import React from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/MobileService/WhoNeedApps.styled";

import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { Subtitle } from "../../styles/MobileService/Layout";
import { SplitBrackets } from "../../utils/splitBrackets";

const WhoNeedAppBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>(
    queryKeys.getServiceMobilePage
  );

  const arrow = `<br /><svg
      width="45"
      height="20"
      viewBox="0 0 45 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.6912 9.88133L32.9555 1.21619L34.1816 0L45 10.731L44.9861 10.7448L44.9999 10.7585L33.6623 22L32.4365 20.7836L41.6972 11.6013L0 12.0891L0 9.88133L41.6912 9.88133Z"
        fill="black"
      />
    </svg>`;

  return (
    <Styled.Wrapper>
      <Styled.WhatDoWeUse>
        <Styled.WhatDoWeUseContainer>
          <Subtitle>{data?.whatDoWeUse.subtitle}</Subtitle>
          <Styled.SubText>
            {data && parse(data?.whatDoWeUse.text.replace("[arrow]", arrow))}
          </Styled.SubText>
        </Styled.WhatDoWeUseContainer>
      </Styled.WhatDoWeUse>
      <Styled.WhoNeedAppsBlocks>
        <Styled.WhoNeedAppsWrapper>
          <Subtitle>{data?.whoNeedApps.subtitle}</Subtitle>
          <Styled.WhoNeedSubText>
            <SplitBrackets text={data?.whoNeedApps.text} />
          </Styled.WhoNeedSubText>
        </Styled.WhoNeedAppsWrapper>
      </Styled.WhoNeedAppsBlocks>
    </Styled.Wrapper>
  );
};

export default WhoNeedAppBlock;
