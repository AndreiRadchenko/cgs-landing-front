import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  margin: 0;

  & img {
    width: 100%;
    display: inline-block;
    margin-bottom: 60px;
  }
  & .article__author,
  .article__date {
    opacity: 0.5;
  }
`;

export const Content = styled('p')`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.66;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    opacity: 0.5;
  }
`;
