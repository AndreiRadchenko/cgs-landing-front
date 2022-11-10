import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.div`
  position: relative;
  margin-top: ${themes.primary.font.size.secondary};
  display: flex;
  justify-content: flex-end;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 678px;
  height: 432px;
`;

export const TextWrapper = styled.div`
  width: 55%;
`;

export const Text = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 0;

  &:first-child {
    margin-block: 0.5em 1.625em;
  }
`;

export const LowerContentWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const WhyIsAuditImportantImageWrapper = styled.div`
  position: absolute;
  top: -115%;
  right: 3.125em;
  height: 400px;
  width: 1237px;
`;
