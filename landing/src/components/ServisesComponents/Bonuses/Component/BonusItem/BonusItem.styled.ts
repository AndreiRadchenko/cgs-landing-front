import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const Card = styled.li`
  position: sticky;
  margin-bottom: 10px;
  margin: 0 0 10px 30px;
  width: 93%;
  border-bottom: 1px solid #8f8e93;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0 0 10px;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 335px;
    padding: 0;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.83em;
  line-height: 120%;
  margin: 0 0 11px 0;
  transition: color 0.3s ease;
  :hover {
    color: #5869dd;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;

export const CardTitleText = styled.p`
  display: inline-block;
  margin: 0 43px 0 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;

export const CardTitleImage = styled.div`
  width: 36px;
  height: 36px;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;

export const CardText = styled.p`
  font-size: 1.33em;
  line-height: 150%;
  margin: 0 0 10px 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
  }
`;
