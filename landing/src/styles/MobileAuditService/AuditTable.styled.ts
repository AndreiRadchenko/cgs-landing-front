import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  position: relative;
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.25em;
    padding-bottom: 6em;
  }
`;

export const BigTableContainer = styled.div`
  display: flex;
  align-self: normal;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: center;
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  height: 34.625em;
  width: 40.1875em;
  border: 1px solid;
  margin-right: 26px;
  margin-left: 3.1875em;
  //box-shadow: 7px 2px 0px ${themes.primary.colors.black};

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const TableElement = styled.div`
  display: block;
  height: 6.925em;
  width: 100%;
  margin-top: 0.25em;
  z-index: 100;
`;

export const TextContainer = styled.div`
  margin-left: 1em;
  height: 50%;
  width: 75%;
  border-bottom: 3px solid #8f8e93;
`;

export const CrossLine = styled.div`
  width: 80%;
  margin-left: 11%;
  height: 1%;
  border-top: 3px solid #8f8e93;
`;

export const ElementText = styled.p`
  max-width: 90%;
  font-size: 19px;
  margin-left: 5%;
  margin-top: 0.4em;
`;

export const MobileTable = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-bottom: 8em;
    margin-left: 0;
    border: 1px solid;
    box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const FormContainer3D = styled.div`
  height: 34.625em;
  width: 1.1875em;
  border: 1px solid;
  margin-right: 26px;
  margin-left: 40em;
  border: none;
  position: absolute;
  background: black;

  @media ${themes.primary.media.maxMobile} {
    width: 400px;
    display: none;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 361px;
    width: 345px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 300px;
  }
`;

export const TopCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 14px 8px 0;
  border-color: transparent ${themes.primary.colors.grayBack} transparent
    transparent;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 5;
`;

export const BottomCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 5px 13px;
  border-color: transparent transparent ${themes.primary.colors.grayBack}
    transparent;
  position: absolute;
  right: 0;
  bottom: 0;
`;
