import styled from "styled-components";

export const TechnologyContainer = styled.section`
  width: 1400px;
  margin: 0 auto;
  user-select: none;
`;

export const TechnologyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 3em 0 3em auto;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;

  width: 45%;

  &:nth-child(-n + 2) {
    flex-direction: row;
    justify-content: flex-end;

    .descriptionWrapper {
      margin-left: 2em;
    }
  }
  &:nth-child(n + 3) {
    flex-direction: row-reverse;
    justify-content: flex-end;

    .descriptionWrapper {
      margin-right: 2em;
    }
  }
`;

export const CategoryDescriptionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CategoryTechnologiesWrapper = styled.div``;

export const CategoryTitle = styled.h2`
  font-size: 1.8em;
  text-align: center;
`;

export const CategoryLine = styled.div`
  border: 1px solid #000;
  width: 56px;
`;

export const CategoryTechnology = styled.span`
  display: block;
  line-height: 175%;
  font-size: 1.125em;

  &:first-child {
    margin-top: 1em;
  }
`;
