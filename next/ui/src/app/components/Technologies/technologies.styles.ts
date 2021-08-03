import { TechnoImageParams } from "./../../../types/components/index";
import styled from "styled-components";

export const TechnoContainer = styled("div")`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1023.5px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    & div:last-child {
      order: -1;
    }

    & ul {
      display: flex;
      flex-direction: row;
    }
    & div:last-child {
      height: auto;
    }
    & div:last-child img {
      width: 100%;
      height: 100%;
      @media (max-width: 420px) {
        margin: 0 auto;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    align-items: flex-start;

    & > div:first-child {
      width: 33%;
    }
  }
`;
export const DescContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 18px;
  & li {  
    color: #868799;
    line-height: 1.66;
  }
  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  & h2 {
    margin: 20px 0 0;
    font-size: 36px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 1023.5px) and (max-width: 1060px) {
    & h2 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1023.5px) {
    & > ul li {
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 1200px) {
    & > ul li {
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 1023.5px) {
    align-items: center;
    & > ul {
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }    
    & li:not(:last-child) {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 320px) {
    width: 235px
  }
`;

export const HorizontalSep = styled("div")`
  width: 55px !important;
  height: 2px;
  background: #0c1033;
  border-radius: 5px;
  margin: 2em 0 !important;
  @media screen and (max-width: 1023px) {
    margin: 1em 0 !important;
  }
`;

const paddingsArray = ["30px", "100px", "140px", "140px"];

export const TechnoImage = styled("img")<TechnoImageParams>`
  @media screen and (min-width: 1023.5px) {
    padding-top: ${(props) => paddingsArray[props.number]};
  }

  @media screen and (max-width: 1023.5px) {
    padding-top: 30px;
  }
`;
