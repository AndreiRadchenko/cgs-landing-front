import styled from "styled-components";
import themes from "../../utils/themes";

type FreeServicesData = {
  columnsNumber: number;
};

export const FreeServicesContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const FreeServicesTitle = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 40px;
  row-gap: 10px;

  & > p {
    margin-top: 1em;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const FreeServicesData = styled.div<FreeServicesData>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnsNumber}, 1fr);
  column-gap: 14.5px;
  margin: 37px 0 138px;

  & div:first-of-type {
    & div .dashed {
      left: 50%;
      width: 50%;
    }
    & div .arrow {
      display: none;
    }
  }

  & div:last-of-type {
    & div .dashed {
      right: 50%;
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 8px;

    & div:nth-child(2) {
      & div .dashed {
        right: 50%;
        width: 50%;
      }
    }

    & div:nth-child(3) {
      grid-column: 1 / 3;

      & div .arrow {
        left: 17%;
      }

      & div .additionalArrow {
        display: flex;
        right: 19%;
      }

      & .text {
        width: 50%;
      }
    }

    & div:nth-child(4) {
      & div .dashed {
        left: 50%;
        width: 50%;
      }

      & div .arrow {
        display: none;
      }
    }
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  left: -22px;
  bottom: 0;
  margin: auto 0;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  & svg {
    width: 25px;
    height: 25px;
  }
`;

export const AdditionalArrowContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  bottom: 0;
  margin: auto 0;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  & svg {
    width: 25px;
    height: 25px;
  }
`;

export const FreeServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DashedLine = styled.div`
  position: absolute;
  width: 105%;
  top: 50%;
  margin: 2px 0;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    transparent,
    transparent 11px,
    #8f8e93 10px,
    #8f8e93 20px
  );

  @media (max-width: 768px) {
    width: 110%;
  }
`;

export const FreeServicesImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 130px;
  width: 100%;
  position: relative;
  align-items: center;

  & span {
    height: 105px !important;
  }

  & span img {
    transition: all 0.5s ease;
    z-index: 2;

    height: 81px !important;
    width: 81px !important;
    min-height: 0 !important;
  }

  & span img:hover {
    transform: translateY(-10%);
  }

  & .dashed {
    position: absolute;
    top: 50%;
    z-index: 0;
  }

  @media (max-width: 768px) {
    & span img {
      height: 84px !important;
    }
  }
`;

export const FreeServicesText = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 15px;
  max-height: 8em;
  position: relative;
  font-size: 22px;
  line-height: 30.8px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0;
    line-height: 22.4px;
  }
`;
