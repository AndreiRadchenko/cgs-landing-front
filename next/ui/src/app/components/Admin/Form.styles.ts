import styled from "styled-components";
import { PropsFormWrapper } from "types/components/index";

export const Wrapper = styled("div")``;

export const Form = styled("form")`
  width: 100%;
  max-width: 782px;
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
  margin-left: 20px;
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
  margin-left: 20px;
`;

export const RatingInputContainer = styled("div")`
  display: flex;

  & > ${AdminTextInput}:nth-child(2) {
    max-width: 100px;
  }
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
  margin-left: 20px;
  appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='rgb(196, 196, 196)' height='60' viewBox='0 0 24 24' width='60' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0px;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const Content = styled("div")`
  border: 2px solid #1f5a7b;
  border-radius: 20px;
  max-width: 655px;
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  text-align: justify;
  margin: 0 5px 0 0;

  & img {
    width: 100%;
  }
`;

export const ContentWrapper = styled("div")`
  width: 100%;

  & > ${Content} {
    max-height: 400px;
    overflow-y: auto;
    margin-left: 20px;
  }
`;

export const Label = styled("label")<PropsFormWrapper>`
  display: ${(props) => (props.double ? "flex" : "grid")};
  grid-template-columns: minmax(50px, 130px) 1fr;
  align-items: center;
  & > span {
    text-align: end;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    flex-basis: ${(props) => (props.double ? "180px" : "")};
    flex-shrink: ${(props) => (props.double ? "1" : "")};
  }

  & a {
    margin-left: 20px;
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
  text-align: left;

  & label {
    position: absolute !important;
    right: -5px;
    top: 0;
    transform: translateY(5px);
  }

  &:last-child {
    padding-right: 0;
  }

  & > div {
    margin-right: 30px;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    max-width: 70px;
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

export const SingleCheckboxContainer = styled("div")`
  margin-left: 20px;
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
    position: ${(props) => props.position ?? "absolute"};
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
  gap: 100px;
  margin-bottom: 60px;
`;

export const Button = styled("button")<PropsFormWrapper>`
  &:disabled {
    background-color: #a7c4d4;
  }

  width: ${(props) => (props.big ? "200px" : "170px")};
  height: ${(props) => (props.big ? "58.33px" : "40px")};
  border-radius: 55px;
  border: 0;
  background: ${(props) => (props.empty ? "" : "#1f5a7b")};
  font-weight: bold;
  font-size: 18px;
  line-height: 40px;
  color: ${(props) => (props.empty ? "#1F5A7B" : "#ffffff")};
  cursor: pointer;
  border: ${(props) => (props.empty ? "2px solid #1F5A7B" : "none")};
  margin-top: 10px;
  margin-left: 10px;
`;

export const WrapperGrid = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const Row = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: -10px;
  justify-items: center;
  width: 635px;
  grid-column-gap: 120px;
`;

export const PicturesWrapper = styled("div")`
  display: flex;
  max-width: 760px;
  width: 100%;
  min-height: 135px;

  & > span {
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    margin-left: 53px;
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
    margin-left: 70px;
  }
`;

export const TagInputWrapper = styled("div")`
  display: flex;
  align-items: baseline;

  & span {
    white-space: nowrap;
    text-align: start;
    color: #0c1033;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    margin-left: 50px;
    margin-right: 10px;
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
  margin-left: 40px;
  padding-right: 30px;
  grid-column-gap: 160px;
  text-align: left;
`;
