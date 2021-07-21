import styled from "styled-components";

export const Icon = styled("img")`
  width: 32.42px;
  max-height: 40px;
`;

export const Name = styled("span")`
  font-size: 16px;
  font-weight: 400;
  
  
  @media screen and (max-width: 1308px) {
    white-space: nowrap;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Container = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 12px;
  width: 120px;
  @media screen and (min-width: 1308px) {
    white-space: nowrap;
    width: fit-content;
  }

  @media screen and (max-width: 1023.5px) {
    width: auto;
  }
  
  & > ${Icon} {
    margin-right: 5px;
  }
`;
