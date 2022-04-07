import styled from "styled-components";
import { FormikProvider, Field } from "formik";
import themes from "../../../utils/themes";

export const Form = styled.form`
  flex-basis: 35%;
  @media${themes.primary.media.maxTabletLandScape} {
    width: 40%;
  }
  @media${themes.primary.media.maxTablet} {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  background-image: url("/send-button.png");
  width: 100%;
  height: 80px;
  border: none;
  background-color: #f7f7f7;
  cursor: pointer;
  margin: 17px 0 9px 0;
  background-repeat: round;
  @media${themes.primary.media.maxTablet} {
    background-repeat: space;
    background-position: center;
  }
  @media${themes.primary.media.maxLowScreenMobile}{
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    margin-top;
  }
`;

export const BottomText = styled.p`
  line-height: 26px;
  font-family: ${themes.primary.font.family.gilroy};
  font-style: normal;
`;
export const FormProvider = styled(FormikProvider)``;

export const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  @media${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    align-items: center;
  }
  @media${themes.primary.media.maxTablet} {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
  @media${themes.primary.media.minTablet} {
    flex-direction: column;
    align-items: center;
  }
  @media${themes.primary.media.maxLaptop} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FileLoad = styled.p``;

export const FileInputWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 2.8em;
  font-size: 0.75em;
  color: #bdbdbd;

  line-height: 1.7;
  background: none;

  width: 20.375rem;
  padding: 23px 44px;
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
  font-size: 14px;
  font-weight: 500;
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
`;

export const FileImg = styled.img`
  margin-top: 4px;
`;
