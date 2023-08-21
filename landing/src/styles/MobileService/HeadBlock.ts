import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3.15em 0 1.6em 0;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding-top: 1.52em;
    padding-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45.5%;
  margin-top: 4.7em;

  & > a {
    font-size: 1.54em;
    padding: 1.195em 2.805em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-bottom: ${themes.primary.font.size.tertiary};
    margin-top: 0;
  }
`;

export const Telephone = styled.img`
  margin-bottom: 0.2rem;
  margin-right: 2rem;
  width: 36.7em;
  height: 38.1em;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 38%;
    height: 21.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 108%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 2.5em;
    width: 30.6em;
    height: 31.7em;
  }
`;
