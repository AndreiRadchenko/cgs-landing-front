import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  margin-top: 7.5em;
  margin-bottom: 13.6em;
  padding: 0 4.25em;
  width: 100vw;
  height: 14em;
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
  padding: 5px 0 5px 1.276em;
  font-size: 3.33em;
  line-height: 1.4;
  text-transform: uppercase;
  /* background-color: #f1efed; */
  background: linear-gradient(
    353.75deg,
    rgb(236, 234, 232) -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    rgb(236, 234, 232) 127.64%
  );
  border-right: 1px solid #8f8e93;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 30px;
    width: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    display: none;
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
  top: 15px;
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
