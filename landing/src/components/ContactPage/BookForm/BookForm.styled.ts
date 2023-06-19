import styled from "styled-components";
import { Field } from "formik";
import themes from "../../../utils/themes";

export const FormMobileAlign = styled.div`
  @media ${themes.primary.media.maxServiceWeb} {
    display: flex;
    justify-content: center;
    align-items: center;
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
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const FormFieldLabel = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.33em;
  line-height: 1.1875;
  color: ${themes.primary.colors.black};

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
      background: ${themes.primary.colors.blogBackground};
    }

    .flag-dropdown {
      border: 0;
      border-right: 1px solid ${themes.primary.colors.inputGrey};
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
      /* font-size: 16px; */

      font-family: ${themes.primary.font.family.namu};
      background: ${themes.primary.colors.blogBackground};

      &::placeholder {
        color: ${themes.primary.colors.comment};
      }

      @media ${themes.primary.media.maxMobile} {
        font-size: 16px;
      }

      @media ${themes.primary.media.minMobile} {
        padding-left: 55px;
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

export const FormField = styled(Field)`
  height: 76px;
  width: 100%;
  background: none;
  border: none;
  border: 1px solid ${themes.primary.colors.inputGrey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.33em;
  line-height: 1.1875;
  color: ${themes.primary.colors.black};
  padding-left: 12px;
  border-radius: 0;

  &::placeholder {
    color: ${themes.primary.colors.comment};
  }

  &:focus {
    outline: none;
  }
  &.formikErrors {
    border: 1px solid ${themes.primary.colors.adminRed};
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

  @media ${themes.primary.media.maxServiceWeb} {
  }
`;

export const FormSentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  height: 102px;
  padding: 0;
  margin: 0 0 0 7px;

  @media ${themes.primary.media.maxPCFullHD} {
    height: 73px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: 2px;
    margin-left: -2px;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
`;
