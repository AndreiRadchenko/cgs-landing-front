import styled from "styled-components";
import themes from "../../utils/themes";
import { Field } from "formik";

export const FormField = styled(Field)`
  height: 54px;
  width: 100%;
  background: none;
  border: none;
  border: 1px solid ${themes.primary.colors.inputGrey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
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

  @media ${themes.primary.media.minPCFullHD} {
    height: 84px;
    font-size: 22px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;
    height: 44px;
  }
`;

export const FormFieldLabel = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  color: ${themes.primary.colors.black};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;
  }

  span {
    color: ${themes.primary.colors.comment};
  }
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 78px;
  position: relative;
  padding: 10px 0;
  margin-bottom: 4px;

  @media ${themes.primary.media.minPCFullHD} {
    height: 125px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: 54px;
    padding: 5px 0;
  }

  .react-tel-input {
    height: 54px;
    width: 100%;
    background: none;
    border: 1px solid ${themes.primary.colors.inputGrey};
    font-family: ${themes.primary.font.family.namu};
    font-size: 16px;
    color: ${themes.primary.colors.black};
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

    @media ${themes.primary.media.minPCFullHD} {
      height: 84px;
      font-size: 22px;
    }

    @media ${themes.primary.media.estiomationFormWidth} {
      font-size: 12px;
      height: 44px;
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
      @media ${themes.primary.media.minPCFullHD} {
        width: 75px;
        padding: 0 0 0 20px;
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
      font-size: 16px;
      font-family: ${themes.primary.font.family.namu};
      background: ${themes.primary.colors.blogBackground};

      &::placeholder {
        color: ${themes.primary.colors.comment};
      }

      @media ${themes.primary.media.minPCFullHD} {
        font-size: 22px;
      }

      @media ${themes.primary.media.estiomationFormWidth} {
        font-size: 12px;
      }

      @media ${themes.primary.media.minMobile} {
        padding-left: 55px;
      }
      @media ${themes.primary.media.minPCFullHD} {
        padding-left: 85px;
      }
    }
    .country-list {
      background: ${themes.primary.colors.blogBackground};
      width: 280px;

      @media ${themes.primary.media.minPCFullHD} {
        width: 480px;
        max-height: 300px;
      }

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

          @media ${themes.primary.media.minPCFullHD} {
            font-size: 22px;
          }

          @media ${themes.primary.media.estiomationFormWidth} {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const ErrorField = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  color: ${themes.primary.colors.adminRed};
  line-height: 19px;
  text-align: right;
  font-weight: ${themes.primary.font.weight.heavy};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
  }
`;
