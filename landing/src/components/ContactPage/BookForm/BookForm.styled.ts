import styled from "styled-components";
import TextField from "@mui/material/TextField";
import themes from "../../../utils/themes";

export const FormMobileAlign = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FormFieldContainer = styled.div`
  position: relative;
  width: 424px;

  @media (max-width: 1799px) {
    width: 318px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    width: 335px;
    height: 75px;
    margin-bottom: 5px;
    flex-direction: column;
  }

  @media (max-width: 790px) {
    width: 100%;
    margin-bottom: 3px;
    height: 71px;
  }

  @media (max-width: 475px) {
    margin-bottom: 7px;
  }

  .react-tel-input {
    box-sizing: border-box;
    height: 72px;
    width: 100%;
    background: none;
    border: 1px solid ${themes.primary.colors.inputGrey};
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    font-size: 1.33em;
    line-height: 1.1875;
    color: ${themes.primary.colors.black};
    border-radius: 0;

    @media (max-width: 1799px) {
      height: 54px;
    }

    .form-control {
      font-size: inherit;
      line-height: 1.1875;
      border-radius: 0;
      font-family: ${themes.primary.font.family.namu};
      font-weight: 900;
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
      transform-origin: center left;

      @media ${themes.primary.media.minPCFullHD} {
        font-size: 20px;
        top: 23px;
        left: 85px;
      }
    }

    &:focus-within .special-label,
    &.filled .special-label {
      z-index: 20;
      transform: translate(-45px, -27px) scale(0.75);
      @media ${themes.primary.media.minPCFullHD} {
        transform: translate(-60px, -37px) scale(0.75);
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
      background-color: ${themes.primary.colors.blogBackground};
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
      @media ${themes.primary.media.minPCFullHD} {
        width: 363px;
        font-size: 20px;

        & .search > input {
          font-size: 20px;
        }
      }
    }

    @media ${themes.primary.media.minPCFullHD} {
      padding-left: 18.3px;
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
    height: 72px;
    display: flex;
    align-items: center;

    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;

    @media (max-width: 1799px) {
      height: 54px;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: flex;
    align-items: center;
    border: 1px solid ${themes.primary.colors.inputGrey};
    border-radius: 0;
    width: 100%;
  }

  .MuiInputBase-input.MuiOutlinedInput-input {
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 1.45em;
      padding: inherit 18.67px;
    }
  }

  label {
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 1.2em;
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
      margin-top: 4px;
      margin-left: 4px;
      font-size: 20px;
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

  @media (max-width: 1799px) {
    height: 54px;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const ErrorField = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  line-height: 1.6;
  color: ${themes.primary.colors.adminRed};
  line-height: 19px;
  text-align: right;
  font-weight: ${themes.primary.font.weight.heavy};
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 16px;
  }
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(3) {
    margin-right: 9px;

    @media ${themes.primary.media.maxPCFullHD} {
      margin-right: 7px;
    }

    @media ${themes.primary.media.maxTabletLandScape} {
      margin-right: 0px;
      margin-bottom: 12px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin-bottom: 32px;
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      margin-bottom: 12px;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
  }

  @media (max-width: 790px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 60px;
  margin-left: 1.5px;
  align-items: flex-start;
  gap: 17px;
  height: 95px;

  @media ${themes.primary.media.maxPCFullHD} {
    margin-top: 48px;
    height: 73px;
    gap: 20px;
  }

  @media ${themes.primary.media.maxLaptop} {
    gap: 14px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    flex-wrap: wrap;
    height: auto;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 43px;
    gap: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 24px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media ${themes.primary.media.maxLaptop} {
    gap: 14px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    flex-wrap: wrap;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 0;
  }
`;

export const FormSentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  /* height: 102px; */
  padding: 0;
  margin-left: -2px;

  @media (max-width: 1799px) {
    /* height: 73px; */
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
