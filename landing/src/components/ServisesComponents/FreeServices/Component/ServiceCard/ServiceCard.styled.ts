import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const Card = styled.li`
  font-weight: 900;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 12px 21px 42px;
  width: 242px;
  border: 1px solid #8f8e93;
  transition: border-color 0.3s ease;
  :hover {
    border-color: transparent;
    .background {
      opacity: 1;
    }
    .card-content {
      transform: translateY(-5px);
      @media ${themes.primary.media.maxMobile} {
        transform: translateY(0);
      }
    }
  }
  @media ${themes.primary.media.maxMobile} {
    width: 335px;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: auto;
  }
`;

export const ItemBackground = styled.div`
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
  transform: translateY(0);
  transition: transform 0.3s ease;
`;

export const CardNumber = styled.p`
  font-size: 62px;
  line-height: 74px;
  margin: 0 0 20px;
  letter-spacing: 0.05em;
  color: #f1efed;
  text-shadow: 5.6px 1.4px 0px #000000;
  -webkit-text-stroke: 1.2px black;
  @media ${themes.primary.media.maxMobile} {
    font-size: 42.5672px;
    line-height: 51px;
    text-shadow: 4.0597px 1.07313px 0px #000000;
    -webkit-text-stroke: 0.687px solid #000000;
  }
`;

export const CardTitle = styled.p`
  font-size: 20px;
  line-height: 120%;
  margin: 0 0 18px;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    line-height: 16px;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 16px;
  }
`;
