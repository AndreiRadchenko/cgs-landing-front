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
  padding: 10px;
  min-height: 50px;
  min-width: 118px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;
