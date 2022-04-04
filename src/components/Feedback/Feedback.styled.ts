import styled from 'styled-components';
import themes from '../../utils/themes';
export const Navigationwrapper = styled.div`
position: relative;
bottom: 47%;
  & svg {
    position: absolute;
  }
  & div :nth-child(1){
    left: 75%;
    margin-right: 15%;
  }
  & div :nth-child(2){
    right: 15%
  }
  & svg {
    position: absolute;
  }
  & div :after {
    content: none
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: 37%;
  }
  @media ${themes.primary.media.maxTabletPortrait}{
    bottom: 27%;
    & div :nth-child(1){
      left: 69%
    }
    @media ${themes.primary.media.maxTablet}{
      bottom: 47%;
     
  }
  @media ${themes.primary.media.minTablet} {
    & div :nth-child(1){
      left: 57%
    }
  }
`;
