import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    & > div {
      flex-direction: row-reverse;
      margin-bottom: 1em;
      & > div:first-child,
      & ul {
        align-items: flex-start;
      }
    }
  }
`;
export const TechnoContainer = styled('div')`
  display: flex;
  width: 47%;
  justify-content: space-between;
  flex-direction: row-reverse;
  @media screen and (min-width: 769px) {
    &:nth-child(3n - 3),
    &:nth-child(4n - 4) {
      flex-direction: row;
      margin-top: 2em;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  & > div:last-child {
    width: 60%;
    & > img {
      width: 78%;
      height: 92%;
    }
  }
  & > div:first-child {
    width: 33%;
  }
`;
export const DescContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & li {
    opacity: 0.5;
  }
  & > ul {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
export const HorizontalSep = styled('div')`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin: 2em 0 !important;
`;
