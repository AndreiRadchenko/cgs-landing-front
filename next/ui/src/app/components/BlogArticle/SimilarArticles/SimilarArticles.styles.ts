import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  margin: 0;
  & ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const SimilarArticle = styled('li')`
  width: calc((100% - 120px) / 2);

  & img {
    width: 100%;
    display: inline-block;
    margin-bottom: 2em;
  }
  & h2 {
    margin: 0 0 29px;
    font-size: 22px;
  }
  & p {
    margin: 0;
    line-height: 1.67;
  }
`;
