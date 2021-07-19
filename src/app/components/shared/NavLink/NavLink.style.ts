import styled from "styled-components";

export const Item = styled("div")`
  cursor: pointer;
  min-width: max-content;
  background-color: #1f5a7b;
  min-height: 50px;
  min-width: 118px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  @media screen and (min-width: 1024px) and (max-width: 1149px) {
    font-size: 20px;   
  }
  & a {
    display: block;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ActiveItem = styled("div")`
  min-width: max-content;
  background-color: #0c1033;
  min-height: 50px;
  min-width: 85px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  @media screen and (min-width: 1024px) and (max-width: 1149px) {
    font-size: 20px;  
  }
  @media screen and (min-width: 1150px) {
     min-width: 118px;
  }
`;
