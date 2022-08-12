import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  position: relative;
  margin-top: 16.4em;
  padding-bottom: 13%;
`;

export const LeftSideText = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  line-height: 56px;
  width: 40%;
`;

export const BgImage = styled.img`
  position: absolute;
  top: -2%;
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 13em;
  line-height: 160%;

  width: 100%;
  font-size: ${themes.primary.font.size.secondary};
  font-weight: ${themes.primary.font.weight.heavy};
`;

export const RightSideText = styled.div`
  margin-right: 1.5em;

  width: 50%;
  & p {
    margin: 1.4em 0;
  }

  svg {
    transform: translate(5px, 5px);
  }
`;
