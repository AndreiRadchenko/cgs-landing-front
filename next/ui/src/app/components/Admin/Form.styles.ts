import styled from "styled-components";
import { PropsFormWrapper } from "types/components/index";

export const Wrapper = styled("div")``;

export const Form = styled("form")`
  width: 100%;
  max-width: 760px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: #1f5a7b;
  & > h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 56px;
    margin-bottom: 40px;
  }
  & > label {
    text-align: center;
    margin: 0 0 15px;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
  & .form__text,
  .form__input {
    width: 100%;
    padding: 14px 36px;
  }
  & .form__text {
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
  max-width: 635px;
  width: 100%;
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  outline: none;
`;

export const AdminTextArea = styled("textarea")`
  flex-grow: 1;
  border: 2px solid #1f5a7b;
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 635px;
  width: 100%;
  padding: 14px 36px;
  min-height: 130px;
  resize: none;
  color: #1f5a7b;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  padding: 14px 36px;
  outline: none;
`;

export const Select = styled("select")`
  border: 2px solid #1f5a7b;
  color: #1f5a7b;
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 635px;
  width: 100%;
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
`;

export const Content = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    white-space: nowrap;
    text-align: start;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
  }

  & div {
    width: 635px;
    border: 2px solid #1f5a7b;
    border-radius: 20px;
    max-width: 635px;
    padding: 14px 36px;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    text-align: justify;
    margin: 0 5px 0 0;
  }
`;

export const Label = styled("label")<PropsFormWrapper>`
  display: ${(props) => (props.double ? "flex" : "grid")};
  grid-template-columns: minmax(50px, 120px) 1fr;
  align-items: center;
  & > span {
    text-align: start;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    flex-basis: ${(props) => (props.double ? "180px" : "")};
    flex-shrink: ${(props) => (props.double ? "1" : "")};
  }
  & > input:nth-child(3) {
    flex-basis: 170px;
    margin-left: 20px;
  }
`;

export const CheckboxContainer = styled("div")`
  position: relative;
  margin-top: 28px;
  align-self: flex-start;
  width: 80px;
  justify-content: space-between;
  &:last-child {
    padding-right: 0;
  }

  & > div {
    margin-right: 30px;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;

    max-width: 50px;
    word-wrap: break-word;
    position: relative;
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

export const CustomCheckbox = styled("div")<PropsFormWrapper>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #1f5a7b;
  background-color: ${(props) => (props.selected ? "#1f5a7b" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${(props) => (props.sliderLabel ? "" : "20%")};
  right: ${(props) => (props.sliderLabel ? "5px" : "")};
  bottom: ${(props) => (props.sliderLabel ? "-3px" : "")};
  position: absolute;
`;

export const CheckboxLabel = styled("label")<PropsFormWrapper>`
  position: relative;
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

export const DeleteTagButton = styled("button")<PropsFormWrapper>`
  background-color: transparent;
  border: 0;
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ButtonWrapper = styled("div")`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 115px;
  margin-bottom: 15px;
`;

export const Button = styled("button")<PropsFormWrapper>`
  &:disabled {
    background-color: #a7c4d4;
  }

  width: ${(props) => (props.big ? "200px" : "170px")};
  max-height: ${(props) => (props.big ? "60px" : "40px")};
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

export const Row = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: -10px;
`;

export const PicturesWrapper = styled("div")`
  display: flex;
  margin-top: 28px;
  max-width: 760px;
  width: 100%;
  min-height: 135px;

  & > span {
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const WrapperContainer = styled("div")`
  display: flex;
  & span {
    margin-top: 28px;
    white-space: nowrap;
    text-align: start;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    align-self: flex-start;
  }
`;

export const TagInputWrapper = styled("div")`
  margin-top: 30px;
  display: flex;
  gap: 40px;
  align-items: center;
  & span {
    white-space: nowrap;
    text-align: start;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    margin-right: 20px;
  }
`;

export const BlogTextWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: -10px;
  min-height: 120px;
  width: 95%;
  white-space: normal;
  word-wrap: break-word;
  margin-left: 100px;
  padding-right: 30px;
  grid-column-gap: 130px;
  text-align: left;
`;
