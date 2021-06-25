import styled from "styled-components";

export const Wrapper = styled("div")`
  display: inherit;

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__input-container > input {
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
  }
`;