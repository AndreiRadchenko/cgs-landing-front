import styled from 'styled-components';
export const Wrapper = styled('div')`
  @media screen and (max-width: 1024px) {
    & article:first-child h2 + div {
      display: none;
    }
    & article:first-child h2 {
      margin: 0;
    }
    & .articleButton a {
      margin: 0 auto;
    }

    & .articleButton a {
      margin-bottom: 0;
      display: inline-block;
      text-align: center;
    }
  }
`;

export const ArticleWrapper = styled('div')`
  max-width:800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  margin: 0;
  &  img {
    width:100% !important;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 32px 30px;
  }
  & img {
    width: 100%;
    display: inline-block;
    margin: 52px 0 60px;

    @media screen and (max-width: 1024px) {
      margin: 50px 0 00px;
    }
  }
  & .article__author,
  .article__date {
    opacity: 0.5;
    @media screen and (max-width: 1024px) {
      display: none;
    }
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

export const TagList = styled('ul')`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 300;
  padding: 0 3em;

  & li {
    padding: 1px 15px;
    border-radius: 5px;
    color: #fff;
  }
  & li:not(:last-child) {
    margin-right: 18px;
  }
`;
