import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  margin-top: 140px;
  margin-bottom: 140px;

  @media ${themes.primary.media.maxServiceWeb} {
  }
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  font-size: 40px;
  line-height: 56px;
  text-transform: uppercase;
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
  }
`;