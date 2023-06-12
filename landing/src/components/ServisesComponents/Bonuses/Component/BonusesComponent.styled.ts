import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  margin-top: 90px;
  margin-bottom: 140px;
  padding: 0 4.25em;
  width: 100vw;
  margin-left: -4.25em;
  display: flex;
  align-items: flex-start;

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    height: 330px;
  }
  @media ${themes.primary.media.maxMobile} {
    height: auto;
    margin-left: -1.925em;
    padding: 0 1.925em;
    margin-bottom: 90px;
  }
`;

export const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-left: -1.276em;
  width: 36.7vw;
  padding: 28.5px 0 28.5px 1.276em;
  font-size: 3.33em;
  line-height: 1.4;
  text-transform: uppercase;
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  border-right: 1px solid #8f8e93;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 30px;
    width: 100%;
    border: none;
  }
`;

export const RelativePositioner = styled.div`
  position: relative;
  width: 65%;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
  }
`;

export const ListsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  @media ${themes.primary.media.maxTabletLandScape} {
    justify-content: flex-start;
  }
  @media ${themes.primary.media.maxMobile} {
    position: static;
    justify-content: center;
  }
`;

export const ServiceList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  list-style: none;
  width: 50%;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    gap: 13px;
    flex-direction: column;
    align-items: center;
  }
`;
