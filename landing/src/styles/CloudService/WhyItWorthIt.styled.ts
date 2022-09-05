import styled from "styled-components";

export const Container = styled.div`
  margin: 0 1.95em 0 0;
`;

export const BlockWrapper = styled.div`
  margin-top: 4.67em;
  padding-top: 2em;
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  max-width: 33.2em;
  position: relative;
  &:first-child {
    padding-left: 1.25em;

    & > div {
      min-width: 22.5em;
    }
    & > img {
      top: 14.83em;
      left: 17.67em;
    }
  }

  &:nth-child(2) {
    padding-left: 0.063rem;

    & > img {
      top: 3.83em;
      left: 22.3em;
    }
    & > div:first-child {
      margin-top: 11.7em;
    }
  }
  :not(:last-child) {
    & > div {
      max-width: 19.5em;
    }
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  margin: 0;
  margin-left: 2.42em;
  font-size: 24px;
  line-height: 160%;
`;

export const BlockText = styled.div`
  font-size: 18px;
  line-height: 160%;
  margin: 1.28em 0 0 0;
  max-width: 21.95em;

  & > p {
    margin: 0;
  }
`;

export const Svg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-50%);
`;

export const Image = styled.img`
  position: absolute;
`;
