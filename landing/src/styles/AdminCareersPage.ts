import styled from "styled-components";
import themes from "../utils/themes";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const CareersContainer = styled.div`
  width: 90em;
  margin-top: 20px;
`;

export const SubTitle = styled.h3`
  font-size: 1.4rem;
  line-height: 26px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
  &.info {
    margin-top: 70px;
    color: ${themes.primary.colors.headerBorder};
  }
`;

export const VacancyInput = styled.input`
  display: block;
  width: 100%;
  padding: 19px 14px;
  border: 1px solid grey;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
  margin-bottom: 15px;
`;

export const AboutWork = styled.div`
  display: flex;
`;

export const Location = styled.div`
  width: 34.2%;
`;

export const TypeOfWork = styled.div`
  width: 34.2%;
  margin-left: 15px;
`;

export const TicketsButton = styled.button`
  width: 100%;
  font-family: ${themes.primary.font.family.namu};
  background: ${themes.primary.colors.primary};
  border: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  line-height: 18px;
  padding: 20px 50px;
  cursor: pointer;
`;

export const TicketsButtonContainer = styled.div`
  height: 58px;
  width: 226px;
  position: relative;
  margin-top: 30px;
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
`;

export const ContactFormContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 19px 14px;
  border: 1px solid grey;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const CvInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 19px 14px;
  border: 1px solid grey;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`;

export const TicketChange = styled.div`
  width: 100%;
`;

export const TicketEditAndDeleteButtons = styled.div`
  position: absolute;
  left: 103em;
  z-index: 10;
  margin-top: 16em;
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  @media (max-width: 2560px) {
    left: 113em;
    margin-top: 10em;
  }

  @media (max-width: 2400px) {
    left: 110em;
  }

  @media (max-width: 2125px) {
    left: 108em;
  }

  @media (max-width: 1920px) {
    left: 106em;
  }

  @media (max-width: 1850px) {
    left: 103em;
  }

  @media (max-width: 1800px) {
    margin-top: 12em;
    left: 106em;
  }

  @media (max-width: 1620px) {
    left: 103em;
  }

  @media (max-width: 1560px) {
    left: 101.5em;
    margin-top: 12em;
  }

  @media (max-width: 1500px) {
    left: 103em;
    margin-top: 13em;
  }

  @media (max-width: 1440px) {
    left: 103em;
    margin-top: 14em;
  }

  @media (max-width: 1200px) {
    left: 104.5em;
  }
`;

export const DeleteBtn = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  color: red;
  font-weight: ${themes.primary.font.weight.medium};
  font-size: 16px;
  line-height: 19px;
`;

export const TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${themes.primary.font.family.namu};
`;
