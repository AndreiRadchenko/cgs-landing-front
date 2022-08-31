import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight.heavy};
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: inherit;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;
`;

export const BlockWrapper = styled.div`
  margin-top: 3.56em;
  position: relative;

  & p {
    font-size: ${themes.primary.font.size.oneAndHalf};
    line-height: 160%;
  }
`;

export const TopSteps = styled.div`
  display: grid;
  grid-template-columns: 5.37fr 5.71fr 1fr;
  margin-left: 5px;
`;

export const BottomSteps = styled.div`
  display: grid;
  grid-template-columns: 1.46fr 1fr;
  margin-left: 18.125em;
`;

export const StyledLine = styled.div`
  width: 102vw;
  height: 1.5em;
  position: absolute;
  top: 4.125em;
  left: -5%;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
`;
