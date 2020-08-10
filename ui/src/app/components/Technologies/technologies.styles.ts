import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const TechnoContainer = styled('div')`
  display: flex;
  width: 47%;
  justify-content: space-between;
  & > div {
    width: 49%;
    & > img {
      width: 100%;
      height: 100%;
    }
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
