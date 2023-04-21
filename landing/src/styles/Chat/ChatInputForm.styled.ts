import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import removeAttachButton from "../../../public/removeAttachButton.svg";

export const InputEmailError = styled.p`
  margin: 0;
  font-style: italic;
  color: ${themes.primary.colors.validationErrorText};
`;

const FieldSample = css`
  width: 100%;
  border: 1px solid #d1d1d6;
  border-radius: 16.5px;
  padding: 5px 13px;

  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: 16px;
  line-height: 1.83em;
  color: ${themes.primary.colors.primary};

  background: ${themes.primary.colors.blogBackground};

  ::placeholder {
    font-weight: ${themes.primary.font.weight.normal};
  }

  :focus {
    outline: none;
  }
`;

export const InputField = styled.input`
  height: 33px;
  ${FieldSample}
`;

export const MessageFormWrapper = styled.div`
  min-height: 77px;
  background: rgba(143, 142, 147, 0.07);
  padding: 20px 10px;
  margin: 0 0 0 -15px;
`;

export const ImageButton = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const MessageForm = styled.form`
  display: flex;
  width: 100%;
  align-items: flex-end;
  gap: 5px;

  label {
    padding-bottom: 5px;
  }

  textarea {
    ${FieldSample};
    width: 93%;
    resize: none;
    overflow-y: scroll;
    font-size: 16px;
    line-height: 22px;
    height: 33px;

    @media (min-width: 1024px) {
      ::-webkit-scrollbar {
        width: 0;
      }
  }
`;

export const MessageFormRegister = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  div {
    width: 100%;
  }
`;

export const AttachmentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.83em;
  width: 94%;
  background: ${themes.primary.colors.blogBackground};
  border: 1px solid #d1d1d6;
  border-radius: 16.5px;
  padding: 7px 13px;
  height: 32px;
`;

export const AttachmentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  min-width: 20px;
  padding-inline: 1px;
  font-size: 8px;
  line-height: 8px;

  text-transform: uppercase;
  color: ${themes.primary.colors.secondary};

  border-radius: 5px;
  background-color: ${themes.primary.colors.attachmentIcon};
`;

export const AttachmentName = styled.p`
  font-family: ${themes.primary.font.family.openSans};
  font-size: 14px;
  line-height: 19px;
  margin: 0;
  font-weight: ${themes.primary.font.weight.normal};
  color: ${themes.primary.colors.primary};
`;

export const RemoveAttachButton = styled.button`
  display: block;
  width: 1.34em;
  height: 1.34em;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(${removeAttachButton.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const SubmitIconButton = styled(RemoveAttachButton)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.portfolioHover};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & path {
    transition: transform 0.5s ease-in-out;
  }
  & path:nth-child(1) {
    transform: translateY(36px);
  }
  &:hover {
    & path:nth-child(1) {
      transform: translateY(0px);
    }
    & path:nth-child(2) {
      transform: translateY(-36px);
    }
  }
`;
