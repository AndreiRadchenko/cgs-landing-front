import styled from "styled-components";
import themes from "../../utils/themes";
import illustration from "../../../public/MobileSevice/whoNeedApps/whoNeedAppsImg.svg";

export const Wrapper = styled.div`
  margin-top: 10em;
  background-image: url(${illustration.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 7em;

  @media ${themes.primary.media.minPC} {
    padding: 3em;
  }
`;

export const WhatDoWeUse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const WhatDoWeUseContainer = styled.div`
  margin-top: 16em;
  width: 50%;

  @media ${themes.primary.media.minPC} {
    margin-top: 13em;
  }
`;

export const SubText = styled.p`
  line-height: 160%;
  font-size: ${themes.primary.font.size.secondary};

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }
`;

export const WhoNeedSubText = styled.p`
  margin-top: 2.2em;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
`;
export const WhoNeedAppsBlocks = styled.div`
  margin-top: 32em;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.minPC} {
    margin-top: 25em;
  }

  @media ${themes.primary.media.maxServiceMobile} {
    margin-top: 15em;
  }
`;

export const WhoNeedAppsWrapper = styled.div`
  width: 37%;
  @media ${themes.primary.media.minPC} {
    width: 40%;
  }
`;
