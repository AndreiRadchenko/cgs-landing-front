import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 5.5em;
`;

export const ContentLayout = styled.div`
  margin-top: 5.4em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const WorthTitleContainer = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  letter-spacing: 0.05em;
  display: flex;
  column-gap: 11px;
  align-items: center;
  font-weight: ${themes.primary.font.weight.heavy};
  -webkit-text-stroke: 0.2px black;
`;

export const WorthText = styled.p`
  margin-top: 15px;
  line-height: 160%;
  margin-left: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.oneAndHalf};
`;

export const Icon = styled.img`
  display: flex;
  margin-right: 0.3em;
`;

export const BlockImage = styled.img`
  position: absolute;
`;

export const WorthBlock = styled.div`
  position: relative;
  &:nth-child(3) {
    img {
      top: 18%;
      left: -46%;
    }
    p {
      margin-left: 20px;
    }
  }
  &:nth-child(2) {
    margin-top: 12%;
    img {
      left: -80%;
    }
    p {
      margin-left: 20px;
    }
  }
`;
