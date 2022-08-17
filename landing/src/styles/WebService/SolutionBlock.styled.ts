import styled from "styled-components";
import solutionBg from "../../../public/WebService/solutionBg.svg";
import themes from "../../utils/themes";

export const Container = styled.div`
  position: relative;
  margin-top: 16.4em;
  padding-bottom: 13%;
  background-image: url(${solutionBg.src});
  background-size: 100% 100%;

  @media (max-width: 1400px) {
    margin-top: 6.4em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 6.4em;
  }
`;

export const LeftSideText = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  line-height: 56px;
  width: 40%;
  white-space: nowrap;
  padding-top: 0.34em;

  @media (max-width: 1400px) {
    padding-top: 2em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 1em;
  }
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

  @media (max-width: 1400px) {
    margin-top: 7em;
    font-size: 1.7em;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.9em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 9.4em;
  }
`;

export const RightSideText = styled.div`
  margin-right: 1em;
  width: 50%;
  & p {
    margin: 1.4em 0;
  }

  svg {
    transform: translate(5px, 5px);
  }

  @media ${themes.primary.media.minPC} {
    width: 53%;
  }
`;
