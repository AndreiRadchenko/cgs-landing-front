import styled from "styled-components";
import chatOperatorAvatar from "../../../public/chatOperatorAvatar.svg";
import themes from "../../utils/themes";
import { AttachmentIcon } from "./ChatInputForm.styled";
import { messageShow } from "../Animations.styled";

export const MessageListContainer = styled.div`
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 0.7rem;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: ${themes.primary.colors.chatContainerBgc};
  }

  :hover {
    padding-right: 5px;

    ::-webkit-scrollbar {
      width: 0.7rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${themes.primary.colors.chatMessageBgc};
      border-radius: 10px;
      border: 3px solid ${themes.primary.colors.chatContainerBgc};
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding-right: 11px;

    ::-webkit-scrollbar {
      width: 0.7rem;
    }

    :hover {
      padding-right: 11px;

      ::-webkit-scrollbar {
        width: 0.7rem;
      }
    }

    @supports (-webkit-hyphens: none) {
      padding-right: calc(0.7rem + 11px);

      :hover {
        padding-right: calc(0.7rem + 11px);
      }
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
    padding-top: 19px;
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
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 12px;
  line-height: 16px;

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

  border-radius: 0 6px 6px 6px;
  background-color: ${themes.primary.colors.chatMessageBgc};

  &.msgAnimate {
    transform: scale(0);
    max-height: 0;

    overflow: hidden;
    animation: ${messageShow} 0.15s ease-out 0s forwards;
  }

  :not(:last-of-type) {
    margin-bottom: 0.5em;
  }

  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: underline;
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

export const UserMessageAttachment = styled.div`
  margin-left: auto;
  border-radius: 5px;
  background-color: ${themes.primary.colors.attachmentIcon};
  padding: 2px;
  display: grid;
  place-items: center;
`;

export const AdminMessageAttachment = styled(UserMessageAttachment)`
  background-color: ${themes.primary.colors.chatMessageBgc};
`;

export const UserMessageAttachmentFile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-left: auto;

  border-radius: 6px 0 6px 6px;
  background-color: ${themes.primary.colors.chatSendedMessageBgc};
  padding: 0.67em;

  line-height: 19px;
  font-weight: ${themes.primary.font.weight.normal};
  font-size: 14px;
  font-family: ${themes.primary.font.family.openSans};
`;

export const AdminMessageAttachmentFile = styled(UserMessageAttachmentFile)`
  background-color: ${themes.primary.colors.chatMessageBgc};
`;

export const UserMessageFileExt = styled.div`
  background: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.secondary};
  height: 45px;
  width: 45px;
  border-radius: 5px;
  display: grid;
  place-items: center;
`;

export const UserMessageFileName = styled.div`
  width: fit-content;
  max-width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
