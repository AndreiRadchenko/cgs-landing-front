import styled from "styled-components";
import chatOperatorAvatar from "../../../public/chatOperatorAvatar.svg";
import themes from "../../utils/themes";
import { AttachmentIcon } from "./ChatInputForm.styled";

export const MessageListContainer = styled.div`
  ::-webkit-scrollbar {
    width: 0.7rem;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: ${themes.primary.colors.chatContainerBgc};
  }

  :hover {
    ::-webkit-scrollbar {
      width: 0.7rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${themes.primary.colors.chatMessageBgc};
      border-radius: 10px;
      border: 3px solid ${themes.primary.colors.chatContainerBgc};
    }
  }
`;

interface IRecievedMessagesWrapper {
  notLast?: boolean;
}

export const RecievedMessagesWrapper = styled.div<IRecievedMessagesWrapper>`
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  margin-bottom: ${({ notLast }) => (notLast ? "0.5em" : "1.17em")};

  :nth-of-type(1) {
    padding-top: 1rem;
  }

  p {
    margin: 0;
  }
`;

export const SendedMessagesWrapper = styled(RecievedMessagesWrapper)`
  justify-content: end;
`;

export const AvatarWrapper = styled.div`
  height: 39px;
  width: 39px;

  background-image: url(${chatOperatorAvatar.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AvatarImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

interface IMessagesWrapper {
  notFirst?: boolean;
}

export const MessagesWrapper = styled.div<IMessagesWrapper>`
  padding-left: calc(${({ notFirst }) => (notFirst ? "39px + 0.5em" : "0")});
  width: 75%;
`;

export const MessageSender = styled.p`
  font-weight: ${themes.primary.font.weight.semiBold};
  line-height: 1.33em;

  :nth-of-type(1) {
    margin-bottom: 0.33em;
  }
`;

export const RecivedMessageBox = styled.p`
  width: fit-content;
  max-width: 100%;
  padding: 0.67em;

  overflow-wrap: break-word;
  line-height: 19px;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: 14px;
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.primary};

  border-radius: 0px 6px 6px 6px;
  background-color: ${themes.primary.colors.chatMessageBgc};

  :not(:last-of-type) {
    margin-bottom: 0.5em;
  }
`;

export const SendedMessageBox = styled(RecivedMessageBox)`
  margin-left: auto;
  border-radius: 6px 0 6px 6px;
  background-color: ${themes.primary.colors.chatSendedMessageBgc};

  :nth-of-type(n) {
    margin-left: auto;
  }
`;

export const RecievdMessageTime = styled.span`
  display: block;
  width: fit-content;
  padding-top: 0.33em;

  font-size: 12px;
  line-height: 16px;
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.headerBorder};
`;

export const SendedMessageTime = styled(RecievdMessageTime)`
  margin-left: auto;
`;

export const RecivedMessageAttachments = styled.img`
  display: block;
  height: 60px;
  width: 60px;
`;

export const SendedMessageAttachments = styled(RecivedMessageAttachments)`
  margin-left: auto;
`;

export const AdminMessageAttachment = styled(AttachmentIcon)`
  width: 4.66em;
  height: 4.66em;
`;

export const UserMessageAttachment = styled(AdminMessageAttachment)`
  margin-left: auto;
`;
