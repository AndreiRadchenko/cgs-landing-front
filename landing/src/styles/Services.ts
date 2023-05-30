import styled, { css } from "styled-components";
import themes from "../utils/themes";

export const Container = styled.section`
  margin-top: 29px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0px;
  }
`;

export const ContentLayout = styled.div`
  border-top: 1px;
`;
