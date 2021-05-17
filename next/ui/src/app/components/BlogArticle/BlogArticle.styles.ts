import styled from 'styled-components';
export const Wrapper = styled('div')`
  & .article__author {
    display: none;
  }
`;
export const ArticleWrapper = styled('div')`
  padding: 0 75px;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 60px;
  }
  & a {
    display: flex;
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
    margin: 0;
  }
  & img {
    width: 338px;
    height: 184px;
    object-fit: cover;
  }
  & .article__content {
    width: calc(100% - 378px);
    text-align: left;
  }
  & h2 {
    text-align: left;
  }

  & p {
    text-align: left;
    padding: 0;
  }

  & ul {
    justify-content: flex-start;
    padding: 0;
  }
`;
export const FeaturedArticle = styled('div')`
  align-self: center;
  margin-bottom: 60px;
  & a {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
    margin: 0;
  }
  & img {
    width: 65%;
    display: inline-block;
    margin-bottom: 60px;
  }
`;

export const InnerWrapper = styled('article')`
  display: flex;
`;

export const Title = styled('h2')`
  margin: 0 0 1.55em;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.27;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const Content = styled('p')`
  text-align: center;
  margin-top: 0;
  margin-bottom: 2.11em;
  font-size: 18px;
  font-weight: 300;
  padding: 0 3em;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    opacity: 0.5;
  }
`;

export const TagList = styled('ul')`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
  margin-top: 0;
  font-size: 18px;
  font-weight: 300;
  padding: 0 3em;

  & li {
    padding: 2px 15px;
    border-radius: 5px;
    color: #fff;
  }
  & li:not(:last-child) {
    margin-right: 18px;
  }
`;
export const ArticlePageItem = styled('div')`
  background-color: red;
  margin-top: 33px;

  & .article__author {
    order: 2;
  }
`;
