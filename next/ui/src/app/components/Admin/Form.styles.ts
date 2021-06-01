import styled from "styled-components";

interface Props {
  empty?: boolean;
  selected?: boolean;
}

export const Wrapper = styled("div")``;

export const Form = styled("form")`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: #1f5a7b;
  & > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 0 0 15px;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
  & .form__text,
  .form__input {
    width: 70%;
    padding: 5px;
  }
  & .form__text {
    resize: none;
    min-height: 100px;
  }
  & .form__checkbox {
    justify-content: center;
  }
  & .form__checkbox input {
    margin-left: 10px;
  }
  .buttons {
    margin: 20px 0 0;
  }
  .buttons button:not(:last-child) {
    margin-right: 20px;
  }
`;

export const AdminTextInput = styled("input")`
  border: 2px solid #1f5a7b;
  color: #1f5a7b;
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 645px;
  width: 100%;
  padding: 14px 36px;
`;

export const AdminTextArea = styled("textarea")`
  border: 2px solid #1f5a7b;
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 645px;
  width: 100%;
  padding: 14px 36px;
  min-height: 130px;
  resize: none;
  color: #1f5a7b;
`;

export const Label = styled("label")`
  display: flex;
  max-width: 760px;
  width: 100%;
  & > span {
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const CheckboxContainer = styled("div")`
  width: 100%;
  margin-top: 28px;
  & > div {
    margin-right: 100px;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
  }
  display: flex;
  & input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const CheckboxLabel = styled("label")<Props>`
  position: relative;
  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #1f5a7b;
    background-color: ${(props) => (props.selected ? "#1f5a7b" : "")};
    border-radius: 50%;
    position: absolute;
    left: 0;
  }
  & > input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const ButtonWrapper = styled("div")`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 115px;
`;

export const Button = styled("button")<Props>`
  width: 170px;
  max-height: 40px;
  border-radius: 55px;
  border: 0;
  background: ${(props) => (props.empty ? "" : "#1f5a7b")};
  font-weight: bold;
  font-size: 18px;
  line-height: 40px;
  color: ${(props) => (props.empty ? "#1F5A7B" : "#ffffff")};
  cursor: pointer;
  border: ${(props) => (props.empty ? "2px solid #1F5A7B" : "none")};
`;
