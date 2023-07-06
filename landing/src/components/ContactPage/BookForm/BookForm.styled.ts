import styled from "styled-components";
import { Field } from "formik";
import TextField from "@mui/material/TextField";
import themes from "../../../utils/themes";

export const FormMobileAlign = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FormFieldLabel = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.33em;
  line-height: 1.1875;
  color: ${themes.primary.colors.black};
  & p {
    margin: 0;
    padding: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
  span {
    color: ${themes.primary.colors.comment};
  }
`;

export const FormFieldContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 447px;
  height: 102px;

  @media ${themes.primary.media.maxPCFullHD} {
    width: 318px;
    height: 73px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    width: 335px;
    height: 73px;
    flex-direction: column;
  }

  .react-tel-input {
    box-sizing: border-box;
    height: 76px;
    width: 100%;
    background: none;
    border: 1px solid ${themes.primary.colors.inputGrey};
    font-family: ${themes.primary.font.family.namu};
    font-size: 1.33em;
    line-height: 1.1875;
    color: ${themes.primary.colors.black};
    border-radius: 0;

    @media ${themes.primary.media.maxPCFullHD} {
      height: 54px;
    }

    .form-control {
      font-size: inherit;
      line-height: 1.1875;
      border-radius: 0;
    }

    .form-control:focus {
      box-shadow: none;
    }

    .special-label {
      color: ${themes.primary.colors.comment};
      background-color: ${themes.primary.colors.blogBackground};
      top: 15px;
      left: 55px;
      pointer-events: none;
      font-size: 16px;
      transition: transform 200ms ease 0ms;
      @media ${themes.primary.media.minPCFullHD} {
        font-size: 1.33em;
        top: 18px;
        left: 70px;
      }
    }

    &:focus-within .special-label,
    &.filled .special-label {
      transform: translate(-70px, -27px) scale(0.75);
      @media ${themes.primary.media.minPCFullHD} {
        transform: translate(-100px, -39px) scale(0.75);
      }
    }

    &::placeholder {
      color: ${themes.primary.colors.comment};
    }

    &:focus {
      outline: none;
    }
    &.formikErrors {
      border: 1px solid ${themes.primary.colors.adminRed};
    }

    .flag-dropdown,
    .selected-flag,
    .flag-dropdown.open .selected-flag {
    }

    .flag-dropdown {
      border: 0;
    }

    .selected-flag {
      @media ${themes.primary.media.minMobile} {
        width: 45px;
      }

      .flag {
        @media ${themes.primary.media.minMobile} {
          scale: 1.2;
        }
        @media ${themes.primary.media.minPCFullHD} {
          scale: 1.7;
        }
      }
    }

    .form-control {
      height: 100%;
      width: 100%;
      border: none;

      font-family: ${themes.primary.font.family.namu};
      background: ${themes.primary.colors.blogBackground};

      &::placeholder {
        color: ${themes.primary.colors.comment};
      }

      @media ${themes.primary.media.maxMobile} {
        font-size: 16px;
      }

      @media ${themes.primary.media.minMobile} {
        padding-left: 65px;
      }
      @media ${themes.primary.media.minPCFullHD} {
        padding-left: 75px;
      }
    }
    .country-list {
      background: ${themes.primary.colors.blogBackground};
      width: 280px;

      .search {
        background-color: ${themes.primary.colors.blogBackground};
        padding: 10px 14px 10px 0;

        .search-box {
          width: 100%;
          background-color: ${themes.primary.colors.blogBackground};
          font-size: 16px;
          font-family: ${themes.primary.font.family.namu};
          border: 1px solid ${themes.primary.colors.inputGrey};

          &::placeholder {
            color: ${themes.primary.colors.comment};
          }

          @media ${themes.primary.media.estiomationFormWidth} {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const FormField = styled(TextField)`
  height: 76px;
  width: 100%;
  background: none;
  border: none;
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.33em;
  line-height: 1.1875;
  color: ${themes.primary.colors.black};
  border-radius: 0;

  .MuiInputBase-root.MuiOutlinedInput-root {
    height: 76px;
    display: flex;
    align-items: center;
    @media ${themes.primary.media.maxPCFullHD} {
      height: 54px;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${themes.primary.colors.inputGrey};
    border-radius: 0;
    width: 100%;
  }

  .MuiInputBase-input.MuiOutlinedInput-input {
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 1.33em;
    }
  }

  label {
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 1.33em;
    }
  }

  &.formikErrors .MuiOutlinedInput-notchedOutline,
  &.formikErrors
    .MuiInputBase-root.MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline,
  &.formikErrors
    .MuiInputBase-root.MuiOutlinedInput-root:focus-within
    .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${themes.primary.colors.adminRed};
  }

  .MuiOutlinedInput-notchedOutline > legend {
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 1.33em;
    }
  }

  .MuiInputBase-root.MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline,
  .MuiInputBase-root.MuiOutlinedInput-root:focus-within
    .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${themes.primary.colors.inputGrey};
  }

  .MuiFormLabel-root.MuiInputLabel-root {
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 1.33em;
    }
  }

  .MuiFormLabel-root.MuiInputLabel-root.Mui-focused,
  .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-shrink {
    @media ${themes.primary.media.minPCFullHD} {
      transform: translate(14px, -16px) scale(0.75);
    }
  }

  .MuiInputLabel-root {
    color: ${themes.primary.colors.darkGrey};
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${themes.primary.colors.darkGrey};
  }

  &::placeholder {
    color: ${themes.primary.colors.comment};
  }

  @media ${themes.primary.media.maxPCFullHD} {
    height: 54px;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const ErrorField = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 1em;
  line-height: 1.6;
  color: ${themes.primary.colors.adminRed};
  line-height: 19px;
  text-align: right;
  font-weight: ${themes.primary.font.weight.heavy};
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(3) {
    margin-right: 9px;
    @media ${themes.primary.media.maxTabletLandScape} {
      margin-right: 0px;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 26px;
  align-items: flex-end;
  gap: 20px;

  @media (${themes.primary.media.maxLaptop}) {
    gap: 14px;
  }

  @media (${themes.primary.media.maxServiceWeb}) {
    flex-wrap: wrap;
  }

  @media (${themes.primary.media.maxMobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  @media (${themes.primary.media.maxLaptop}) {
    gap: 14px;
  }

  @media (${themes.primary.media.maxServiceWeb}) {
    flex-wrap: wrap;
  }

  @media (${themes.primary.media.maxMobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const FormSentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  height: 102px;
  padding: 0;
  margin: 0 0 0 -2px;

  @media ${themes.primary.media.maxPCFullHD} {
    height: 73px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2px;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
`;
