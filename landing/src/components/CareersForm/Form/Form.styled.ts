import styled, { keyframes } from "styled-components";
import { FormikProvider, Field } from "formik";
import themes from "../../../utils/themes";
import Lottie from "lottie-react";

interface ICVProps {
  active: boolean;
}

const opacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
export const Form = styled.form`
  flex-basis: 38%;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 40%;
  }
  @media ${themes.primary.media.maxTablet} {
    width: 100%;
  }
`;

export const LottieButton = styled(Lottie)`
  position: relative;
  & svg {
    position: absolute;
    width: 80rem !important;
    height: 25rem !important;
    top: -13rem;
    left: -30rem;
    box-sizing: border-box;
  }

  @media ${themes.primary.media.maxLaptop} {
    & svg {
      width: 37rem !important;
      height: 30rem !important;
      top: -16.4rem;
      left: -18.2rem;
    }
  }
`;
export const LottieWrapper = styled.div`
  @media ${themes.primary.media.maxLaptop} {
    margin-top: 2.188rem;
  }
`;

export const SubmitButton = styled.div`
  width: 100%;
  text-align: center;
`;

export const BottomText = styled.p`
  line-height: 1.625rem;
  font-family: ${themes.primary.font.family.gilroy};
  font-style: normal;
`;
export const FormProvider = styled(FormikProvider)``;

export const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.188rem;
  margin-bottom: 0;
  height: 2.8em;
  @media ${themes.primary.media.maxLaptop} {
    height: auto;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    align-items: center;
  }
  @media ${themes.primary.media.maxTablet} {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
  @media ${themes.primary.media.minTablet} {
    flex-direction: column;
    align-items: center;
  }
  @media ${themes.primary.media.maxLaptop} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FileLoad = styled.p`
  animation: ${opacity} 2.5s forwards;
`;

export const FileInputWrapper = styled.div<ICVProps>`
  position: relative;
  text-align: center;
  height: 2.8em;
  font-size: 0.75em;
  color: #bdbdbd;
  display: ${({ active }) => (active ? "none;" : "block;")};
  line-height: 1.7;
  background: none;
  animation: ${opacity} 2s;
  width: 20.375rem;
  padding: 1.438rem 2.75rem;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
`;

export const InputFile = styled(Field)`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const InputFileLabel = styled.label`
  width: 100%;
  color: black;
  font-size: ${themes.primary.font.size.buttonText};
  font-weight: ${themes.primary.font.weight.light};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  position: absolute;
  top: 9px;
  align-items: center;
`;

export const FileButton = styled.span`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const FileText = styled.span`
  line-height: 1;
  margin-top: 1px;
  margin-left: 5px;
  color: #3c95f9;
  font-weight: ${themes.primary.font.weight.extraBold};
`;

export const FileImg = styled.img`
  margin-top: 4px;
`;

export const SentMessage = styled.div`
  transform: translateY(2rem);
  font-weight: ${themes.primary.font.weight.bold};
  color: ${themes.primary.colors.lightBlue};
  @media ${themes.primary.media.maxLaptop} {
    transform: none;
  }
`;
