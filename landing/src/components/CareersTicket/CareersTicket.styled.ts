import styled from "styled-components";
import themes from "../../utils/themes";

interface TicketHover {
  isTicketHover: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TicketText = styled.span`
  border-top: 0.5px solid ${themes.primary.colors.lightBlue};
  border-right: 0.5px solid ${themes.primary.colors.lightBlue};
  text-transform: uppercase;
  color: ${themes.primary.colors.lightBlue};
  font-size: ${themes.primary.font.size.quinary};
  padding-top: 0.25rem;
  padding-right: 0.938rem;
  font-weight: ${themes.primary.font.weight.extraBold};
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 0.5rem;
    font-size: ${themes.primary.font.size.hexadecimal};
  }
`;

export const TicketInner = styled.div<TicketHover>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
  position: relative;
  cursor: pointer;
  z-index: 1;
  margin-top: 33px;
  background-color: ${themes.primary.colors.careerBackground};
  padding: 20px 20px 23px 20px;

  &:after {
    display: ${(props) => (props.isTicketHover ? "block" : "none")};
    position: absolute;
    content: "";
    background-color: ${themes.primary.colors.careerBackground};
    width: 8px;
    height: 50%;
    top: 9px;
    right: -12px;
    border: 2px solid #000;
    z-index: 0;
  }

  @media (max-width: 768px) {
    width: 113%;
  }

  @media (max-width: 767px) {
    margin-left: -4em;
    width: 130%;
  }

  @media (max-width: 710px) {
    margin-left: 1.5em;
    width: 107%;
  }

  @media (max-width: 475px) {
    margin-left: 0;
    width: 102%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 107%;
    margin-left: -1em;
    margin-top: 20px;
    padding: 15px 10px;
  }
`;

export const TicketInfo = styled.div``;

export const TicketDescription = styled.div`
  margin-top: 13px;
  font-size: 18px;
  font-family: ${themes.primary.font.family.namu};

  @media (max-width: 475px) {
    width: 110%;
  }

  @media (max-width: 474px) {
    font-size: 14px;
  }
`;

export const TicketAboutWork = styled.div`
  display: flex;
  margin-top: 23px;

  @media (max-width: 496px) {
    width: 130%;
  }

  @media (max-width: 475px) {
    width: 130%;
  }

  @media (max-width: 474px) {
    width: 150%;
  }
`;

export const WorkLocation = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #000;
  font-size: 18px;
  height: 46px;
  font-weight: 900;
  padding: 0px 14px;
  margin-right: 20px;

  p {
    margin: 0;
  }

  @media (max-width: 474px) {
    font-size: 14px;
    height: 41px;
    padding: 0 9.1px;
  }
`;

export const WorkType = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #000;
  font-size: 18px;
  height: 46px;
  font-weight: 900;
  padding: 0px 15px;

  p {
    margin: 0;
  }

  @media (max-width: 474px) {
    font-size: 14px;
    height: 41px;
    padding: 0 9.1px;
  }
`;

export const TicketIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const TicketApplyButton = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;

  & path {
    transition: all 1s ease-in-out;
  }
  & path:nth-child(1) {
    z-index: -1;
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }

    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
  }

  p {
    font-size: 18px;
    margin: 0;
    margin-right: 5px;
    font-family: ${themes.primary.font.family.namu};
  }

  @media (max-width: 475px) {
    p {
      font-size: 14px;
    }
  }
`;

export const Shadow = styled.div<TicketHover>`
  display: ${(props) => (props.isTicketHover ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  box-shadow: 12px 12px 0px #000000;
`;

export const TicketContainer = styled.div`
  width: 90em;
  cursor: pointer;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 70em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 50em;
  }

  @media (max-width: 710px) {
    max-width: none;
    width: 100%;
  }
`;

export const TicketPositionTitle = styled.p<TicketHover>`
  color: ${(props) => (props.isTicketHover ? "#5869DD" : "#000")};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  margin: 0;
  text-overflow: ellipsis;

  @media (min-width: 1300px) {
    &.admin {
      font-size: 30px;
    }
  }

  @media (max-width: 474px) {
    font-size: 18px;
  }
`;
