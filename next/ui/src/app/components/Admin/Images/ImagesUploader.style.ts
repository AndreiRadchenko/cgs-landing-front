import styled from "styled-components";
export const Wrapper = styled("div")`
  margin: 20px 0 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputWrapper = styled("div")`
  height: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  & input {
    display: none;
  }
  & label {
    width: 170px;
    max-height: 40px;
    border-radius: 55px;
    border: 0;
    font-weight: bold;
    font-size: 18px;
    line-height: 40px;
    color: #1f5a7b;
    cursor: pointer;
    border: 2px solid #1f5a7b;
    margin-right: 35px;
    padding: 16px 23px;
    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
    @media screen and (max-width: 500px) {
      font-size: 14px;
      padding: 3px 15px;
    }
  }
`;

export const ButtonWrapper = styled("div")`
  @media screen and (max-width: 500px) {
    & button {
      width: 130px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
