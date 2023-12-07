import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const Card = styled.li`
  font-weight: 900;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 12px 21px 42px;
  width: 17vw;
  border: 1px solid #8f8e93;
  transform: translateY(0);
  transition: border-color 0.3s ease, transform 0.3s ease;
  @media (max-width: 1440px) {
    width: 242px;
  }
  :hover {
    border-color: transparent;
    transform: translateY(-5px);
    @media ${themes.primary.media.maxMobile} {
      transform: translateY(0);
    }
    .background {
      opacity: 1;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    width: 335px;
    padding: 12px 24px 24px;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: auto;
  }
`;

export const ItemBackground = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(214, 255, 187, 0.3) 0%,
    rgba(88, 105, 221, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const CardNumber = styled.p`
  font-style: bold;
  font-weight: 900;
  font-size: 5.166em;
  line-height: 120%;
  margin: 0 0 20px;
  color: #f1efed;
  text-shadow: 7px 2px 0px #000000, 5.3px 2px 0px #000000;
  -webkit-text-stroke: 1px black;
  @media ${themes.primary.media.maxMobile} {
    font-size: 42.5672px;
    line-height: 51px;
    margin: 0 0 16px;
    text-shadow: 4.80597px 1.37313px 0px #000000,
      3.80597px 1.37313px 0px #000000;
    -webkit-text-stroke: 0.687px solid #000000;
  }
`;

export const CardTitle = styled.p`
  font-size: 1.67em;
  line-height: 120%;
  margin: 0 0 18px;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    margin: 0 0 10px;
  }
`;

export const CardText = styled.p`
  font-size: 1.17em;
  line-height: 150%;
  margin: 0;
  transform: translateY(0);
  will-change: transform;
  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
  }
`;
