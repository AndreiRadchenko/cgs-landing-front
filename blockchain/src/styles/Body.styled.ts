import styled from "styled-components";
import themes from "../utils/themes";

export const BodyContainer = styled.section`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const WelcomeBlockWrapper = styled.div`
  color: ${themes.primary.colors.textColor};
  font-family: ${themes.primary.font.family.goldman};
  display: flex;
  justify-content: space-evenly;
  padding: 0 4rem;
  width: 90%;
`;

export const WrapperBgImg = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`;

export const TextBlock = styled.div`
  width: fit-content;
  margin-top: 12rem;
`;

export const Title = styled.h2`
  font-size: ${themes.primary.font.size.bigTitle};
  margin: 0;
`;

export const Subtitle = styled.div`
  font-size: ${themes.primary.font.size.secondary};
`;

export const BottomText = styled.div`
  margin: 1rem 0;
  font-family: ${themes.primary.font.family.montserrat};
  font-weight: ${themes.primary.font.weight.light};
  font-size: ${themes.primary.font.size.oneAndHalf};
`;

export const Bold = styled.span`
  font-weight: ${themes.primary.font.weight.semiBold};
`;
